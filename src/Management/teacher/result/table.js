import React, { Component } from 'react';
import './table.css';
class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table >
          <tbody>
            <tr>
              <th>date</th>
              <th>Students</th>
              <th>Subject</th>
              <th>Total marks</th>
              <th>Marks obtain</th>
              <th>Result</th>
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.date}</td>
                  
                  <td>{item.student}</td>
                  <td>{item.subject}</td>
                  <td>{item.total_marks}</td>
                  <td>{item.marks_obtain}</td>
                  <td>{item.result}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;