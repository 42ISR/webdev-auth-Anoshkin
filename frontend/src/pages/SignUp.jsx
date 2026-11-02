import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import {api} from "../api/api";
import {useUserStore} from  "../store/useUserStore"

const SignUp = () => {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { setUser } = useUserStore()

    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")

        if (e.target.password.value !== e.target.password2.value)
            return setError("Пароли не совпадают")
        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,

        }

        try{
            const data = await api.registerUser(user)
            setUser(data.data)
            navigate("/")
        } catch (error) {
            console.error(error)
            setError(error.response.data.error)
        }    
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1 className="auth-title">Регистрация</h1>
                {error.length > 0 && <div className="auth-error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <Input
                        id="username"
                        name="username"
                        type="text"
                        minLength="3"
                        label="Имя пользователя"
                        required
                        placeholder="Введите имя пользователя"
                    />
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        label="Почта"
                        required
                        placeholder="Введите почту"
                    />
                    <Input
                        id="password"
                        name="password"
                        minLength="6"
                        type="password"
                        label="Пароль"
                        required
                        placeholder="Введите пароль"
                    />
                    <Input
                        id="password2"
                        name="password2"
                        minLength="6"
                        type="password"
                        label="Подтверждение пароля"
                        required
                        placeholder="Подтвердите пароль"
                    />
                    <Button>Зарегистрироваться</Button>
                </form>
                <div className="auth-footer">
                    <p>
                        <Link to={"/signin"}>Вход</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp
