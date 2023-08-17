import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
    const navigate = useNavigate()
    const navigateTo = (path: string) => navigate(path) 

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

                    <form>
                        <div className="form-group px-3">
                            <label htmlFor="email"> Email </label>
                            <input type="email" 
                                   className="form-control mb-3" 
                                   id="email" 
                                   placeholder="Email..."/>
                        </div>

                        <div className="form-group px-3">
                            <label htmlFor="password"> Password </label>
                            <input type="password" 
                                   className="form-control" 
                                   id="password" 
                                   placeholder="Password..."/>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type="button"
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