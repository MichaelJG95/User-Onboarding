import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please enter a name'),
    email: yup
        .string()
        .trim()
        .required('email is required'),
    password: yup
        .string()
        .trim()
        .required('Please enter a password')
        .min(7, 'Password must be more than seven characters'),
    terms: yup.boolean()
})

export default formSchema