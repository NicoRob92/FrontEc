import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { create_post } from "../../ducks/actions/actionCreators";
import FormProductDetail from "./FormProductDetail";
import FormProductDescription from "./FormProductDescription";
import Confirm from "./Confirm";
import Success from "./Success";
import validate from "./Validation";

export default function FormNewPost() {
  const dispatch = useDispatch()
  const [step, setStep] = useState(1)
  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    title: "",
    categoryId: "",
    condition: "",
    stock: "",
    images: "",
    description: "",
    price: "",
  });

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1)
  };

  // Go to previous step
  const prevStep = () => {
    setStep(step - 1)
  };

  // Handle field changes
  const handleChange = (e) => {
    setInput((input) => {
      const { name, value } = e.target
      return {
        ...input,
        [name]: value,
      }
    })
  }

  // Handle errors by blur event
  const handleBlur = () => {
    setErrors(validate(input));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(create_post(input))
    setInput({
      title: "",
      categoryId: "",
      condition: "",
      stock: "",
      images: "",
      description: "",
      price: "",
    });
  };

  switch (step) {
    case 1:
      return (
        <FormProductDetail
          nextStep={nextStep}
          handleChange={handleChange}
          handleBlur={handleBlur}
          input={input}
        />
      );
    case 2:
      return (
        <FormProductDescription
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          handleBlur={handleBlur}
          input={input}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          input={input}
          handleSubmit={handleSubmit}
        />
      );
    case 4:
      return <Success />;
    default:
      return null;
  }
}
