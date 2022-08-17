import { useMemo } from "react";

import { useSelector } from "react-redux";
import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
  const { active: note } = useSelector((state) => state.journal);
  const { body, uid, title, date, imagesUrls, formState, onInputChange } =
    useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);
  return (
    <>
      <Grid
        container
        className="animate__animated animate__fadeIn animate__faster"
        direction="row"
        justifyContent="space-between"
        sx={{ mb: 1 }}
        alignItems="center"
      >
        <Grid item>
          <Typography fontSize={39} fontWeight="ligth">
            {dateString}
          </Typography>
        </Grid>

        <Grid item>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>

        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un título"
            label="Título"
            name="title"
            onChange={onInputChange}
            value={title}
            sx={{ border: "none", mb: 1 }}
          />

          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Qué sucedió en el día hoy?"
            minRows={5}
            name="body"
            onChange={onInputChange}
            value={body}
            sx={{ border: "none", mb: 1 }}
          />
        </Grid>

        <ImageGallery />
      </Grid>
    </>
  );
};
