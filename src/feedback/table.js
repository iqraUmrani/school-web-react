import React, { Component } from 'react';
import './table.css';
class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table border = '0'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>
                Feedback
              </th>
              
            </tr>
            {items.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.feedback}</td>
                  
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