import { User } from "firebase/auth"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children, user}: {children: JSX.Element, user: User | null
}) => {
 return user ? children : <Navigate to={"/home"}/>
} 

export default ProtectedRoute;