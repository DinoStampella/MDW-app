import { signInWithEmailAndPassword } from "firebase/auth";
import { ChangeEvent, useState } from "react";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleLogIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/");
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" onChange={handleEmailChange}/>
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" onChange={handlePasswordChange}/>
                </div>
                <button type="button" onClick={handleLogIn}>
                    Log In
                </button>
            </form>
        </div>
    )
}

export default LogIn;