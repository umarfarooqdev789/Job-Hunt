import { useState } from "react"

const job = {
    id: 7,
    name: "Ayesha Noor",
    skill: "Product Designer",
    city: "Karachi",
    rating: 4.8,
    experience: "Figma & UX Research",
    tags: ["Figma", "UX Research", "Prototyping"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjjo3RRvXL1GPPchBXGdQMgs2tRL6AHi-AQ&s",
    description: "Ayesha Noor is a talented product designer who specializes in creating user-centered digital experiences. She combines UX research with stunning visual design to deliver products that users love, from wireframes to high-fidelity prototypes.",
    requirements: [
        "Expert in Figma and Adobe XD",
        "Conducts user research and usability testing",
        "Creates complete design systems",
        "Experienced with mobile and web app design",
        "Collaborates closely with development teams"
    ]
}
function JobDetails() {
    const [saved,setSaved]=useState(false)
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
                         <div className="border-t p-10 flex gap-11 flex-col sm:flex-row">
                             <button className=" text-[12px] px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">View & Apply →</button>
                            <button onClick={() => {
                                setSaved(!saved)
                            }} className="text-[20px]">
                                {saved ? "♥Saved" : "♡ Save Job"}
                            </button>
                        </div>
                </div>
            </section>
        </>
    )


}
export default JobDetails