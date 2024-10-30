import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormValues = {
    email: string;
    password: string;
    repeatPassword: string;
};

const SignUp = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>();

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
                <input {...register("email", {
                    required: {
                        value: true,
                        message: 'Email is required'
                    },
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: 'Invalid email address'
                    }
                })}/>
                {errors?.email && <p className="text-red-600 font-bold">{errors.email.message}</p>}
            </div>
            <div>
                <label>Password</label>
                <input {...register("password", {
                    required: {
                        value: true,
                        message: 'Password is required'
                    },
                    minLength: {
                        value: 6,
                        message: 'Password must have at least 6 characters'
                    },
                })}/>
                {errors?.password && <p className="text-red-600 font-bold">{errors.password.message}</p>}
            </div>
            <div>
                <label>Repeat Password</label>
                <input {...register("repeatPassword", {
                    required: {
                        value: true,
                        message: 'Repeat Password is required'
                    },
                    minLength: {
                        value: 6,
                        message: 'Password must have at least 6 characters'
                    },
                    validate: (value) => value === watch("password")  || 'The passwords do not match'
                })}/>
                {errors?.repeatPassword && <p className="text-red-600 font-bold">{errors.repeatPassword.message}</p>}
            </div>
            <button type="submit">
                Sign Up
            </button>
        </form>
    )
}

export default SignUp;