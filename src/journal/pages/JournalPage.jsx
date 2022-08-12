import { Typography } from "@mui/material";
import { JornalLayout } from "../layout/JornalLayout";
import { NothingSelectedView } from "../view";

export const JournalPage = () => {
  return (
    <JornalLayout>
      {/*<Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsam dolorum esse incidunt cum cumque architecto pariatur consectetur nemo natus voluptatem voluptatibus magni, aperiam necessitatibus laborum odit reprehenderit ad fugit?</Typography>*/}

      <NothingSelectedView />
    </JornalLayout>
  );
};
