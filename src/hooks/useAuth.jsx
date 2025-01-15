import { useContext } from "react"
import AuthContext from "../Context/AuthContext"


export default function useAuth() {
    const auth = useContext(AuthContext)
    return auth
}
