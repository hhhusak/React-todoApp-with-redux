/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import Record from "../Record/Record";
import styles from './RecordsList.module.css';

const RecordsList = (props) => {
    return (
        <ul className={styles.recordsContainer}>
            {props.items.map((item) => (
                <Record text={item.text} isCompleted={item.isCompleted} id={item.id} />
            ))}
        </ul>
    )
}

export default RecordsList;