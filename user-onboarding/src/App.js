import React, { useState } from 'react'
import Form from './components/Form'
import formSchema from './validation/formSchema'
import * as yup from 'yup'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  terms: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value})
  }

  return (
    <div className="App">
      <h1>User</h1>
      <Form 
        values={formValues}
        change={inputChange}
        errors={formErrors}
        />
    </div>
  );
}

export default App;
