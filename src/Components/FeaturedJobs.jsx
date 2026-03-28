import React from 'react'
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp",
        location: "Lahore, Pakistan",
        type: "Full-time",
        salary: "Rs 80,000 – Rs 120,000",
        logo: "TC",
        color: "#3b82f6",
        tags: ["React", "Tailwind", "JavaScript"],
        description: "TechCorp is looking for a skilled Frontend Developer to build modern, responsive web applications using React and Tailwind CSS.",
        requirements: [
            "2+ years of frontend development experience",
            "Strong knowledge of React and JavaScript",
            "Experience with Tailwind CSS",
            "Good understanding of REST APIs",
            "Eye for clean UI/UX design",
        ],
        posted: "1 day ago",
        featured: true,
    },
    {
        id: 2,
        title: "Graphic Designer",
        company: "CreativeHub",
        location: "Karachi, Pakistan",
        type: "Part-time",
        salary: "Rs 50,000 – Rs 80,000",
        logo: "CH",
        color: "#f59e0b",
        tags: ["Figma", "Photoshop", "Illustrator"],
        description: "CreativeHub needs a creative Graphic Designer to design stunning visuals for social media, branding, and marketing campaigns.",
        requirements: [
            "2+ years of graphic design experience",
            "Proficiency in Figma and Adobe Suite",
            "Strong portfolio of design work",
            "Ability to meet deadlines",
            "Good communication skills",
        ],
        posted: "2 days ago",
        featured: false,
    },
    {
        id: 3,
        title: "Digital Marketer",
        company: "GrowthX",
        location: "Islamabad, Pakistan",
        type: "Full-time",
        salary: "Rs 70,000 – Rs 100,000",
        logo: "GX",
        color: "#8b5cf6",
        tags: ["SEO", "Facebook Ads", "Analytics"],
        description: "GrowthX is hiring a Digital Marketer to drive online growth through SEO, paid ads, and content strategies.",
        requirements: [
            "3+ years of digital marketing experience",
            "Experience with Facebook & Google Ads",
            "Strong knowledge of SEO",
            "Data-driven mindset",
            "Experience with Google Analytics",
        ],
        posted: "3 days ago",
        featured: true,
    },
    {
        id: 4,
        title: "Backend Developer",
        company: "CodeNest",
        location: "Lahore, Pakistan",
        type: "Full-time",
        salary: "Rs 100,000 – Rs 150,000",
        logo: "CN",
        color: "#10b981",
        tags: ["Node.js", "MongoDB", "Express"],
        description: "CodeNest is looking for a Backend Developer to build scalable APIs and manage databases for our growing SaaS platform.",
        requirements: [
            "3+ years of backend development",
            "Strong knowledge of Node.js and MongoDB",
            "Experience building REST APIs",
            "Understanding of authentication (JWT/OAuth)",
            "Problem-solving mindset",
        ],
        posted: "1 day ago",
        featured: true,
    }
];
import { Link } from "react-router-dom"
function FeaturedJobs() {
    return (
        <div>
            <div className="bg-gray-50 py-10">
                <h1 className="font-bold text-3xl text-center mb-8">Featured Jobs</h1>
                <div className="flex gap-6 justify-center flex-wrap px-6">
                    {jobs.map((job) => (
                        <div key={job.id} className="bg-white rounded-xl shadow-md p-6 w-72">
                            <h2 className="font-bold text-lg">{job.title}</h2>
                            <p className="text-gray-500 text-sm">{job.company}</p>
                            <p className="text-gray-400 text-sm">📍 {job.location}</p>
                            <p className="text-blue-600 font-semibold mt-2">{job.salary}</p>
                            <Link
                                to={`/jobdetail/${job.id}`}
                                className="mt-4 block text-center w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                            >
                                Apply Now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedJobs
