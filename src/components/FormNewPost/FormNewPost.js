import { Component, useState } from "react";
import FormProductDetail from './FormProductDetail'
import FormProductDescription from "./FormProductDescription";
const FormNewPost = () => {
    const [state, setState] = useState({
        step: 1,
        title: '',
        category: '',
        condition: '',
        amount: '',
        photos: '',
        description: '',
        price: '',
    })

    // Proceed to next step
    const newStep = () => {
        const { step } = state
        setState({
            step: step + 1
        })
    }

    // Go to previous step
    const prevStep = () => {
        const { step } = state
        setState({
            step: step - 1
        })
    }

    // Handle field changes
    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const { step } = state
    const { category, title, condition, amount, photos, description, price } = state
    const values = { category, title, condition, amount, photos, description, price }

    switch (step) {
        case 1:
            return (
                <FormProductDetail newStep={newStep} handleChange={handleChange} values={values} />
            )
        case 2:
            return (
                <FormProductDescription newStep={newStep} prevStep={prevStep} handleChange={handleChange} values={values} />
            )
        case 3:
            return (
                <h1>Confirm</h1>
            )
        case 4:
            return (
                <h1>Success</h1>
            )
        default:
            break;
    }

}

export default FormNewPost;
