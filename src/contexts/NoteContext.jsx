import { createContext, useContext, useEffect, useState } from "react";
import { todosList } from "../data/data";

const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]); // Initialize with empty array

  // Load existing notes from localStorage on component mount
  useEffect(() => {
    const notesString = localStorage.getItem("notes");
    if (notesString) {
      setNotes(JSON.parse(notesString));
    }
  }, []);

  // Add note handler (unchanged from previous solution)
  const addNoteHandler = (myNote) => {
    setNotes([...notes, myNote]);
    const updatedNotesString = JSON.stringify([...notes, myNote]);
    localStorage.setItem("notes", updatedNotesString);
  };

  // Delete note handler (updated with localStorage deletion)
  const deleteNoteHandler = (myNote) => {
    const filteredNotes = notes.filter(({ id }) => id !== myNote.id);
    setNotes(filteredNotes); // Update state first

    const updatedNotesString = JSON.stringify(filteredNotes);
    localStorage.setItem("notes", updatedNotesString); // Then update localStorage
  };
  return (
    <NoteContext.Provider value={{ notes, addNoteHandler, deleteNoteHandler }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  const foundNoteContext = useContext(NoteContext);
  if (!foundNoteContext) throw new Error("Context not found");
  return foundNoteContext;
};
