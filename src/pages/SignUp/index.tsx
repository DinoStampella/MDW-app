import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { signUpSchema } from "./validations";

type FormValues = {
    email: string;
    password: string;
    repeatPassword: string;
};

const SignUp = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: joiResolver(signUpSchema)
    });

    const handleSignUp = handleSubmit(async (data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password)
            navigate("/");
        } catch (error) {
            console.error(error)
        }
    });

    return (
        <form onSubmit={handleSignUp}>
            <div>
                <label>Email</label>
                <input {...register("email")}/>
                {errors?.email && <p className="text-red-600 font-bold">{errors.email.message}</p>}
            </div>
            <div>
                <label>Password</label>
                <input {...register("password")}/>
                {errors?.password && <p className="text-red-600 font-bold">{errors.password.message}</p>}
            </div>
            <div>
                <label>Repeat Password</label>
                <input {...register("repeatPassword")}/>
                {errors?.repeatPassword && <p className="text-red-600 font-bold">{errors.repeatPassword.message}</p>}
            </div>
            <button type="submit">
                Sign Up
            </button>
        </form>
    )
}

export default SignUp;