import { useState } from "react"

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue);

    const hasError= !valueIsValid && isTouched

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }

    const blurHandler = () => {
        setIsTouched(true)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: hasError,
        valueChangeHandler,
        blurHandler
    }
}

export default useInput;