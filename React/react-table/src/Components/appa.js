import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const TodoTable = props => {
  const columns = [
    {
      Header: "Time",
      accessor: "date"
    },
    {
      Header: "What to do",
      accessor: "description"
    },
    {
      Header: "",
      Cell: row => (
        <button onClick={() => props.deleteFunction(row)}>Delete</button>
      )
    }
  ];
  return (
    <div className="App">
      <ReactTable
        data={props.items}
        columns={columns}
        sortable={true}
        defaultPageSize={10}
      />
    </div>
  );
};
export default TodoTable;
