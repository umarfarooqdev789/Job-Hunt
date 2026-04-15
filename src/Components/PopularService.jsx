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
        <div className="bg-gray-50">
            <h1 className="font-bold text-3xl text-center">Popular Services</h1>
            <div className="flex justify-center gap-10 mt-8 flex-wrap">

                <button onClick={() => handleClick("Developer")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-laptop-code text-7xl"></i>
                    <h2 className="text-center">IT & Digital <br />Services</h2>
                </button>

                <button onClick={() => handleClick("Construction")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-hammer text-7xl"></i>
                    <h2>Construction</h2>
                </button>

                <button onClick={() => handleClick("Social Media")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-icons text-7xl"></i>
                    <h2 className="text-center">Social Media <br />Experts</h2>
                </button>

                <button onClick={() => handleClick("Electrician")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-bolt text-7xl"></i>
                    <h2 className="text-center">Electrical <br />Services</h2>
                </button>

                <button onClick={() => handleClick("Plumber")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-wrench text-7xl"></i>
                    <h2 className="text-center">Plumbing <br />Services</h2>
                </button>

                <button onClick={() => handleClick("Home Repair")}
                    className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10 cursor-pointer hover:shadow-md transition-all duration-300">
                    <i className="fa-solid fa-house text-7xl"></i>
                    <h2 className="text-center">Home Repair <br />Services</h2>
                </button>

            </div>
        </div>
    )
}
export default Popular