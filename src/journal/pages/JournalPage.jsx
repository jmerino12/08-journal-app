import { useDispatch, useSelector } from "react-redux";
import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { JornalLayout } from "../layout/JornalLayout";
import { NothingSelectedView, NoteView } from "../view";
import { startNewNote } from "../../store/journal";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, active = [] } = useSelector((state) => state.journal);
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <JornalLayout>
      {/*<Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsam dolorum esse incidunt cum cumque architecto pariatur consectetur nemo natus voluptatem voluptatibus magni, aperiam necessitatibus laborum odit reprehenderit ad fugit?</Typography>*/}
      {active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        disabled={isSaving}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize3: 30 }} />
      </IconButton>
    </JornalLayout>
  );
};
