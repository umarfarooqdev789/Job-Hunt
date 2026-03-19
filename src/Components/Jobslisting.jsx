import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import Allworkers from "./Allworkers";

function JobsListing() {
  const { input } = useContext(SearchContext);
  const { saved } = useContext(SearchContext);

  return <Allworkers input={input} saved={saved}/>;
}

export default JobsListing;