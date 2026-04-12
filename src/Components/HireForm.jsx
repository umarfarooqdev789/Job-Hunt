import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function HireForm() {
    const { state } = useLocation();
    const workerEmail = state?.email;
    const workerName = state?.name;
    const workerSkill = state?.skill;
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        const form = e.target;

        const templateParams = {
            to_email: workerEmail,
            worker_name: workerName,
            worker_skill: workerSkill,
            from_name: form.from_name.value,
            from_email: form.from_email.value,
            phone: form.phone.value,
            company: form.company.value,
            job_title: form.job_title.value,
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
                <h1 className="text-2xl font-extrabold text-black mb-2">Hire Form</h1>
                {status === 'success' ? (
                    <div className="text-green-600 font-semibold text-center py-10">
                        ✅ Request sent! {workerName} will contact you soon.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Your Full Name</label>
                            <input name="from_name" type="text" required
                                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Your Email</label>
                            <input name="from_email" type="email" required
                                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Phone Number</label>
                            <input name="phone" type="tel" required
                                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Company Name</label>
                            <input name="company" type="text" required
                                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-sm font-medium text-gray-700">Job Title</label>
                            <input name="job_title" type="text" required
                                className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                        )}

                        <button type="submit" disabled={status === 'loading'}
                            className="mt-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold py-3 rounded-xl transition-all duration-300">
                            {status === 'loading' ? 'Sending...' : 'Send Hire Request →'}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default HireForm;