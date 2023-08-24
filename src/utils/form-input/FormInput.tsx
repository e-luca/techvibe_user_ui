import React, { useState } from 'react'

interface FormInputProps {
    data: InputData,
    onChange?: (value: string) => void
}

interface InputData {
    label: string,
    id: string,
    type: string,
    placeholder: string,
    pattern?: string,
    errorMessage?: string,
    required?: boolean
}

const FormInput: React.FC<FormInputProps> = ({ data, onChange }) => {
    
    const [inputValue, setInputValue] = useState('')
    const [touched, setTouched] = useState(false)

    const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
        setTouched(true)
        if (onChange) onChange(inputValue)
    }

    const isValid = () => {
        if (data.required && inputValue.trim() === '') return false
        if (data.pattern && !new RegExp(data.pattern).test(inputValue)) return false

        return true
    }

    return (
        <div className="form-group px-3 mb-3">
            <label htmlFor={ data.id }> { data.label } </label>
            <input type={ data.type }
                    name={ data.id } 
                    className={`form-control ${touched && !isValid() && 'is-invalid'}`} 
                    id={ data.id }
                    pattern={ data.pattern }
                    required= { data.required } 
                    placeholder={ data.placeholder } 
                    onChange={ onValueChange }/>
            {   touched && !isValid() && (
                <div className="invalid-feedback">
                    { data.errorMessage || 'This field is required.' }
                </div>) 
            }   
        </div>
    )
}

export default FormInput