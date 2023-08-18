import React from 'react'

interface SelectFormInputProps {
    data: SelectInputData
}

interface SelectInputData {
    label: string,
    id: string,
    selectedOption: string,
    options: string[]
}

const SelectFormInput: React.FC<SelectFormInputProps> = ({ data }) => {
    return (
        <div className="form-group px-3">
            <label htmlFor={ data.id }> { data.label } </label>
            <select  className="form-select mb-3" 
                    id={ data.id }>

                <option value={ data.selectedOption }>{ data.selectedOption }</option>
                { data.options.map(option => (
                    <option value={ option } key={ option }>{ option }</option>
                  )) 
                }
            </select>
        </div>
    )
}

export default SelectFormInput