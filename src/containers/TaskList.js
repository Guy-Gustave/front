/* eslint-disable */
import React, { Component } from 'react'
import axios from 'axios'
import '../App.css';
import update from 'immutability-helper'

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      inputValue: ''
    },
      this.handleChange = this.handleChange.bind(this)
    this.createTask = this.createTask.bind(this)
  }


  getTasks() {
    axios.get(`https://trackap.herokuapp.com/projects/${this.props.projectId}/tasks`)
      .then(response => {
        this.setState({ tasks: response.data })
      })
      .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getTasks()
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }
  // https://trackap.herokuapp.com

  createTask(e) {
    if (e.key === 'Enter') {
      axios.post(`https://trackap.herokuapp.com/projects/${this.props.projectId}/tasks`, {
        "title": this.state.inputValue,
        "done":false,
        "project_id": this.props.projectId
    })
        .then(response => {
          const tasks = update(this.state.tasks, {
            $splice: [[0, 0, response.data]]
          })
          this.setState({
            tasks: tasks
          })
        })
        .catch(error => console.log(error))
    }
  }

  render() {
    return (
      <div className="conta">
        <div className="listWrapper">
          <input className="taskInput" type="text"
            placeholder="Add a task" maxLength="50"
            onKeyPress={this.createTask}
            value={this.state.inputValue} onChange={this.handleChange} />
          <ul className="taskList">
            {this.state.tasks.map((task) => {
              return (
                <li className="task" task={task} key={task.id}>
                  <input className="taskCheckbox" type="checkbox" />
                  <label className="taskLabel">{task.title}</label>
                  <span className="deleteTaskBtn"></span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default TaskList