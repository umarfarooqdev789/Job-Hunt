import { createContext, useState, useEffect } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [input, setInput] = useState("");
    const [saved, setSaved] = useState([]);
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBtn(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleSave = (job) => {
        const isSaved = saved.find((item) => item.id === job.id);
        if (isSaved) {
            setSaved(saved.filter((item) => item.id !== job.id));
        } else {
            setSaved([...saved, job]);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <SearchContext.Provider
            value={{
                input,
                setInput,
                saved,
                toggleSave,
                showBtn,
                scrollToTop,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}