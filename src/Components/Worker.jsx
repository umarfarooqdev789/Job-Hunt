import { useState } from "react"

import { Link } from "react-router-dom"

const workers = [
  {
    id: 1,
    name: "Ahmad Ali",
    email: "ahmadali@gmail.com",
    skill: "Electrician",
    city: "Lahore",
    rating: 4.9,
    experience: "5 Years Experience",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCE0ikShlBGif1RagKPuWVIJqFMFjls_pYMA&s",
    tags: ["Wiring", "Solar Panels", "AC Repair"],
    description: "Ahmad Ali is a highly skilled electrician with over 5 years of hands-on experience in residential and commercial electrical work. He specializes in wiring, solar panel installation, and AC repair.",
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
    email: "sarakhan@gmail.com",
    skill: "Graphic Designer",
    city: "Karachi",
    rating: 4.8,
    experience: "Logo & Branding Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ShOJm1-4cQ1bmsFePPNuHsayVe15_Ko67w&s",
    tags: ["Logo Design", "Branding", "Adobe Illustrator"],
    description: "Sara Khan is a creative graphic designer specializing in logo design and brand identity. She delivers visually stunning results that help businesses stand out.",
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
    email: "usmantariq@gmail.com",
    skill: "Plumber",
    city: "Islamabad",
    rating: 4.7,
    experience: "Fast & Reliable",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8ANeHOTri8czlbME7Jab27gYERgA4cZ9PQ&s",
    tags: ["Pipe Fitting", "Leak Repair", "Bathroom Fitting"],
    description: "Usman Tariq is a reliable and fast plumber based in Islamabad. He handles everything from minor leak repairs to complete bathroom fittings. Known for his punctuality and clean work.",
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
    email: "iqrajaved@gmail.com",
    skill: "Digital Marketer",
    city: "Multan",
    rating: 4.8,
    experience: "Facebook & Instagram Ads",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUS0Du3g1dTwYVjRTwA6QfSgV_v1ghO9xVA&s",
    tags: ["Facebook Ads", "Instagram", "SEO"],
    description: "Iqra Javed is a results-driven digital marketer with deep expertise in Facebook and Instagram advertising. She helps businesses grow their online presence and increase sales.",
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
    email: "aliraza@gmail.com",
    skill: "Carpenter",
    city: "Faisalabad",
    rating: 4.6,
    experience: "Custom Furniture",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsGz9-zc4aJIqb7P20R7sjqamKs-_8BvC_A&s",
    tags: ["Custom Furniture", "Wood Work", "Cabinet Making"],
    description: "Ali Raza is a skilled carpenter from Faisalabad with years of experience in crafting custom furniture and woodwork. From beds and wardrobes to kitchen cabinets, he delivers high-quality craftsmanship.",
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
    name: "Fatima Noor",
    email: "fatimanoor@gmail.com",
    skill: "Web Developer",
    city: "Lahore",
    rating: 4.9,
    experience: "React & Node.js Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIT5NzHh088w8FmO6rTeGYi3spnEXTH7YEUc2UaaB7fQwOH6eXnnOCZ4&s",
    tags: ["React", "Node.js", "Full Stack"],
    description: "Fatima Noor is a full stack web developer from Lahore with expertise in React and Node.js. She builds fast, responsive, and scalable web applications for startups and businesses.",
    requirements: [
      "Develops responsive websites and web apps",
      "Expert in React, Node.js and MongoDB",
      "Delivers projects within agreed timeline",
      "Provides post-launch support and maintenance",
      "Available for freelance and long-term projects"
    ]
  },
  {
    id: 7,
    name: "Bilal Sheikh",
    email: "bilalsheikh@gmail.com",
    skill: "Painter",
    city: "Rawalpindi",
    rating: 4.5,
    experience: "Interior & Exterior",
    img: "https://thumbs.dreamstime.com/b/painter-worker-roller-painting-wall-surface-color-home-impovement-refurbishment-painter-worker-roller-159778171.jpg",
    tags: ["Interior Painting", "Exterior Painting", "Wall Texture"],
    description: "Bilal Sheikh is an experienced painter from Rawalpindi specializing in interior and exterior painting. He uses premium paints and modern techniques to give your home or office a fresh, professional look.",
    requirements: [
      "Handles both interior and exterior painting",
      "Uses branded and weather-resistant paints",
      "Provides color consultation before work",
      "Covers furniture and floors before painting",
      "Completes work on time with clean finish"
    ]
  },
  {
    id: 8,
    name: "Zainab Malik",
    email: "zainabmalik@gmail.com",
    skill: "Content Writer",
    city: "Karachi",
    rating: 4.7,
    experience: "SEO & Blog Writing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXdwXAVtkMSRJ6SSTZZezOONzqHQpRJWsDQ&s",
    tags: ["SEO Writing", "Blog Posts", "Copywriting"],
    description: "Zainab Malik is a professional content writer from Karachi with expertise in SEO and blog writing. She crafts engaging, keyword-optimized content that drives traffic and boosts your brand's online visibility.",
    requirements: [
      "Writes SEO-optimized articles and blogs",
      "Delivers content within 24–48 hours",
      "Expert in keyword research and on-page SEO",
      "Writes for websites, social media and email campaigns",
      "Provides plagiarism-free content with Grammarly report"
    ]
  },
  {
    id: 9,
    name: "Hassan Mehmood",
    email: "hassanmehmood@gmail.com",
    skill: "AC Technician",
    city: "Lahore",
    rating: 4.8,
    experience: "Split & Window AC",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BarV9BsCo-vL9ppJsNL2TzkSs04mDSJzZA&s",
    tags: ["AC Installation", "AC Repair", "Gas Refilling"],
    description: "Hassan Mehmood is a certified AC technician from Lahore with extensive experience in split and window AC installation, repair, and maintenance. He ensures your cooling system runs efficiently all year round.",
    requirements: [
      "Installs and repairs all major AC brands",
      "Provides gas refilling and cleaning service",
      "Available for emergency calls",
      "Offers annual maintenance contracts",
      "Experienced with inverter and non-inverter ACs"
    ]
  },
  {
    id: 10,
    name: "Ayesha Siddiqui",
    email: "ayeshasiddiqui@gmail.com",
    skill: "Fashion Designer",
    city: "Karachi",
    rating: 4.9,
    experience: "Bridal & Party Wear",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOb6KrFT_DG3z_2TXrhudCvZNEMK3UAv1jw&s",
    tags: ["Bridal Wear", "Party Dresses", "Embroidery"],
    description: "Ayesha Siddiqui is a top fashion designer from Karachi specializing in bridal and party wear. Her unique designs blend traditional Pakistani aesthetics with modern trends, creating stunning outfits for every occasion.",
    requirements: [
      "Custom stitching and designing available",
      "Specializes in bridal lehenga and sharara",
      "Uses premium fabrics and hand embroidery",
      "Delivers within 2–4 weeks depending on design",
      "Offers fitting sessions at her studio"
    ]
  },
  {
    id: 11,
    name: "Kamran Butt",
    email: "kamranbutt@gmail.com",
    skill: "Welder",
    city: "Sialkot",
    rating: 4.6,
    experience: "Metal & Steel Work",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MCHn_jd0Lcn1L49kjqGNIwgBPPUNZlJAfA&s",
    tags: ["Arc Welding", "Steel Fabrication", "Gate Making"],
    description: "Kamran Butt is a skilled welder from Sialkot with expertise in metal and steel fabrication. He handles everything from custom gates and grills to industrial welding projects with precision and durability.",
    requirements: [
      "Expert in arc and MIG welding",
      "Fabricates custom gates, grills and railings",
      "Works with mild steel, stainless steel and iron",
      "Provides on-site and workshop services",
      "Delivers strong and rust-resistant work"
    ]
  },
  {
    id: 12,
    name: "Sana Iftikhar",
    email: "sanaiftikhar@gmail.com",
    skill: "Tutor",
    city: "Islamabad",
    rating: 4.9,
    experience: "Maths & Science Expert",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_u-rzvGka2BVUP_2N3O0YMbboPeTkZuIV4A&s",
    tags: ["Mathematics", "Physics", "Online Tutoring"],
    description: "Sana Iftikhar is a highly qualified tutor from Islamabad specializing in Maths and Science for O and A level students. She makes complex concepts simple and helps students achieve top grades.",
    requirements: [
      "Teaches Maths, Physics and Chemistry",
      "Available for home and online sessions",
      "Experienced with O levels, A levels and Matric",
      "Provides notes and past paper practice",
      "Flexible timing including weekends"
    ]
  },
  {
    id: 13,
    name: "Junaid Aslam",
    email: "junaidaslam@gmail.com",
    skill: "Mechanic",
    city: "Gujranwala",
    rating: 4.7,
    experience: "Car & Bike Repair",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKX71-VbObnlPsuL3TTqQHelW-PRgPGYo7ZQ&s",
    tags: ["Car Repair", "Bike Repair", "Engine Overhaul"],
    description: "Junaid Aslam is an experienced mechanic from Gujranwala who specializes in car and bike repair. From routine servicing to complex engine overhauls, he ensures your vehicle runs smoothly and safely.",
    requirements: [
      "Repairs all Japanese and local car brands",
      "Expert in engine, gearbox and suspension work",
      "Provides honest diagnosis before repair",
      "Uses quality spare parts and lubricants",
      "Home pickup and drop service available"
    ]
  },
  {
    id: 14,
    name: "Nadia Hussain",
    email: "nadiahussain@gmail.com",
    skill: "Cook / Chef",
    city: "Lahore",
    rating: 4.8,
    experience: "Desi & Chinese Food",
    img: "https://randomuser.me/api/portraits/women/80.jpg",
    tags: ["Desi Food", "Chinese Food", "Catering"],
    description: "Nadia Hussain is a professional chef from Lahore with expertise in traditional Desi and Chinese cuisine. She offers home catering services for events, parties, and daily meal plans with fresh and hygienic food.",
    requirements: [
      "Available for home catering and events",
      "Specializes in Desi, Chinese and BBQ",
      "Prepares fresh food using quality ingredients",
      "Can cook for 10 to 500+ guests",
      "Provides tasting session before booking"
    ]
  },
  {
    id: 15,
    name: "Shahzad Rana",
    email: "shahzadrana@gmail.com",
    skill: "Security Guard",
    city: "Peshawar",
    rating: 4.5,
    experience: "Commercial & Residential",
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    tags: ["Security", "CCTV Monitoring", "Guard Service"],
    description: "Shahzad Rana is a trained security guard from Peshawar with experience in commercial and residential security. He is disciplined, vigilant, and committed to maintaining a safe environment at all times.",
    requirements: [
      "Available for 8 or 12 hour shifts",
      "Experienced in CCTV monitoring",
      "Trained in first aid and emergency response",
      "Works for housing societies, shops and offices",
      "Background verified and trustworthy"
    ]
  }
];
import { useParams } from "react-router-dom";

function Worker() {
  const { id } = useParams();
  const job = workers.find((c) => c.id == id);
  return (
    <>
      <section className=" bg-gray-50 py-20 flex justify-center">
        <div className="w-full max-w-[80%] shadow-lg bg-white rounded-lg">
          <div className="flex gap-11 border-b flex-col items-center sm:flex-row py-3">
            <div>
              <img src={job.img} alt={job.name} className="rounded w-60 h-40 object-cover" />
            </div>
            <div className="px-3">
              <h1 className="font-extrabold text-4xl pt-3">{job.name}</h1>
              <h2 className="pt-1.5 text-gray-400 text-sm">{job.skill}</h2>
              <h3 className="text-gray-400 text-sm">📍{job.city}</h3>
            </div>
          </div>
          <div className="p-10">
            <h1 className="font-bold text-2xl">About the Role</h1>
            <p>{job.description}</p>
            <h2 className="font-bold text-2xl mt-10 mb-3">Skills & Tags</h2>
            <div className="flex gap-2.5 flex-wrap">
              {job.tags.map((tag, index) => (
                <span key={index} className="border-2 border-gray-600 rounded-lg py-0.5 px-2
                                     text-[12px]">{tag}</span>
              ))}
            </div>
            <h1 className="font-bold text-2xl mt-10 mb-2">Requirement</h1>
            <div>
              <ul>
                {job.requirements.map((r, index) => (
                  <li className="list-disc ml-5" key={index}>{r}</li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <Link
                to={`/hireform/${job.id}`}
                state={{ email: job.email, name: job.name, skill: job.skill }}
                className="py-2 px-10 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300">
                Hire
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Worker