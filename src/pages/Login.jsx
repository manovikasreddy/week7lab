import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <h2>Login</h2>
      <button
        onClick={() => {
          login();
          navigate("/contact");
        }}
      >
        Login
      </button>
    </>
  );
}