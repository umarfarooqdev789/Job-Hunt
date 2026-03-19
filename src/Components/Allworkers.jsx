

const workers = [
  {
    id: 1,
    name: "Ahmad Ali",
    skill: "Electrician",
    city: "Lahore",
    rating: 4.9,
    experience: "5 Years Experience",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCE0ikShlBGif1RagKPuWVIJqFMFjls_pYMA&s",
    tags: ["Wiring", "Solar Panels", "AC Repair"],
    description: "Ahmad Ali is a highly skilled electrician with over 5 years of hands-on experience in residential and commercial electrical work. He specializes in wiring, solar panel installation, and AC repair with a strong focus on safety and quality.",
    requirements: [
      "Available for both home and office visits",
      "Brings own tools and equipment",
      "Experienced in 3-phase wiring",
      "Solar panel installation certified",
      "24/7 emergency service available"
    ]
  },
  {
    id: 2,
    name: "Sara Khan",
    skill: "Graphic Designer",
    city: "Karachi",
    rating: 4.8,
    experience: "Logo & Branding Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ShOJm1-4cQ1bmsFePPNuHsayVe15_Ko67w&s",
    tags: ["Logo Design", "Branding", "Adobe Illustrator"],
    description: "Sara Khan is a creative graphic designer specializing in logo design and brand identity. With a sharp eye for aesthetics and strong command of Adobe tools, she delivers visually stunning results that help businesses stand out.",
    requirements: [
      "Delivers work within 3–5 business days",
      "Provides unlimited revisions on logos",
      "Expert in Adobe Illustrator and Photoshop",
      "Creates full brand kits including fonts and colors",
      "Available for remote work across Pakistan"
    ]
  },
  {
    id: 3,
    name: "Usman Tariq",
    skill: "Plumber",
    city: "Islamabad",
    rating: 4.7,
    experience: "Fast & Reliable",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8ANeHOTri8czlbME7Jab27gYERgA4cZ9PQ&s",
    tags: ["Pipe Fitting", "Leak Repair", "Bathroom Fitting"],
    description: "Usman Tariq is a reliable and fast plumber based in Islamabad. He handles everything from minor leak repairs to complete bathroom fittings. Known for his punctuality and clean work, Usman is the go-to plumber in the twin cities.",
    requirements: [
      "Same-day service available",
      "Specializes in bathroom and kitchen fittings",
      "Uses high-quality pipes and fittings",
      "Experienced with both underground and overhead systems",
      "Free inspection before starting work"
    ]
  },
  {
    id: 4,
    name: "Iqra Javed",
    skill: "Digital Marketer",
    city: "Multan",
    rating: 4.8,
    experience: "Facebook & Instagram Ads",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUS0Du3g1dTwYVjRTwA6QfSgV_v1ghO9xVA&s",
    tags: ["Facebook Ads", "Instagram", "SEO"],
    description: "Iqra Javed is a results-driven digital marketer with deep expertise in Facebook and Instagram advertising. She helps businesses grow their online presence, generate leads, and increase sales through targeted ad campaigns and SEO strategies.",
    requirements: [
      "Manages ad budgets from Rs. 5,000 to Rs. 500,000+",
      "Provides weekly performance reports",
      "Expert in Meta Business Suite",
      "Experienced in Google Ads and SEO",
      "Offers free 30-minute consultation"
    ]
  },
  {
    id: 5,
    name: "Ali Raza",
    skill: "Carpenter",
    city: "Faisalabad",
    rating: 4.6,
    experience: "Custom Furniture",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsGz9-zc4aJIqb7P20R7sjqamKs-_8BvC_A&s",
    tags: ["Custom Furniture", "Wood Work", "Cabinet Making"],
    description: "Ali Raza is a skilled carpenter from Faisalabad with years of experience in crafting custom furniture and woodwork. From beds and wardrobes to kitchen cabinets, he delivers high-quality craftsmanship tailored to your exact needs.",
    requirements: [
      "Specializes in custom-made furniture",
      "Uses premium quality wood and materials",
      "Provides home visit for measurements",
      "Delivers and installs furniture at your location",
      "Offers warranty on all completed work"
    ]
  },
  {
    id: 6,
    name: "Bilal Hassan",
    skill: "Senior Frontend Developer",
    city: "Lahore",
    rating: 4.9,
    experience: "React & TypeScript Expert",
    img: "https://snapperit.com/wp-content/uploads/2025/09/image-5.png",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    description: "Bilal Hassan is a senior frontend developer with strong expertise in React and TypeScript. He builds fast, scalable, and beautiful web applications with clean code and modern best practices. Available for freelance and full-time projects.",
    requirements: [
      "5+ years of experience in frontend development",
      "Strong command of React, TypeScript, and Tailwind",
      "Experience with REST APIs and state management",
      "Delivers pixel-perfect UI from Figma designs",
      "Available for both short and long-term projects"
    ]
  },
  {
    id: 7,
    name: "Ayesha Noor",
    skill: "Product Designer",
    city: "Karachi",
    rating: 4.8,
    experience: "Figma & UX Research",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjjo3RRvXL1GPPchBXGdQMgs2tRL6AHi-AQ&s",
    tags: ["Figma", "UX Research", "Prototyping"],
    description: "Ayesha Noor is a talented product designer who specializes in creating user-centered digital experiences. She combines UX research with stunning visual design to deliver products that users love, from wireframes to high-fidelity prototypes.",
    requirements: [
      "Expert in Figma and Adobe XD",
      "Conducts user research and usability testing",
      "Creates complete design systems",
      "Experienced with mobile and web app design",
      "Collaborates closely with development teams"
    ]
  },
  {
    id: 8,
    name: "Hamza Sheikh",
    skill: "Backend Engineer",
    city: "Islamabad",
    rating: 4.7,
    experience: "Node.js & PostgreSQL",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9-uFRy3rLu7BLyilJ8UFDcjagZcf2MSYlmg&s",
    tags: ["Node.js", "PostgreSQL", "AWS"],
    description: "Hamza Sheikh is a backend engineer with deep expertise in building robust APIs and scalable server-side systems. He works with Node.js, PostgreSQL, and AWS to deliver high-performance backend solutions for startups and enterprises alike.",
    requirements: [
      "4+ years of backend development experience",
      "Strong skills in Node.js and Express.js",
      "Database design with PostgreSQL and MongoDB",
      "Cloud deployment on AWS and Heroku",
      "Experience with microservices architecture"
    ]
  },
  {
    id: 9,
    name: "Zara Malik",
    skill: "DevOps Engineer",
    city: "Rawalpindi",
    rating: 4.8,
    experience: "Kubernetes & Docker",
    img: "https://nrtechnologies.org/wp-content/uploads/2024/11/programming-background-collage-scaled-e1754161397912-1024x695.jpg",
    tags: ["Kubernetes", "Docker", "Terraform"],
    description: "Zara Malik is an experienced DevOps engineer who automates deployments, manages cloud infrastructure, and ensures system reliability. She is skilled in Kubernetes, Docker, and Terraform with a passion for building efficient CI/CD pipelines.",
    requirements: [
      "3+ years of DevOps and cloud experience",
      "Hands-on with Kubernetes and Docker",
      "Infrastructure as Code using Terraform",
      "CI/CD pipeline setup with GitHub Actions",
      "24/7 monitoring and incident response"
    ]
  },
  {
    id: 10,
    name: "Faisal Mehmood",
    skill: "Data Scientist",
    city: "Faisalabad",
    rating: 4.6,
    experience: "Python & TensorFlow",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1t_7UrIc8dJKgHiZpO60vVamDMYgYdqCiLQ&s",
    tags: ["Python", "TensorFlow", "SQL"],
    description: "Faisal Mehmood is a data scientist with strong skills in Python, TensorFlow, and SQL. He builds and deploys machine learning models that turn raw data into actionable insights. He has worked on projects ranging from predictive analytics to NLP.",
    requirements: [
      "3+ years in data science and machine learning",
      "Proficient in Python, Pandas, and NumPy",
      "Experience with TensorFlow and Scikit-learn",
      "Strong SQL and data wrangling skills",
      "Delivers detailed analysis reports with visualizations"
    ]
  }
];

import { useMemo, useState, useEffect, useContext } from "react";
import { SearchContext } from "../SearchContext";
import {Link} from "react-router-dom"

function Allworkers() {
  const { input, saved, toggleSave } = useContext(SearchContext);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (input) {
      setFilter(input);
    }
  }, [input]);

  const filterProducts = useMemo(() => {
    if (!filter) return workers;

    const searchTerm = filter.toLowerCase();

    return workers.filter((worker) => {
      return (
        worker.name.toLowerCase().includes(searchTerm) ||
        worker.skill.toLowerCase().includes(searchTerm) ||
        worker.city.toLowerCase().includes(searchTerm) ||
        worker.experience.toLowerCase().includes(searchTerm)
      );
    });
  }, [filter]);

  return (
    <>
      <section>
        <div className="px-10 py-10 flex flex-col gap-3.5 sm:px-20">
          <h1 className="font-bold text-5xl">Browse Jobs</h1>
          <h2 className="text-[14px]">
            Find the perfect role from available positions
          </h2>

          <input
            type="text"
            placeholder="🔍 Search by name, skill or experience..."
            className="w-full max-w-full px-5 py-3 outline-none border border-gray-300 rounded-lg"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </section>

      <div className="bg-gray-50 pb-2.5">
        <div className="flex gap-8 justify-center flex-wrap p-5">
          {filterProducts.map((worker) => {
            const isSaved = saved.some((item) => item.id === worker.id);

            return (
              <div
                className="relative min-h-64 rounded-xl shadow-md bg-white overflow-hidden w-54"
                key={worker.id}
              >
                <img
                  src={worker.img}
                  alt={worker.name}
                  className="rounded w-full h-40 object-cover"
                />

                <ul className="py-3.5 px-5 space-y-1.5">
                  <li className="font-bold">{worker.name}</li>
                  <li className="font-medium text-[14px]">{worker.skill}</li>
                  <li className="text-gray-500 font-light">{worker.city}</li>
                  <li>⭐{worker.rating}</li>
                  <li className="text-gray-600 text-[12px]">{worker.experience}</li>
                </ul>

                <div className="flex px-2 justify-around py-5">
                  <button
                    onClick={() => {
                      console.log(worker)
                      toggleSave(worker)}}
                    className="text-2xl cursor-pointer"
                  >
                    {isSaved ? "♥" : "♡"}
                  </button>

                  <Link to={`/card/${worker.id}`} className="text-[12px] px-1.5 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                    View & Apply →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Allworkers;