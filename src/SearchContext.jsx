import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [input, setInput] = useState("");

  const [saved, setSaved] = useState([]);

  const toggleSave = (job) => {
    const isSaved = saved.find((item) => item.id === job.id);

    if (isSaved) {
      setSaved(saved.filter((item) => item.id !== job.id));
    } else {
      setSaved([...saved, job]);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        input,
        setInput,
        saved,
        toggleSave,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}