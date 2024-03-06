/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import './App.css';
import RecordsList from "./components/RecordsList/RecordsList";
import Form from "./components/Form/Form";
import Header from "./components/UI/Header";

function App() {
  const records = useSelector(state => state.records.items);
  const currentFilter = useSelector(state => state.filter.items[0]);
  const [filteredRecords, setFilteredRecords] = useState([]);

  useEffect(() => {
    switch (currentFilter) {
      case 'All':
        setFilteredRecords(records);
        break;
      case 'Completed':
        setFilteredRecords(records.filter(item => item.isCompleted === true));
        break;
      case 'Current':
        setFilteredRecords(records.filter(item => item.isCompleted === false));
        break;
    }
  }, [currentFilter, records])

  return (
    <div className="App">
      <Header />
      <Form />
      <RecordsList items={filteredRecords} />
    </div>
  );
}

export default App;
