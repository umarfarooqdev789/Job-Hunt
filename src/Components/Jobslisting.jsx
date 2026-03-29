import { useContext } from "react";
import { SearchContext } from "../SearchContext";
import Allworkers from "./Allworkers";

function JobsListing() {
  const { input,saved, showBtn, scrollToTop} = useContext(SearchContext);
  return <Allworkers input={input} saved={saved} showBtn={showBtn} scrollToTop={scrollToTop}/>;
}

export default JobsListing;