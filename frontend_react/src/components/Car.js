import { useState } from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { buyCar } from "../api/api";

const Car = ({ car }) => {
  const id = car._id;
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState();

  const handelBuyCar = async (id) => {
    try {
      const res = await buyCar(id);
      if (res.ok) {
        window.location.reload();
      }
    } catch (err) {
      setMsg(err);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handelBuyCar(id);
  };

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.unsplash.com/photo-1520050206274-a1ae44613e6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {car.carName}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {car.carModel}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {car.sku}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {car.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" onClick={handleClickOpen}>
          Buy
        </Button>
        {msg ? (
          <Typography gutterBottom variant="h5" component="h2">
            {msg}
          </Typography>
        ) : null}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          animation={false}
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              are you sure you want to buy this car ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              No
            </Button>
            <Button onClick={onSubmit} color="primary" autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </CardActions>
    </Card>
  );
};

export default Car;
