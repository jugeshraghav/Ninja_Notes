import { useNoteContext } from "../contexts/NoteContext";
import {
  Container,
  Grid,
  IconButton,
  Typography,
  CardContent,
  CardHeader,
  Card,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";

export function Home() {
  const { notes, deleteNoteHandler } = useNoteContext();
  return (
    <Container>
      <h1>My Notes</h1>
      <Grid container spacing={5}>
        {notes.length !== 0 ? (
          notes.map((note) => (
            <Grid item key={note.id} xs={12} md={6} lg={4}>
              <Card elevation={2}>
                <CardHeader
                  action={
                    <IconButton onClick={() => deleteNoteHandler(note)}>
                      <DeleteOutline />
                    </IconButton>
                  }
                  title={note.title}
                  subheader={note.category}
                />
                <CardContent>
                  {" "}
                  <Typography variant="body2" color="text.secondary">
                    {note.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography
            variant="h5"
            color="primary"
            sx={{ width: "20vw", margin: "auto", marginTop: "100px" }}
          >
            Add your notes!
          </Typography>
        )}
      </Grid>
    </Container>
  );
}
