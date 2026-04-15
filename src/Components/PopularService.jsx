import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { SearchContext } from "../SearchContext"

function Popular() {
    const { setInput } = useContext(SearchContext);
    const navigate = useNavigate();

    const handleClick = (category) => {
        setInput(category);
        navigate("/jobs");
    }

    return (
        <div className="bg-gray-50 py-6">
            <h1 className="font-bold text-3xl text-center">Popular Services</h1>
            <div className="flex justify-center gap-10 mt-8 flex-wrap px-6">

                <button onClick={() => handleClick("Developer")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-laptop-code text-5xl text-blue-500"></i>
                    <h2 className="text-center font-medium">IT & Digital<br />Services</h2>
                </button>

                <button onClick={() => handleClick("Designer")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-pen-nib text-5xl text-pink-500"></i>
                    <h2 className="text-center font-medium">Design<br />Services</h2>
                </button>

                <button onClick={() => handleClick("Marketer")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-icons text-5xl text-yellow-500"></i>
                    <h2 className="text-center font-medium">Social Media<br />Experts</h2>
                </button>

                <button onClick={() => handleClick("Analyst")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-chart-line text-5xl text-orange-500"></i>
                    <h2 className="text-center font-medium">Data &<br />Analytics</h2>
                </button>

                <button onClick={() => handleClick("Writer")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-pen text-5xl text-gray-500"></i>
                    <h2 className="text-center font-medium">Content<br />Writing</h2>
                </button>

                <button onClick={() => handleClick("DevOps")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-server text-5xl text-red-500"></i>
                    <h2 className="text-center font-medium">DevOps<br />Services</h2>
                </button>

            </div>
        </div>
    )
}
export default Popular