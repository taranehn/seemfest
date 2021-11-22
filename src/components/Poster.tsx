import * as React from "react";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { CardMedia } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
  },
  content: {
    width: "100%",
    padding: theme.spacing(0.25),
  },
}));

interface PosterProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  image: string;
}

export default function Poster({ isOpen, setOpen, image }: PosterProps) {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog fullWidth={true} open={isOpen} onClose={handleClose}>
      <DialogContent className={classes.content}>
        <Box
          sx={{
            display: "flex",
            m: "auto",
            width: "fit-content",
          }}
        >
          <CardMedia component="img" className={classes.image} image={image} />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
