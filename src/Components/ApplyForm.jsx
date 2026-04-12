import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function ApplyForm() {
  const { state } = useLocation();
  const jobEmail = state?.email;
  const jobTitle = state?.title;
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const form = e.target;

    const templateParams = {
      to_email: jobEmail,
      job_title: jobTitle,
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      phone: form.phone.value,
      city: form.city.value,
      cv_link: form.cv_link.value,
    };

    try {
      await emailjs.send(
        'service_xau67f3',
        'template_mqqufah',
        templateParams,
        'Ir3DkV7QattwbLDjS'
      );
      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
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
            ✅ Application submitted! We'll contact you soon.
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
              <label className="text-sm font-medium text-gray-700">CV Link</label>
              <input name="cv_link" type="url" placeholder="Google Drive CV link paste karo"
                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <p className="text-xs text-gray-400">Upload CV on Google drive and paste the URL link</p>
            </div>

            {status === 'error' && (
              <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
            )}

            <button type="submit" disabled={status === 'loading'}
              className="mt-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-all duration-300">
              {status === 'loading' ? 'Sending...' : 'Apply Now →'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ApplyForm;