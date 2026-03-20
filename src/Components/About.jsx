import React from "react";
function AboutUs() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          About Us
        </h2>

        <p className="text-gray-600 text-lg  max-w-3xl mx-auto">
          Job Hunt is a modern job-search platform built to connect talented
          workers with people who need reliable services. Our platform makes it
          simple and fast to find electricians, plumbers, carpenters, and other
          skilled professionals.
        </p>

        <p className="text-gray-600 text-lg  max-w-3xl mx-auto mt-4">
          Our mission is to make hiring easy, transparent, and accessible for
          everyone. Whether you're looking for work or need trustworthy
          professionals, Job Hunt provides a smooth, user-friendly experience to
          help you connect instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
        <div className="bg-white shadow-sm rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Fast Matching
          </h3>
          <p className="text-gray-600 text-sm">
            Instantly connect with nearby skilled workers or job opportunities
            based on your location.
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Trusted Workers
          </h3>
          <p className="text-gray-600 text-sm">
            Each profile provides clear details like skills, ratings, and
            experience for reliable hiring.
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-2xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-3 text-gray-800">
            Seamless Experience
          </h3>
          <p className="text-gray-600 text-sm">
            A clean, easy-to-use platform designed for both job seekers and
            employers.
          </p>
        </div>
      </div>
    </section>
  );
}
export default AboutUs
