import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function App() {

  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My Material UI App</Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: 20 }}>
        <Typography variant="h4" gutterBottom>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Открыть диалоговое окно
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Использовать Material UI?</DialogTitle>
          <DialogContent>
            <DialogContentText>Это пример диалогового окна в Material UI. Просто приймите тот факт, что там был текст, который я плохо вижу. И проверьте пожалуйста 6 дз!</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Отмена
            </Button>
            <Button onClick={handleClose} color="primary">
              Согласен
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}

export default App;
