import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    const inputValue = event.target.value;
    setEnteredValue(inputValue);

    // Check if the input value length is greater than 0 to determine validity
    setIsValid(inputValue.trim().length > 0);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue(''); // Clear the input field after adding a goal
    setIsValid(true); // Reset the validity
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit" disabled={!isValid}>
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
