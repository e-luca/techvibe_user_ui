import React from 'react'
import './UserAddress.css'
import FormInput from '../../utils/form-input/FormInput'

const UserAddress: React.FC = () => {
    return (
            <div className="card border-danger register-card my-3 pt-2">
                <div className="card-header text-center">
                    <div className="my-2 header-title">
                        User Address
                    </div>
                </div>

                <div className="card-body">
                    <form>
                        <FormInput data={ { label: "Street name", id: "streetName", type: "text", placeholder: "Street name" } } />
                        <FormInput data={ { label: "Street number", id: "streetNumber", type: "text", placeholder: "Street number" } } />
                        <FormInput data={ { label: "City", id: "city", type: "text", placeholder: "City" } } />
                        <FormInput data={ { label: "State", id: "state", type: "text", placeholder: "State" } } />
                        <FormInput data={ { label: "ZIP Code", id: "zip", type: "text", placeholder: "ZIP code" } } />
                        <FormInput data={ { label: "Country", id: "country", type: "text", placeholder: "Country" } } />
                        <FormInput data={ { label: "Latitude", id: "latitude", type: "text", placeholder: "Latitude" } } />
                        <FormInput data={ { label: "Longitude", id: "longitude", type: "text", placeholder: "Longitude" } } />
                        <FormInput data={ { label: "Type", id: "type", type: "text", placeholder: "Type" } } />
                        <FormInput data={ { label: "Notes", id: "notes", type: "text", placeholder: "Notes" } } />

                        <div className="d-flex justify-content-end">
                            <button type="button" 
                                    className="btn btn-danger">
                                        Register   
                            </button>
                        </div>
                    </form>
                </div>
            </div>    
        )
}

export default UserAddress