import React, {useState} from 'react';

const Hand = props => {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
    if (props.onChange) props.onChange(inputValue);
  }

  return (
    <div className = "Hand" id = "HandSpace">
      <button className="DrawButton">Draw a Card</button>
    </div>
  )
}

export default Hand;