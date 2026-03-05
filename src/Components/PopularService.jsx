function Popular() {
    return (
        <div className="bg-gray-50 ">
            <h1 className="font-bold text-3xl text-center ">Popular Services</h1>
            <div className="flex justify-center gap-10 mt-8 flex-wrap">
                <div className="shadow-sm  bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10">
                    <i className="fa-solid fa-laptop-code text-7xl"></i>
                    <h2 className="text-center">IT & Digital <br />Services</h2>
                </div>
                <div className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10">
                    <i className="fa-solid fa-hammer text-7xl"></i>
                    <h2>Construction</h2>
                </div>
                <div className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10">
                    <i className="fa-solid fa-icons text-7xl"></i>
                    <h2 className="text-center">Social Media  <br />Experts</h2>
                </div>
                <div className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10">
                    <i className="fa-solid fa-bolt text-7xl"></i>
                    <h2 className="text-center">Electrical <br /> Services</h2>
                </div>
                <div className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10">
                    <i className="fa-solid fa-wrench text-7xl"></i>
                    <h2 className="text-center">Plumbing <br />Services</h2>
                </div>
                <div className="shadow-sm bg-white flex flex-col gap-2 items-center justify-center rounded-2xl py-4 px-10">
                    <i className="fa-solid fa-house text-7xl"></i>
                    <h2 className="text-center">Home Repair <br />Services</h2>
                </div>
            </div>
        </div>
    )
}
export default Popular