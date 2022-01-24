import { Component } from "react"
import FormProductDetail from "./FormProductDetail"
import FormProductDescription from "./FormProductDescription"
import Confirm from "./Confirm"
import Success from "./Success"
import validate from "./Validation"

const inititalValue = {
    title: '',
    category: '',
    condition: '',
    amount: '',
    photos: '',
    description: '',
    price: '',
}

export default class FormNewPost extends Component {

    state = {
        step: 1,
        input: inititalValue,
        errors: {}
    }

    handleChange = this.handleChange.bind(this)
    handleBlur = this.handleBlur.bind(this)


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
    handleChange(e) {
        this.setState((state) => {
            const { input } = state
            const { name, value } = e.target
            return {
                input: {
                    ...input,
                    [name]: value
                }
            }
        })
    }

    handleBlur() {
        this.setState({
            errors: validate(this.state.input)
        })
    }

    render() {
        const { step } = this.state
        const { title, category, condition, amount, photos, description, price } = this.state.input
        const values = { title, category, condition, amount, photos, description, price }
        switch (step) {
            case 1:
                return (
                    <FormProductDetail
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        values={values} />
                )
            case 2:
                return (
                    <FormProductDescription
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleBlur={this.handleBlur}
                        values={values} />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values} />
                )
            case 4:
                return (
                    <Success />
                )
            default:
                break;
        }
    }
}