import { createContext, useState, useEffect } from "react";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [input, setInput] = useState("");
  const [saved, setSaved] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [user, setUser] = useState(null);

  // Scroll button
  useEffect(() => {
    const handleScroll = () => setShowBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ User login/logout detect karo aur uski saved jobs load karo
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // User logged in hai — Firestore se uski jobs lao
        const docRef = doc(db, "savedJobs", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSaved(docSnap.data().jobs || []);
        } else {
          setSaved([]); // Naya user — koi saved job nahi
        }
      } else {
        // User logged out — list clear karo
        setSaved([]);
      }
    });

    return () => unsubscribe();
  }, []);

  // ✅ Jab bhi saved list badle, Firestore mein save karo
  const saveToFirestore = async (updatedList, currentUser) => {
    if (!currentUser) return; // Login nahi hai toh save mat karo
    const docRef = doc(db, "savedJobs", currentUser.uid);
    await setDoc(docRef, { jobs: updatedList });
  };

  // ✅ Save / Unsave toggle
  const toggleSave = (job) => {
    if (!user) {
      alert("Please login to save jobs!");
      return;
    }

    const isSaved = saved.find((item) => item.id === job.id);
    const updatedList = isSaved
      ? saved.filter((item) => item.id !== job.id)
      : [...saved, job];

    setSaved(updatedList);
    saveToFirestore(updatedList, user);
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
        user, // ✅ User bhi provide kar rahe hain
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}