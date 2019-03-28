import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      model: "",
      brand: "",
      year: "",
      price: "",
      fuel: "",
      color: ""
    };
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  addCar = () => {
    const newCar = {
      model: this.state.model,
      color: this.state.color,
      brand: this.state.brand,
      year: this.state.year,
      fuel: this.state.fuel,
      price: this.state.price
    };
    this.props.saveCar(newCar);
    this.handleClose();
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="brand"
              label="Brand"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="model"
              label="Model"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="year"
              label="Year"
              type="number"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="price"
              label="Price"
              type="number"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="color"
              label="Color"
              fullWidth
            />
            <TextField
              onChange={this.handleChange}
              margin="dense"
              id="fuel"
              label="Fuel"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.addCar} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
        <Button onClick={this.handleClickOpen} color="primary">
          ADD CAR{" "}
        </Button>
      </div>
    );
  }
}
