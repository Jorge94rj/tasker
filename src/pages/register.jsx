import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../firebase/auth"
import { updateRegisterForm } from "../redux/store/form-register-slice"
import { load } from "../redux/store/ui-slice"
import { AuthCard, AuthCardFooter, AuthContainer, RowItem } from "../styles/auth"

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const { formRegister } = useSelector(store => store)
    const { username, password, confirmPassword } = formRegister

    const regex = /\S+@\S+\.\S+/
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            dispatch(load({ loading: true }))
            await registerUser(username, password)
            dispatch(load({ loading: false }))
            navigate('/board')
        } catch(error) {
            console.log(error)
        }
    }
    
    const isFormValid = () => {
        
        return (
            username &&
            password &&
            confirmPassword &&
            password === confirmPassword
        )
    }

    const updateForm = ({target: {name, value}}) => {
        const form = {}
        form[name] = value
        dispatch(updateRegisterForm(form))
    }

    return (
        <AuthContainer>
            <AuthCard>
                <RowItem>
                    <h3>Register user</h3>
                </RowItem>
                <form onSubmit={handleSubmit}>
                    <RowItem>
                        <input
                            type="email"
                            name="username"
                            placeholder="email"
                            onChange={updateForm}
                        />
                        { 
                            username && 
                            !regex.test(username) && 
                            <span className="form-error">*Invalid email</span>
                        }
                    </RowItem>
                    <RowItem>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={updateForm}
                        />
                        {
                            password && 
                            password.length < 6 && 
                            <span className="form-error">*Length should be at least 6 characters</span>
                        }
                    </RowItem>
                    <RowItem>
                        <input 
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            onChange={updateForm}
                        />
                        {
                            password &&
                            confirmPassword &&
                            password !== confirmPassword &&
                            <span className="form-error">*password doesn't match with confirm password</span>                            
                        }
                    </RowItem>
                    <RowItem>
                        <AuthCardFooter className="register">
                            <button
                                className="btn-primary"
                                disabled={!isFormValid()}
                            >
                                Register
                            </button>
                        </AuthCardFooter>
                    </RowItem>
                </form>
            </AuthCard>
        </AuthContainer>
    )
}

export default Register