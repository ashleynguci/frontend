import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
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
        Cell: value => (
          <button onClick={() => this.deleteCar(value)}>Delete</button>
        )
      }
    ];
    return (
      <div>
        <h2>List of cats</h2>
        <ReactTable
          data={this.state.cars}
          columns={columns}
          filterable={true}
        />
      </div>
    );
  }
}
