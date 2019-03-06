import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class TodoTable extends Component {
  render() {
    const columns = [
      {
        Header: "Date",
        accessor: "date" // String-based value accessors!
      },
      {
        Header: "Description",
        accessor: "description"
      },
      {
        Header: "",
        Cell: row => {
          return (
            <button
              id={row.index}
              onClick={event => this.props.deleteFunction(event)}
            >
              Delete
            </button>
          );
        }
      }
    ];

    return (
      <div className="App">
        <ReactTable
          data={this.props.items}
          columns={columns}
          sortable={true}
          defaultPageSize={10}
        />
      </div>
    );
  }
}

export default TodoTable;
