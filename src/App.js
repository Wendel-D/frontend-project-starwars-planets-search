import React from 'react';
import './App.css';
import Table from './components/table';
import Form from './components/form';
import Provider from './context/myProvider';

function App() {
  return (
    <Provider>
      <div>
        <Form />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
