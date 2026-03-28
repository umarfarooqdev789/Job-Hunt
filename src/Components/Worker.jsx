import { useState } from "react"



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
  }
];
import { useParams } from "react-router-dom";

function Worker() {
  const { id } = useParams();
  const job = workers.find((c) => c.id ==id);
    return (
        <>
            <section className=" bg-gray-50 py-20 flex justify-center">
                <div  className="w-full max-w-[80%] shadow-lg bg-white rounded-lg">
                    <div className="flex gap-11 border-b flex-col items-center sm:flex-row py-3">
                        <div>
                        <img src={job.img} alt={job.name} className="rounded w-60 h-40 object-cover" />
                        </div>
                        <div className="px-3">
                            <h1 className="font-bold text-4xl pt-3">{job.name}</h1>
                            <h2  className="pt-1.5 text-gray-500">{job.skill}</h2>
                            <h3 className=" text-gray-500 ">📍{job.city}</h3>
                        </div>
                    </div>
                        <div className="p-10">
                            <h1  className="font-bold text-2xl">About the Role</h1>
                            <p>{job.description}</p>
                            <h2 className="font-bold text-2xl mt-10 mb-3">Skills & Tags</h2>
                            <div className="flex gap-2.5 flex-wrap">
                                {job.tags.map((tag,index)=>(
                                    <span key={index} className="border-2 border-gray-600 rounded-lg py-0.5 px-2
                                     text-[12px]">{tag}</span>
                                ))}
                            </div>
                            <h1  className="font-bold text-2xl mt-10 mb-2">Requirement</h1>
                            <div>
                                <ul>
                                    {job.requirements.map((r,index)=>(
                                        <li className="list-disc ml-5" key={index}>{r}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>   
                </div>
            </section>
        </>
    )
}
export default Worker