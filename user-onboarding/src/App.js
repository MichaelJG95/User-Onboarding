import React, { useState, useEffect } from 'react'
import axios from 'axios'
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
  const [users, setUsers] = useState([])

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res)
        setUsers([res.data, ...users])
        setFormValues(initialFormValues)
      })
      .catch(err => console.error(err))

  }
  
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

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">
      <h1>New User Onboarding</h1>
      <Form 
        values={formValues}
        change={inputChange}
        errors={formErrors}
        submit={formSubmit}
        />

        {/* {users.map((user,idx) => {
          return(
          <h2 key={idx}>{user.name}</h2>
          )
        })} */}
       
        {JSON.stringify(users) }
       

    </div>
  );
}

export default App;
