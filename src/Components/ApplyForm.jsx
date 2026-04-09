function ApplyForm(params) {
    return (
        <>
        <div>
            <h1>Job Apply Form </h1>
        </div>
        <div>
            <label htmlFor="">Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Phone</label>
            <input type="number" />
            <label htmlFor="">City</label>
            <input type="text" />
            <label htmlFor="">Chose your CV</label>
            <input type="file" />
        </div>
        </>
    )
}
export default ApplyForm