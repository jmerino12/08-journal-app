import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components/ImageGallery";
import { setActiveNote, startSaveNote } from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { body, uid, title, date, imagesUrls, formState, onInputChange } =
    useForm(note);

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0)
      Swal.fire("Nota actualizada", messageSaved, "success");
  }, [messageSaved]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

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
          <Button
            color="primary"
            sx={{ padding: 2 }}
            onClick={onSaveNote}
            disabled={isSaving}
          >
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
