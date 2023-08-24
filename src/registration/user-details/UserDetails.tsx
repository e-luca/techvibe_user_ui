import React, { useState } from 'react'
import './UserDetails.css'
import { User } from '../../data-models/model/User.model';
import { AccessInfo } from '../../data-models/model/AccessInfo.model';
import FormInput from '../../utils/form-input/FormInput';
import SelectFormInput from '../../utils/form-input/SelectFormInput';

interface UserDetailsProps {
    onSubmitData: (data: { user: User, accessInfo: AccessInfo }) => void
}

const UserDetails: React.FC<UserDetailsProps> = ({ onSubmitData }) => {

    const [enteredPassword, setEnteredPassword] = useState('')

    const handleOnChange = (value: string) => {
        setEnteredPassword(value)
    }

    const submitData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const userData = Object.fromEntries(data.entries())
        const user = new User(0, userData.firstName.toString(), userData.lastName.toString(), userData.username.toString(), 
                                userData.email.toString(), userData.dateOfBirth.toString(), userData.image.toString(), '', '')
        const accessInfo = new AccessInfo(userData.password.toString(), userData.question.toString(), userData.answer.toString())
        onSubmitData({ user, accessInfo })
    }

    return (
        <div className="card border-danger register-card my-3 pt-2">
            <div className="card-header text-center">
                <div className="my-2 header-title">
                    User Details
                </div>
            </div>

            <div className="card-body">
                <form onSubmit={ submitData }>
                    <FormInput data={ { label: "First Name", id: "firstName", type: "text", placeholder: "First Name", required: true } } />
                    <FormInput data={ { label: "Last Name", id: "lastName", type: "text", placeholder: "Last Name", required: true } } />
                    <FormInput data={ { label: "Username", id: "username", type: "text", placeholder: "Username", pattern: '^[a-zA-Z0-9_]+$', errorMessage: "Only numbers, letters and _ are allowed!", required: true } } />
                    <FormInput data={ { label: "Email", id: "email", type: "email", placeholder: "Email", errorMessage: "Invalid email format!", required: true } } />
                    <FormInput data={ { label: "Password", id: "password", type: "password", placeholder: "Password", pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$', errorMessage: "Password should be 8-16 characters and include 1 letter, 1 number and 1 special character!", required: true } } onChange={ handleOnChange } />
                    <FormInput data={ { label: "Confirm password", id: "confirmPassword", type: "password", placeholder: "Confirm password", pattern: enteredPassword, errorMessage: "Passwords don't match!", required: true } } />
                    <FormInput data={ { label: "Date of birth", id: "dateOfBirth", type: "date", placeholder: "Date of birth", required: true } } />
                    <FormInput data={ { label: "Image URL", id: "image", type: "text", placeholder: "Image URL" } } />
                    <SelectFormInput data={ { label: "Security question", id: "question", selectedOption: "Select question", options: ["Aaa", "Bbbb"] } } />
                    <FormInput data={ { label: "Answer", id: "answer", type: "text", placeholder: "Answer" } } />

                    <div className="d-flex justify-content-end">
                        <button type="submit"
                                className="btn btn-danger">
                                    Next   
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UserDetails