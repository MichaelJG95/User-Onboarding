import React from 'react'

const changeHandler = event => {
    
}

const Form = ({values}) => {
    return (
        <div>
            <form>
                <label>Name: 
                    <input
                        name='name' 
                        type='text'
                        value={values.name}
                        onChange={changeHandler}
                    />
                </label>

                <label>Email: 
                    <input
                        name='email'
                        type='email'
                        value={values.email}
                        onChange={changeHandler}
                    />
                </label>

                <label>Password: 
                    <input 
                        name='password'
                        type='password'
                        value={values.password}
                        onChange={changeHandler}
                    />
                </label>

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