import React, { Component } from 'react';

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Subject</th>
              <th>Topic</th>
            </tr>
            {items.map((item )=> {
              return (
                <tr>
                  <td>{item.subject}</td>
                  <td>{item.topic}</td>
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