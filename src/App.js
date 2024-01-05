import {Component} from 'react'
import {v4} from 'uuid'
import TagItem from './tagItem'
import TaskItem from './taskItem'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    activeOption: tagsList[0].optionId,
    tasksList: [],
    filteredList: [],
    finalList: [],
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({activeOption: event.target.value})
  }

  onChangeActiveOption = id => {
    const {tasksList} = this.state
    const miniList = tasksList.filter(each => each.tag === id)
    this.setState({tasksList: miniList})
  }

  addTask = event => {
    event.preventDefault()
    const {searchInput, activeOption} = this.state
    const task = {
      id: v4(),
      task: searchInput,
      tag: activeOption,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, task],
      searchInput: '',
      activeOption: tagsList[0].optionId,
    }))
  }

  render() {
    const {searchInput, activeOption, tasksList} = this.state
    const length = tasksList.length > 0
    return (
      <div className="bg-container">
        <div className="cards-container">
          <form className="card1" onSubmit={this.addTask}>
            <h1 className="title">Create a task!</h1>
            <label htmlFor="task" className="label">
              Task
            </label>
            <input
              type="text"
              id="task"
              placeholder="Enter the task here"
              className="input"
              onChange={this.onChangeInput}
              value={searchInput}
            />
            <label className="label" htmlFor="tag">
              Tags
            </label>
            <select
              id="tag"
              className="select"
              value={activeOption}
              onChange={this.onChangeOption}
            >
              {tagsList.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add Task
            </button>
          </form>
          <div className="card2">
            <h1 className="heading">Tags</h1>
            <ul className="tags-list">
              {tagsList.map(tag => (
                <TagItem
                  key={tag.optionId}
                  tag={tag}
                  onChangeActiveOption={this.onChangeActiveOption}
                  isActive={tag.optionId === activeOption}
                />
              ))}
            </ul>
            <h1 className="sub-heading">Tasks</h1>
            <ul className="tasks-list">
              {length ? (
                tasksList.map(eachTask => (
                  <TaskItem key={eachTask.id} eachTask={eachTask} />
                ))
              ) : (
                <p className="no-tasks-text">No Tasks Added Yet</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
