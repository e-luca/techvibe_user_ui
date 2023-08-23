import React, { useEffect, useRef } from 'react'
import './UserAddress.css'
import FormInput from '../../utils/form-input/FormInput'
import { UserAddress as Address } from '../../data-models/model/UserAddress.model'
import SelectFormInput from '../../utils/form-input/SelectFormInput'

interface UserAddressProps {
    onSubmitData: (address: Address) => void
}

const UserAddress: React.FC<UserAddressProps> = ({ onSubmitData }) => {

    const refElement = useRef<HTMLDivElement>(null)
    const addressTypes: string[] = ['Secondary Residence', 'Business Address', 'Family Member\'s Address', 'Temporary Address', 'Alternate Address']

    const submitData = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const addressData = Object.fromEntries(data.entries())
        const address = new Address(addressData.streetName.toString(), addressData.streetNumber.toString(), addressData.city.toString(),
                                    addressData.state.toString(), addressData.zip.toString(), addressData.country.toString(), addressData.latitude.toString(),
                                    addressData.longitude.toString(), addressData.type.toString(), addressData.notes.toString())
        onSubmitData(address)
    }

    useEffect(() => {
        if (refElement.current) refElement.current.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
            <div className="card border-danger register-card my-3 pt-2" ref={ refElement }>
                <div className="card-header text-center">
                    <div className="my-2 header-title">
                        User Address
                    </div>
                </div>

                <div className="card-body">
                    <form onSubmit={ submitData }>
                        <FormInput data={ { label: "Street name", id: "streetName", type: "text", placeholder: "Street name" } } />
                        <FormInput data={ { label: "Street number", id: "streetNumber", type: "text", placeholder: "Street number" } } />
                        <FormInput data={ { label: "City", id: "city", type: "text", placeholder: "City" } } />
                        <FormInput data={ { label: "State", id: "state", type: "text", placeholder: "State" } } />
                        <FormInput data={ { label: "ZIP Code", id: "zip", type: "text", placeholder: "ZIP code" } } />
                        <FormInput data={ { label: "Country", id: "country", type: "text", placeholder: "Country" } } />
                        <FormInput data={ { label: "Latitude", id: "latitude", type: "text", placeholder: "Latitude" } } />
                        <FormInput data={ { label: "Longitude", id: "longitude", type: "text", placeholder: "Longitude" } } />
                        <SelectFormInput data={ { label: "Type", id: "type", selectedOption: 'Primary Address', options: addressTypes } } />
                        <FormInput data={ { label: "Notes", id: "notes", type: "text", placeholder: "Notes" } } />

                        <div className="d-flex justify-content-end">
                            <button type="submit" 
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