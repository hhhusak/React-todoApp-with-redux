/* eslint-disable react/prop-types */

import React from "react";
import { useDispatch } from 'react-redux';
import { recordsActions } from "../../store/recordsSlice";

import styles from './Record.module.css';

const Record = (props) => {
    const dispatch = useDispatch();

    const handleCompletion = () => {
        dispatch(recordsActions.toggleCompletion(props.id));
    }

    return (
        <div className={styles.recordItem} onClick={handleCompletion}>
            <li key={props.id}>
                {props.text}
                <input className={styles.checkbox} type="checkbox" name="checkbox" checked={props.isCompleted} readOnly />
            </li>
        </div>
    )
}

export default Record;