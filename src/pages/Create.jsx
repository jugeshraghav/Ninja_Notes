import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { KeyboardArrowRight } from "@mui/icons-material";
import {
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNoteContext } from "../contexts/NoteContext";
import { v4 as uuidv4 } from "uuid";

export function Create() {
  // const note = useRef("");
  const [details, setDetails] = useState("");
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  //get context values
  const { notes, addNoteHandler } = useNoteContext();
  console.log(notes);
  //custom css classes
  const classes = {
    margin: {
      marginTop: "20px",
    },
  };

  const submitHandler = (e) => {
    //prevent default behaviour of form- of refreshing the page after evry time we click the submit button
    e.preventDefault();

    //set the errors to false initially
    setTitleError(false);
    setDetailsError(false);

    //check if there must be errors or not
    if (title == "") setTitleError(true);
    if (details == "") setDetailsError(true);

    if (title && details && category) {
      addNoteHandler({
        id: uuidv4(),
        title: title,
        text: details,
        category: category,
      });
      setTitle("");
      setDetails("");
      setCategory("todos");
    }

    // note.current = "Write Something.";
  };
  return (
    <>
      <Container>
        <Typography variant="h4" component="h6" sx={classes.margin}>
          Create new Note
        </Typography>
        <Typography variant="subtitle1">
          Create your own customizable notes.
        </Typography>
        <form
          noValidate
          autoComplete="off"
          sx={classes.margin}
          onSubmit={submitHandler}
        >
          <TextField
            variant="outlined"
            label="title"
            value={title}
            required
            fullWidth
            error={titleError}
            onChange={(e) => setTitle(e.target.value)}
            sx={classes.margin}
          ></TextField>
          <TextField
            variant="outlined"
            value={details}
            label="Details."
            fullWidth
            required
            multiline
            rows="4"
            onChange={(e) => setDetails(e.target.value)}
            error={detailsError}
            sx={classes.margin}
          ></TextField>

          <FormControl sx={classes.margin}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                control={<Radio />}
                value="work"
                label="Work"
              ></FormControlLabel>
              <FormControlLabel
                control={<Radio />}
                value="home"
                label="Home"
              ></FormControlLabel>
              <FormControlLabel
                control={<Radio />}
                value="todos"
                label="Todos"
              ></FormControlLabel>
              <FormControlLabel
                control={<Radio />}
                value="reminder"
                label="Reminder"
              ></FormControlLabel>
            </RadioGroup>
          </FormControl>
          <br />
          <Button
            type="submit"
            variant="contained"
            endIcon={<KeyboardArrowRight />}
            sx={classes.margin}
          >
            Create
          </Button>
        </form>
      </Container>
    </>
  );
}
