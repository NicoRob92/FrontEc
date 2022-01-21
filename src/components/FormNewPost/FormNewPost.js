import React, { Component } from "react";
import FormProductDetail from './FormProductDetail'
import FormProductDescription from "./FormProductDescription";
import Confirm from "./Confirm";
import Success from "./Success";

export default class FormNewPost extends Component {
    state = {
        step: 1,
        title: '',
        category: '',
        condition: '',
        amount: '',
        photos: '',
        description: '',
        price: '',
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    // Go to previous step
    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    // Handle field changes
    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    }

    render() {
        const { step } = this.state
        const { title, category, condition, amount, photos, description, price } = this.state
        const values = { title, category, condition, amount, photos, description, price}
        switch (step) {
            case 1:
                return (
                    <FormProductDetail nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
                )
            case 2:
                return (
                    <FormProductDescription nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values} />
                )
            case 3:
                return (
                    <Confirm nextStep={this.nextStep} prevStep={this.prevStep} values={values}/>
                )
            case 4:
                return (
                    <Success/>
                )
            default:
                break;
        }
    }
}

