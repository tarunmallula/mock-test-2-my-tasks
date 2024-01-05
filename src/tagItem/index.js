import './index.css'

const TagItem = props => {
  const {tag, onChangeActiveOption} = props
  const changeOption = () => {
    onChangeActiveOption(tag.optionId)
  }
  return (
    <li className="list-item">
      <button type="button" className="tag-button" onClick={changeOption}>
        {tag.displayText}
      </button>
    </li>
  )
}

export default TagItem
