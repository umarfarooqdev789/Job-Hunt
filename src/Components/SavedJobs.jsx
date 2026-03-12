function SavedJobs() {
    return (
        <>
        <section className="bg-gray-50 ">
            <div className="flex flex-col items-center gap-6 py-31 px-8">
                <div className="text-7xl mb-8">🔖</div>
                <h1 className="text-2xl font-bold">No Saved Jobs Yet</h1>
                <p  className="text-[15px] text-gray-500">Bookmark jobs you're interested in and they'll appear here.</p>
                <button className=" px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Browse Jobs
                </button>
            </div>
        </section>
        </>

    )
}
export default SavedJobs