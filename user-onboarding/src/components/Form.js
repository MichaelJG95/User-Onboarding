import React from 'react'

const Form = ({ values, change, errors }) => {

    const changeHandler = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change( name, valueToUse)
    }

    return (
        <div>
            <form>
                <div className='errors'>{errors.name}</div>
                <label>Name: 
                    <input
                        name='name' 
                        type='text'
                        value={values.name}
                        onChange={changeHandler}
                    />
                </label>
                <div className='errors'>{errors.email}</div>
                <label>Email: 
                    <input
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={changeHandler}
                    />
                </label>
                <div className='errors'>{errors.password}</div>
                <label>Password: 
                    <input 
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={changeHandler}
                    />
                </label>
                <div className='errors'>{errors.terms}</div>
                <label>Terms of Service
                    <input 
                        name='terms'
                        type='checkbox'
                        checked={values.terms}
                        onChange={changeHandler}
                    />
                </label>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default Form