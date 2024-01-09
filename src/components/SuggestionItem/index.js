import './index.css'

const SuggestionItem = props => {
  const {suggestion, updateSearchInput} = props

  const onArrowClick = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-caption">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="arrow-image"
        onClick={onArrowClick}
      />
    </li>
  )
}

export default SuggestionItem
