import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {useUserStore} from "../store/useUserStore"

const Logout = () => {
    const navigate = useNavigate()
    const {clearUser} = useUserStore()
    useEffect(() => {
        clearUser()
        navigate("/")
    }, [])
    return <></>
}

export default Logout
