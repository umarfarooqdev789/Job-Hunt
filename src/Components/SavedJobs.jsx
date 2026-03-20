import { useContext } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../SearchContext";

function SavedJobs() {
  const { saved, toggleSave } = useContext(SearchContext);
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
                onClick={() => toggleSave(worker)}
                className="text-2xl cursor-pointer"
              >
                ♥
              </button>

              <Link  to={`/card/${worker.id}`} className="text-[12px] px-1.5 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                View & Apply →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SavedJobs;