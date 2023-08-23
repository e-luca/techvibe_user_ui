import React from 'react'

interface FormInputProps {
    data: InputData
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

const FormInput: React.FC<FormInputProps> = ({ data }) => {
    return (
        <div className="form-group px-3 mb-3">
            <label htmlFor={ data.id }> { data.label } </label>
            <input type={ data.type }
                    name={ data.id } 
                    className={`form-control ${data.required && 'is-invalid'}`} 
                    id={ data.id }
                    pattern={ data.pattern }
                    required= { data.required } 
                    placeholder={ data.placeholder }/>
            {   data.required &&
                <div className="invalid-feedback">
                    { data.errorMessage || 'This field is required.' }
                </div> 
            }   
        </div>
    )
}

export default FormInput