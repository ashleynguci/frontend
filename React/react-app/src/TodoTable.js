import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./App.css";

const TodoTable = props => {
  const items = props.items.map((item, index) => (
    <tr key={index}>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>
        <button onClick={() => props.delete(index)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>
          {items}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
