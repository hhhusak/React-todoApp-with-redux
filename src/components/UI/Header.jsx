import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Header.module.css'

const Header = () => {
    const records = useSelector(state => state.records.items);
    const [amountOfCompleted, setAmountOfCompleted] = useState();

    useEffect(() => {
        setAmountOfCompleted(records.filter(item => item.isCompleted === true).length);
    }, [records])

    return (
        <div className={styles.header}>
            <h1>{`Completed: ${amountOfCompleted}`}</h1>
            <h1>{`Current: ${records.length - amountOfCompleted}`}</h1>
        </div >
    )
}

export default Header;