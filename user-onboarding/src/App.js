import React, { useState } from 'react'
import Form from './components/Form'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)

  return (
    <div className="App">
      <h1>User</h1>
      <Form 
        values={formValues}
        />
    </div>
  );
}

export default App;
