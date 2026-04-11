import React from 'react'
const jobs = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechCorp",
        email: "techcorp@gmail.com",
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
        email: "creativehub@gmail.com",
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
        email: "growthx@gmail.com",
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
        email: "codenest@gmail.com",
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
    },
    {
        id: 5,
        title: "UI/UX Designer",
        company: "PixelCraft",
        email: "pixelcraft@gmail.com",
        location: "Karachi, Pakistan",
        type: "Remote",
        salary: "Rs 60,000 – Rs 90,000",
        logo: "PC",
        color: "#ec4899",
        tags: ["Figma", "Wireframing", "Prototyping"],
        description: "PixelCraft needs a UI/UX Designer to create beautiful, user-friendly interfaces for mobile and web applications.",
        requirements: [
            "2+ years of UI/UX design experience",
            "Strong Figma skills",
            "Portfolio with real projects",
            "Understanding of user research",
            "Ability to create design systems",
        ],
        posted: "5 days ago",
        featured: false,
    },
    {
        id: 6,
        title: "React Native Developer",
        company: "AppForge",
        email: "appforge@gmail.com",
        location: "Faisalabad, Pakistan",
        type: "Full-time",
        salary: "Rs 90,000 – Rs 130,000",
        logo: "AF",
        color: "#06b6d4",
        tags: ["React Native", "Firebase", "Redux"],
        description: "AppForge is hiring a React Native Developer to build high-performance mobile apps for iOS and Android platforms.",
        requirements: [
            "2+ years of React Native experience",
            "Knowledge of Firebase and Redux",
            "Experience publishing apps on Play Store/App Store",
            "Understanding of mobile UI patterns",
            "Strong JavaScript skills",
        ],
        posted: "2 days ago",
        featured: false,
    },
    {
        id: 7,
        title: "Data Analyst",
        company: "InsightIQ",
        email: "insightiq@gmail.com",
        location: "Islamabad, Pakistan",
        type: "Full-time",
        salary: "Rs 85,000 – Rs 120,000",
        logo: "IQ",
        color: "#f97316",
        tags: ["Python", "Excel", "Power BI"],
        description: "InsightIQ is looking for a Data Analyst to analyze business data and create dashboards that drive smart decisions.",
        requirements: [
            "2+ years of data analysis experience",
            "Proficiency in Python and Excel",
            "Experience with Power BI or Tableau",
            "Strong analytical thinking",
            "Knowledge of SQL databases",
        ],
        posted: "4 days ago",
        featured: true,
    },
    {
        id: 8,
        title: "Content Writer",
        company: "WordFlow",
        email: "wordflow@gmail.com",
        location: "Remote",
        type: "Part-time",
        salary: "Rs 40,000 – Rs 60,000",
        logo: "WF",
        color: "#64748b",
        tags: ["Blog Writing", "SEO", "Copywriting"],
        description: "WordFlow needs a talented Content Writer to create engaging blogs, website copy, and social media content.",
        requirements: [
            "1+ years of content writing experience",
            "Strong English writing skills",
            "Basic knowledge of SEO",
            "Ability to write in different tones",
            "Meet deadlines consistently",
        ],
        posted: "1 day ago",
        featured: false,
    },
    {
        id: 9,
        title: "DevOps Engineer",
        company: "CloudBase",
        email: "cloudbase@gmail.com",
        location: "Lahore, Pakistan",
        type: "Full-time",
        salary: "Rs 150,000 – Rs 200,000",
        logo: "CB",
        color: "#ef4444",
        tags: ["Docker", "AWS", "CI/CD"],
        description: "CloudBase is hiring a DevOps Engineer to manage cloud infrastructure, deployments, and CI/CD pipelines.",
        requirements: [
            "3+ years of DevOps experience",
            "Strong knowledge of AWS or Azure",
            "Experience with Docker and Kubernetes",
            "CI/CD pipeline setup experience",
            "Linux system administration skills",
        ],
        posted: "6 days ago",
        featured: true,
    },
    {
        id: 10,
        title: "WordPress Developer",
        company: "WebMakers",
        email: "webmakers@gmail.com",
        location: "Multan, Pakistan",
        type: "Freelance",
        salary: "Rs 50,000 – Rs 80,000",
        logo: "WM",
        color: "#0ea5e9",
        tags: ["WordPress", "PHP", "Elementor"],
        description: "WebMakers needs a WordPress Developer to build and customize websites for clients across various industries.",
        requirements: [
            "2+ years of WordPress development",
            "Knowledge of PHP and MySQL",
            "Experience with Elementor or Divi",
            "Ability to create custom themes/plugins",
            "Client communication skills",
        ],
        posted: "3 days ago",
        featured: false,
    },
];
import { Link } from "react-router-dom"
import { useContext } from "react";
import { SearchContext } from "../SearchContext";
function FeaturedJobs() {
    const { saved, toggleSave } = useContext(SearchContext);
    return (
        <div>
            <div className="bg-gray-50 py-10">
                <h1 className="font-bold text-3xl text-center mb-8">Featured Jobs</h1>
                <div className="flex gap-6 justify-center flex-wrap px-6">
                    {jobs.map((worker) => {
                        const isSaved = saved.some((item) => item.id === worker.id); // ✅ Now valid
                        return (
                            <div
                                key={worker.id}
                                className="px-5 py-6 rounded-xl shadow-md bg-white overflow-hidden w-72 flex flex-col gap-3"
                            >
                                <div className="flex flex-col gap-1">
                                    <h2 className="font-bold text-lg">{worker.title}</h2>
                                    <p className="text-gray-500 text-sm">{worker.company}</p>
                                    <p className="text-gray-400 text-sm">📍 {worker.location}</p>
                                    <p className="text-blue-600 font-semibold mt-1">{worker.salary}</p>
                                </div>
                                <div className="flex items-center justify-between gap-3 mt-2">
                                    <button
                                        onClick={() => toggleSave(worker)}
                                        className="text-2xl cursor-pointer"
                                    >
                                        {isSaved ? "♥" : "♡"}
                                    </button>
                                    <div className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                        <Link to={`/jobdetail/${worker.id}`} className="block text-center text-sm">
                                            Apply Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })} 
                </div>
            </div>
        </div>
    )
}

export default FeaturedJobs
