import { useState } from "react"
import Allworkers from "./Allworkers"
function JobsListing() {
    const [filter, setFilter] = useState("")
    return (
        <>
           
            <Allworkers filter={filter}/>
        </>
    )
}

export default JobsListing