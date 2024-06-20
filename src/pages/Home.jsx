import { useEffect } from "react";
import { useNoteContext } from "../contexts/NoteContext";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
export function Home() {
  const { notes } = useNoteContext();
  console.log(notes);
  useEffect(() => {}, []);
  return (
    <Container>
      <h1>My Notes</h1>
      <Grid container spacing={5}>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} md={6} lg={4}>
            <Card elevation={2}>
              <CardHeader
                action={
                  <IconButton>
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
        ))}
      </Grid>
    </Container>
  );
}
