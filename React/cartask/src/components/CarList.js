import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Button from "@material-ui/core/Button";
import AddCar from "./AddCar";
import Snackbar from "@material-ui/core/Snackbar";

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { cars: [] };
  }
  componentDidMount() {
    // fetch("https://carstockrest.herokuapp.com/cars")
    //   .then(response => response.json())
    //   .then(jsondata => this.setState({ cars: jsondata._embedded.cars }))
    //   .catch(err => console.error(err));
    this.loadCars();
  }

  loadCars = () => {
    fetch("https://carstockrest.herokuapp.com/cars")
      .then(response => response.json())
      .then(jsondata => this.setState({ cars: jsondata._embedded.cars }))
      .catch(err => console.error(err));
  };
  deleteCar = carLink => {
    fetch(carLink.original._links.self.href, { method: "DELETE" })
      .then(this.loadCars())

      .catch(err => console.error(err));
    console.log(carLink.original._links.self.href);
  };
  saveCar = car => {
    fetch("https://carstockrest.herokuapp.com/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(car)
    })
      .then(res => this.loadCars())
      .then(res => this.setState({ open: true }))
      .catch(err => console.error(err));
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const columns = [
      { Header: "Brans", accessor: "brand" },
      { Header: "Models", accessor: "model" },
      { Header: "Years", accessor: "year" },
      { Header: "Price", accessor: "price" },
      { Header: "Color", accessor: "color" },
      { Header: "Fuel", accessor: "fuel" },
      {
        Header: "",
        accessor: "_links.self.href",
        filterable: "false",
        sortable: "false",
        width: 100,
        Cell: value => (
          <Button color="secondary" onClick={() => this.deleteCar(value)}>
            Delete
          </Button>
        )
      }
    ];
    return (
      <div>
        <AddCar saveCar={this.saveCar} />
        <ReactTable
          data={this.state.cars}
          columns={columns}
          filterable={true}
        />
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={3000}
          onClose={this.handleClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message="Car added successfully"
        />
      </div>
    );
  }
}
