import { useMemo, useState, useEffect, useContext } from "react";
import { SearchContext } from "../SearchContext";
import { Link } from "react-router-dom"
const workers = [
    {
        id: 1,
        name: "Ahmad Ali",
        skill: "Electrician",
        city: "Lahore",
        rating: 4.9,
        experience: "5 Years Experience",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCE0ikShlBGif1RagKPuWVIJqFMFjls_pYMA&s"
    },
    {
        id: 2,
        name: "Sara Khan",
        skill: "Graphic Designer",
        city: "Karachi",
        rating: 4.8,
        experience: "Logo & Branding Expert",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ShOJm1-4cQ1bmsFePPNuHsayVe15_Ko67w&s"
    },
    {
        id: 3,
        name: "Usman Tariq",
        skill: "Plumber",
        city: "Islamabad",
        rating: 4.7,
        experience: "Fast & Reliable",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8ANeHOTri8czlbME7Jab27gYERgA4cZ9PQ&s"
    },
    {
        id: 4,
        name: "Iqra Javed",
        skill: "Digital Marketer",
        city: "Multan",
        rating: 4.8,
        experience: "Facebook & Instagram Ads",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjUS0Du3g1dTwYVjRTwA6QfSgV_v1ghO9xVA&s"
    },
    {
        id: 5,
        name: "Ali Raza",
        skill: "Carpenter",
        city: "Faisalabad",
        rating: 4.6,
        experience: "Custom Furniture",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsGz9-zc4aJIqb7P20R7sjqamKs-_8BvC_A&s"
    },
    {
        id: 6,
        name: "Fatima Noor",
        skill: "Web Developer",
        city: "Lahore",
        rating: 4.9,
        experience: "React & Node.js Expert",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIT5NzHh088w8FmO6rTeGYi3spnEXTH7YEUc2UaaB7fQwOH6eXnnOCZ4&s"
    },
    {
        id: 7,
        name: "Bilal Sheikh",
        skill: "Painter",
        city: "Rawalpindi",
        rating: 4.5,
        experience: "Interior & Exterior",
        img: "https://thumbs.dreamstime.com/b/painter-worker-roller-painting-wall-surface-color-home-impovement-refurbishment-painter-worker-roller-159778171.jpg"
    },
    {
        id: 8,
        name: "Zainab Malik",
        skill: "Content Writer",
        city: "Karachi",
        rating: 4.7,
        experience: "SEO & Blog Writing",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXdwXAVtkMSRJ6SSTZZezOONzqHQpRJWsDQ&s"
    },
    {
        id: 9,
        name: "Hassan Mehmood",
        skill: "AC Technician",
        city: "Lahore",
        rating: 4.8,
        experience: "Split & Window AC",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BarV9BsCo-vL9ppJsNL2TzkSs04mDSJzZA&s"
    },
    {
        id: 10,
        name: "Ayesha Siddiqui",
        skill: "Fashion Designer",
        city: "Karachi",
        rating: 4.9,
        experience: "Bridal & Party Wear",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOb6KrFT_DG3z_2TXrhudCvZNEMK3UAv1jw&s"
    },
    {
        id: 11,
        name: "Kamran Butt",
        skill: "Welder",
        city: "Sialkot",
        rating: 4.6,
        experience: "Metal & Steel Work",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MCHn_jd0Lcn1L49kjqGNIwgBPPUNZlJAfA&s"
    },
    {
        id: 12,
        name: "Sana Iftikhar",
        skill: "Tutor",
        city: "Islamabad",
        rating: 4.9,
        experience: "Maths & Science Expert",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_u-rzvGka2BVUP_2N3O0YMbboPeTkZuIV4A&s"
    },
    {
        id: 13,
        name: "Junaid Aslam",
        skill: "Mechanic",
        city: "Gujranwala",
        rating: 4.7,
        experience: "Car & Bike Repair",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKX71-VbObnlPsuL3TTqQHelW-PRgPGYo7ZQ&s"
    },
    {
        id: 14,
        name: "Nadia Hussain",
        skill: "Cook / Chef",
        city: "Lahore",
        rating: 4.8,
        experience: "Desi & Chinese Food",
        img: "https://randomuser.me/api/portraits/women/80.jpg"
    },
    {
        id: 15,
        name: "Shahzad Rana",
        skill: "Security Guard",
        city: "Peshawar",
        rating: 4.5,
        experience: "Commercial & Residential",
        img: "https://randomuser.me/api/portraits/men/91.jpg"
    }
];

function TopRatedWorkers() {
    const { input} = useContext(SearchContext);
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
                    <h1 className="font-bold text-5xl">Browse Workers</h1>
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
            <div className="bg-gray-50">
                <div className="flex gap-8 justify-center flex-wrap p-5">
                    {filterProducts.map((worker) => {
                        return (
                            <div className="relative min-h-64 rounded-xl shadow-md bg-white overflow-hidden w-54" key={worker.id}>
                                <img src={worker.img} alt={worker.name} className="rounded w-full h-40 object-cover" />
                                <ul className="py-3.5 px-5 space-y-1.5">
                                    <li className="font-bold">{worker.name}</li>
                                    <li className="font-medium text-[14px]">{worker.skill}</li>
                                    <li className="text-gray-500 font-light">{worker.city}</li>
                                    <li>⭐{worker.rating}</li>
                                    <li className="text-gray-600 text-[12px]">{worker.experience}</li>
                                </ul>
                                <div className="flex px-2 justify-around py-5">
                                    <Link to={`/card/${worker.id}`} className="text-[12px] p-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                        Hire and View
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
export default TopRatedWorkers;