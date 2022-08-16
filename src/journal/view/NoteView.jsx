import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components/ImageGallery";

export const NoteView = () => {
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
            28 de agosgto, 2023
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
            sx={{ border: "none", mb: 1 }}
          />

          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Qué sucedió en el día hoy?"
            minRows={5}
            label="Título"
            sx={{ border: "none", mb: 1 }}
          />
        </Grid>

        <ImageGallery />
      </Grid>
    </>
  );
};
