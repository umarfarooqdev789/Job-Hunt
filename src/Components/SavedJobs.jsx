import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../SearchContext";

function SavedJobs() {
  const { saved, toggleSave, showBtn, scrollToTop } = useContext(SearchContext);

  if (saved.length === 0) {
    return (
      <section className="bg-gray-50">
        <div className="flex flex-col items-center gap-6 py-32 px-8">
          <div className="text-7xl mb-8">🔖</div>
          <h1 className="text-2xl font-bold">No Saved Jobs Yet</h1>
          <p className="text-[15px] text-gray-500">
            Bookmark jobs you're interested in and they'll appear here.
          </p>

          <Link
            to="/jobs"
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Browse Jobs
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-gray-50 py-10">
      <h1 className="text-center text-3xl font-bold mb-10">Your Saved Jobs</h1>

      <div className="flex gap-8 justify-center flex-wrap p-5">
        {saved.map((worker) => (
          <div
            className="px-5 py-6 rounded-xl shadow-md bg-white overflow-hidden w-72 flex flex-col gap-3"
            key={worker.id}
          >
            <div className="flex justify-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: worker.color }}
              >
                {worker.logo}
              </div>

            </div>
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
                ♥
              </button>
              <Link
                to={`/jobdetail/${worker.id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
              >
                View & Apply →
              </Link>
            </div>
          </div>
        ))}
      </div>
      {showBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
        >
          Back to Top
        </button>
      )}
    </section>
  );
}

export default SavedJobs;