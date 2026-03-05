function TopWorkers(params) {
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
        }
    ];
    return (
        <div className="bg-gray-50 pt-15 pb-2.5">
            <h1 className="font-bold text-3xl text-center">Top Rated Workers</h1>
            <div className="flex gap-8 justify-center mt-10 flex-wrap p-5">
                {workers.map((worker)=>(
                <div className="min-h-64 rounded-xl shadow-md bg-white overflow-hidden w-54" key={worker.id}>
                    <img src={worker.img} alt={worker.name} className="rounded w-full h-40 object-cover" />
                    <ul className="py-3.5 px-5 space-y-1.5">
                        <li className="font-bold">{worker.name}</li>
                        <li className="font-medium text-[14px]">{worker.skill}</li>
                        <li className="text-gray-500 font-light">{worker.city}</li>
                        <li>⭐{worker.rating}</li>
                        <li className="text-gray-600 text-[12px]">{worker.experience}</li>
                    </ul>
                </div>
                ))
}
            </div>
        </div>
    )
}
export default TopWorkers