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
              <th>Teachers</th>
              <th>
                Timing
              </th>
              
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.teacher}</td>
                  <td>{item.
                  timing}</td>
                  
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