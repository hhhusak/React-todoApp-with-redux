import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import styles from './Form.module.css'
import { recordsActions } from "../../store/recordsSlice";
import { filterActions } from "../../store/filterSlice";

const MAX_LENGTH = 60;
const WARNING = `Your record should be less than ${MAX_LENGTH} characters`;

const Form = () => {
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');
    const filterValue = useSelector(state => state.filter.items);
    const [isNotAllowedToSubmit, setIsNotAllowedToSubmit] = useState(false);

    const handleChange = (event) => {
        setInputValue(event.target.value);

        if (event.target.value.length >= MAX_LENGTH) {
            setIsNotAllowedToSubmit(true);
        } else {
            setIsNotAllowedToSubmit(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(
            recordsActions.addRecord({
                id: Math.random(),
                text: inputValue,
                isCompleted: false
            })
        )
    };

    const handleToggle = () => {
        dispatch(
            filterActions.toggleFilter()
        );
    }

    return (
        <div className={styles['form-container']}>
            <form onSubmit={handleSubmit}>
                <div className={styles['form-group']}>
                    <label htmlFor="inputField" className={styles.label}>{isNotAllowedToSubmit ? WARNING : 'Enter your record here:'}</label>
                    <input
                        type="text"
                        id="inputField"
                        value={inputValue}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles['button-container']}>
                    <button type="submit" className={styles.button} disabled={isNotAllowedToSubmit}>Add record</button>
                    <button type="button" title="Filter" onClick={handleToggle} className={styles.button}>{filterValue[0]}</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
