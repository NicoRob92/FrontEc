import { useState } from "react"
import FormProductDetail from "./FormProductDetail"
import FormProductDescription from "./FormProductDescription"
import Confirm from "./Confirm"
import Success from "./Success"
import validate from "./Validation"

export default function FormNewPost () {
    const [step, setStep] = useState(1)
    const [input, setInput] = useState({
        title: '',
        categoryId: '',
        condition: '',
        stock: '',
        images: '',
        description: '',
        price: '',
    })
    const [errors, setErrors] = useState({})



    // Proceed to next step
    const nextStep = () => {
        setStep(step + 1)
    }

    // Go to previous step
    const prevStep = () => {
        setStep(step - 1)
    }

    // Handle field changes
    function handleChange(e) {
        setInput((input) => {
            const { name, value } = e.target
            return {
                    ...input,
                    [name]: value
            }
        })
    }
    // Handle errors by blur event
    function handleBlur() {
        setErrors(validate(input))
    }

    function handleSubmit(e){
        e.preventDefault()

    }

        switch (step) {
            case 1:
                return (
                    <FormProductDetail
                        nextStep={nextStep}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        input={input}/>
                )
            case 2:
                return (
                    <FormProductDescription
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        input={input}
                        />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={nextStep}
                        prevStep={prevStep}
                        input={input}
                        />
                )
            case 4:
                return (
                    <Success />
                )
            default:
                return null
        }

}
