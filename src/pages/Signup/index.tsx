import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSingup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  console.log(email);
  console.log(password);
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleSingup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
