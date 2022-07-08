import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../firebase/auth"
import { updateLoginForm } from "../redux/store/form-login-slice"
import { AuthCard, AuthCardFooter, AuthContainer, RowItem } from "../styles/auth"

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { formLogin } = useSelector(store => store)
    const { username, password } = formLogin

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await login(username, password)
            navigate('/board')
        } catch(error) {
            console.log(error)
        }
    }

    const isFormValid = () => {
        return (
            username &&
            password &&
            username.length >= 3 &&
            password.length >= 3
        )
    }

    const updateForm = ({target: {name, value}}) => {
        const form = {}
        form[name] = value
        dispatch(updateLoginForm(form))
    }

    return (
        <AuthContainer>
            <AuthCard>
                <RowItem>
                    <h3>Log In</h3>
                </RowItem>
                <form onSubmit={handleSubmit}>
                    <RowItem>
                        <input
                            name="username"
                            placeholder="username"
                            onChange={updateForm}
                        />
                    </RowItem>
                    <RowItem>
                        <input
                            name="password"
                            placeholder="password"
                            type="password"
                            onChange={updateForm}
                        />
                    </RowItem>
                    <RowItem>
                        <AuthCardFooter className="login">
                            <button 
                                className="btn-primary"
                                disabled={!isFormValid()}
                            >
                                Log in
                            </button>
                            <Link to="/register">Register</Link>
                        </AuthCardFooter>
                    </RowItem>
                </form>
            </AuthCard>
        </AuthContainer>
    )
}

export default Login