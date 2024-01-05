import './index.css'

const TaskItem = props => {
  const {eachTask} = props
  const {task, tag} = eachTask
  return (
    <li className="list-element">
      <p className="text">{task}</p>
      <p className="task-button">{tag}</p>
    </li>
  )
}

export default TaskItem
