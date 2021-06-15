import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
/* eslint-disable */

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      inputValue: 'new one',
    };
  }

  componentDidMount() {
    this.getWorks();
  }

  getWorks() {
    axios.get('http://localhost:3000/projects/1/works')
      .then((response) => {
        this.setState({ works: response.data });
      })
      .catch((error) => console.log(error));
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  createWork = (e) => {
    if (e.key === 'Enter') {
      axios.post(`http://localhost:3000/projects/${projectId}/works`, { work: { title: e.target.value } })
        .then(response => {
          const works = update(this.state.works, {
            $splice: [[0, 0, response.data]]
          })
          this.setState({
            works: works,
            inputValue: '',
          })
        })
        .catch(error => console.log(error))
    }
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="taskInput" type="text"
            placeholder="Add new work" maxLength="50"
            onKeyPress={this.createWork}
            value={this.state.inputValue} onChange={this.handleChange}
          />
        </div>
        <div className="listWrapper">
          <ul className="taskList">
            {this.state.works.map((work) => {
              return (
                <li className="task" work={work} key={work.id}>
                  <input className="taskCheckbox" type="checkbox" />
                  <label className="taskLabel">{work.title}</label>
                  <span className="deleteTaskBtn">x</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}
