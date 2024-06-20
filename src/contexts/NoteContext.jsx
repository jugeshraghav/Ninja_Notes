import { createContext, useContext, useState } from "react";
import { todosList } from "../data/data";

const NoteContext = createContext();

export const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  //setting the todos data from ./data/data.js to localStorage
  const todosArray = todosList;
  const todosListStringified = JSON.stringify(todosArray);
  localStorage.setItem("notes", todosListStringified);

  //handlers
  const addNoteHandler = (myNote) => {
    //get notes string from local storage
    let notesString = localStorage.getItem("notes");
    let parsedNotesArray = JSON.parse(notesString) || [];
    //add the new notes to the existing array
    parsedNotesArray = [...parsedNotesArray, myNote];
    //add the updated notes array to the local storage but stringify it first
    let updatedNotesString = JSON.stringify(parsedNotesArray);
    localStorage.setItem("notes", updatedNotesString);

    //update the notes state
    setNotes([...notes, parsedNotesArray]);
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
