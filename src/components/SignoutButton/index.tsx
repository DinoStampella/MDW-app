import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const SingoutButton = () => {
  const handleSignout = async () => {
    await signOut(auth);
  };
  return <button onClick={handleSignout}>Sign out</button>
};

export default SingoutButton;
