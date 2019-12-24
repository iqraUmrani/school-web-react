import React, { Component } from 'react';
import './table.css'

export default class Table extends React.Component {
    render() {
      const obj = this.props.obj;
      return (
        <div id="Table">
          <table >
            <tbody>
              {/* <tr>
                <th>Students</th>
                <th>Subject</th>
                <th>Total marks</th>
                <th>Marks obtain</th>
                <th>Result</th>
              </tr> */}
              {obj.map(obj => {
                return (
                    <tr>
                        <tr>
                            <th>date</th>
                            <th>{obj.date}</th>
                        </tr>
                        <tr>
                            <th>class</th>
                            <th>{obj.class}</th>
                        </tr>
                  <tr>
                      <td>english</td>
                    <td>{obj.english}</td>
                    </tr>
                    <tr>
                        <td>urdu</td>
                    <td>{obj.urdu}</td>
                    </tr>
                    <tr>
                        <td>math</td>
                    <td>{obj.maths}</td>
                    </tr>
                    <tr>
                        <td>islamiat </td>
                    <td>{obj.islamiat}</td>
                    </tr>
                    <tr>
                        <td>science</td>
                    <td>{obj.science}</td>
                  </tr>
                  <tr>
                      <td>computer</td>
                      <td>{obj.computer}</td>
                  </tr>
                  <tr>
                      <td>pakistan_studies</td>
                      <td>{obj.pakistan_st}</td>
                  </tr>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
  }
  