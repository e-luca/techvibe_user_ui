import React from 'react'
import './UserDetails.css'
import FormInput from '../../utils/form-input/FormInput'
import SelectFormInput from '../../utils/form-input/SelectFormInput'

const UserDetails: React.FC = () => {
    return (
        <div className="card border-danger register-card my-3 pt-2">
            <div className="card-header text-center">
                <div className="my-2 header-title">
                    User Details
                </div>
            </div>

            <div className="card-body">
                <form>
                    <FormInput data={ { label: "First Name", id: "firstName", type: "text", placeholder: "First Name" } } />
                    <FormInput data={ { label: "Last Name", id: "lastName", type: "text", placeholder: "Last Name" } } />
                    <FormInput data={ { label: "Username", id: "username", type: "text", placeholder: "Username" } } />
                    <FormInput data={ { label: "Email", id: "email", type: "email", placeholder: "Email" } } />
                    <FormInput data={ { label: "Password", id: "password", type: "password", placeholder: "Password" } } />
                    <FormInput data={ { label: "Confirm password", id: "confirmPassword", type: "password", placeholder: "Confirm password" } } />
                    <FormInput data={ { label: "Date of birth", id: "dateOfBirth", type: "date", placeholder: "Date of birth" } } />
                    <FormInput data={ { label: "Image URL", id: "image", type: "text", placeholder: "Image URL" } } />
                    <SelectFormInput data={ { label: "Security question", id: "question", selectedOption: "Select question", options: ["Aaa", "Bbbb"] } } />
                    <FormInput data={ { label: "Answer", id: "answer", type: "text", placeholder: "Answer" } } />

                    <div className="d-flex justify-content-end">
                        <button type="button" 
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