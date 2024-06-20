import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Container } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import { useNoteContext } from "../contexts/NoteContext";
import { v4 as uuidv4 } from "uuid";

export function Create() {
  const note = useRef("");
  const { notes, addNoteHandler } = useNoteContext();
  console.log(notes);
  const noteHandler = (e) => {
    note.current = e.target.value;
  };
  const createNoteHandler = () => {
    addNoteHandler({ id: uuidv4(), text: note.current });
    note.current = "Write Something.";
  };
  return (
    <>
      <Container>
        <Typography variant="h4" component="h6">
          Create new Note
        </Typography>
        <Typography variant="subtitle1">
          Create your own customizable notes.
        </Typography>
        <TextField
          variant="outlined"
          defaultValue={note.current}
          label="Write Something."
          required
          multiline
          rows="4"
          onChange={noteHandler}
        ></TextField>
        <br />
        <Button
          variant="contained"
          endIcon={<KeyboardArrowRight />}
          onClick={createNoteHandler}
        >
          Create
        </Button>
      </Container>
    </>
  );
}
