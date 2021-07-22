/* eslint-disable */
import React, { useState }from 'react';

const TaskForm = () => {
  const [state, setState] = useState(
    {
      task: [],
      inputValue:'',
    },
  );

  const handleChange = (e) => {
    this.setState({ inputValue: e.target.value });

  }

  const createTask = (e) => {
    if (e.key === 'Enter') {
      axios.post(`http://localhost:3001/projects/${id}/tasks`, { task: { title: e.target.value } })
        .then(response => {
          const tasks = update(this.state.tasks, {
            $splice: [[0, 0, response.data]]
          })
          this.setState({
            tasks: tasks
          })
          .catch(error => console.log(error))
        })
    }
    return (
      <div className="inputContainer">
        <input className="taskInput" type="text"
          placeholder="Add a task" maxLength="50"
          onKeyPress={this.createTodo}
          value={this.state.inputValue} onChange={handleChange} />
      </div>
    );
  };
}

  export default TaskForm;