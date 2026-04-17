import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { auth } from '../firebase';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const CLOUD_NAME = 'dyq90f7uz';
const UPLOAD_PRESET = 'my_cv_upload';

function ApplyForm() {
  const { state } = useLocation();
  const jobEmail = state?.email;
  const jobTitle = state?.title;
  const [status, setStatus] = useState('idle');
  const [cvFile, setCvFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
      { method: 'POST', body: formData }
    );

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error?.message || 'Upload failed');
    }
    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!cvFile) {
      setErrorMsg('Please select your CV to proceed.');
      return;
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedTypes.includes(cvFile.type)) {
      setErrorMsg('Invalid file type. Only PDF, DOC, or DOCX allowed.');
      return;
    }

    if (cvFile.size > 5 * 1024 * 1024) {
      setErrorMsg('File too large. Maximum size is 5MB.');
      return;
    }

    setStatus('uploading');

    try {
      const downloadURL = await uploadToCloudinary(cvFile);

      setStatus('sending');

      const applicationData = {
        job_title: jobTitle,
        to_email: jobEmail,
        from_name: e.target.from_name.value,
        from_email: e.target.from_email.value,
        phone: e.target.phone.value,
        city: e.target.city.value,
        cv_link: downloadURL,
        user_uid: auth.currentUser.uid,
        applied_at: serverTimestamp(),
      };

      // Save to Firestore database
      await addDoc(collection(db, 'applications'), applicationData);

      // Send email via EmailJS
      await emailjs.send(
        'service_xau67f3',
        'template_mqqufah',
        {
          to_email: jobEmail,
          job_title: jobTitle,
          from_name: applicationData.from_name,
          from_email: applicationData.from_email,
          phone: applicationData.phone,
          city: applicationData.city,
          cv_link: downloadURL,
        },
        'Ir3DkV7QattwbLDjS'
      );

      setStatus('success');
      e.target.reset();
      setCvFile(null);

    } catch (error) {
      console.error('Submit error:', error);
      setErrorMsg(error.message || 'Something went wrong. Please try again.');
      setStatus('idle');
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 flex justify-center items-start">
      <div className="w-full max-w-xl bg-white rounded-2xl border border-gray-200 shadow-md p-10">

        <h1 className="text-2xl font-extrabold text-black mb-2">Job Apply Form</h1>
        {jobTitle && (
          <p className="text-blue-600 font-medium mb-6">Applying for: {jobTitle}</p>
        )}

        {status === 'success' ? (
          <div className="text-green-600 font-semibold text-center py-10">
            Application submitted successfully! We'll contact you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input name="from_name" type="text" required
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input name="from_email" type="email" required
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Phone</label>
              <input name="phone" type="tel" required
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">City</label>
              <input name="city" type="text" required
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Upload CV (PDF / DOC)</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                required
                onChange={(e) => { setCvFile(e.target.files[0]); setErrorMsg(''); }}
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              />
            </div>

            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'uploading' || status === 'sending'}
              className="mt-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-all duration-300"
            >
              {status === 'uploading'
                ? 'Uploading CV...'
                : status === 'sending'
                  ? 'Sending Application...'
                  : 'Apply Now'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ApplyForm;