import { createContext, useContext, useState } from "react";

const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const addNoteHandler = (myNote) => {
    setNotes([...notes, myNote]);
  };
  const deleteNoteHandler = (myNote) => {
    setNotes(notes.filter(({ id }) => id != myNote.id));
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
