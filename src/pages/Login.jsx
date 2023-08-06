import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Vitalii Chat</span>
        <span className="title">Увійти</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="Пароль" />
          <button>Увійти</button>
          {err && <span>Щось пішло не так</span>}
        </form>
        <p>У вас немає аккаунта? <Link to="/register">Зареєструватись</Link></p>
      </div>
    </div>
  );
};

export default Login;
