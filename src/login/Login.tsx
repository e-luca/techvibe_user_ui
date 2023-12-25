import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import FormInput from '../utils/form-input/FormInput'
import { AuthService } from '../auth/auth.service'
import { AuthenticationRequest } from '../data-models/model/AuthenticationRequest.model'
import { APIResponse } from '../data-models/model/ApiResponse.model'

const Login: React.FC = () => {
    const navigate = useNavigate()
    const navigateTo = (path: string) => navigate(path)
    
    const login = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        const requestData = Object.fromEntries(data.entries())
        const service = new AuthService()
        const request = new AuthenticationRequest(requestData.email.toString(), requestData.password.toString())
        service.authenticate(request).then((response: APIResponse<string>) => {
            localStorage.setItem('accessToken', response.data)
            navigateTo('/')
        })
    }

    return (
        <div className="d-flex justify-content-center align-items-baseline background">
            <div className="card border-danger login-card mt-5 pt-2">
                <div className="card-header text-center">
                    <img alt="Company logo"
                         src={ require('../assets/img/logo.png') }
                         className="logo"/>

                    <div className="mt-2">
                        Welcome to TechVibe!
                    </div>
                </div> 

                <div className="card-body">
                    <form onSubmit={ login }>
                        <FormInput data={{ label: "Email", id: "email", type: "email", placeholder: "Email" }}/>
                        <FormInput data={{ label: "Password", id: "password", type: "password", placeholder: "Password" }}/>

                        <div className="d-flex justify-content-center">
                            <button type="submit"
                                    className="btn btn-danger mt-3">
                                        Login
                            </button>
                        </div>
                    </form>
                </div>

                <div className="card-footer text-center">
                    <div className="footer-link"
                        onClick={ () => navigateTo('/register') }>
                        Not registered yet?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login