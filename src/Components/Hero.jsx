import { useState } from "react";
import Popular from "./PopularService";
import TopWorkers from "./TopWorkers";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import FeaturedJobs from "./FeaturedJobs";

function Hero() {
    const { input, setInput, showBtn, scrollToTop } = useContext(SearchContext);
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <div className="w-full bg-gray-50 py-8">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        Find the Best <span className="text-blue-600">Worker</span> Around You
                    </h1>
                    <p className="mt-2 text-lg text-gray-400 max-w-2xl mx-auto">
                        Find skilled professionals — from Digital Experts, Creative Designers...
                    </p>
                    <div className="mt-8 flex items-center justify-center">
                        <input
                            type="text"
                            value={input}
                            onChange={handleChange}
                            placeholder="Search for workers or services..."
                           className="w-full max-w-xl px-5 py-3 outline-none border border-gray-300 rounded-tl-xl rounded-bl-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        />
                        <Link to="/jobs" className="px-6 py-3 bg-blue-600 text-white rounded-r-xl hover:bg-blue-700">
                            Search
                        </Link>

                    </div>
                </div>
            </div>
            <Popular />
            <TopWorkers />
            <FeaturedJobs />
            {showBtn && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
                >
                    Back to Top
                </button>
            )}
        </>
    );
};
export default Hero;