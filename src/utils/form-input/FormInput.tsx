import React from 'react'

interface FormInputProps {
    data: InputData
}

interface InputData {
    label: string,
    id: string,
    type: string,
    placeholder: string
}

const FormInput: React.FC<FormInputProps> = ({ data }) => {
    return (
        <div className="form-group px-3">
            <label htmlFor={ data.id }> { data.label } </label>
            <input type={ data.type } 
                    className="form-control mb-3" 
                    id={ data.id } 
                    placeholder={ data.placeholder }/>
        </div>
    )
}

export default FormInput