import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await axios.post("auth/login", form);
      localStorage.setItem("idUser", result.data.data.userId);
      localStorage.setItem("name", result.data.data.name);
      localStorage.setItem("token", result.data.data.token);
      alert(result.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  const handleChangeForm = (e) => {
    // console.log("ANDA SEDANG MENGINPUT DI = " + e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
    // form = {
    //     email : "bagus@gmail.com"
    //     password : 123
    // }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword); // mengeset nilai kebalikan dari boolean
  };

  return (
    <div className="container text-center">
      <h1>Login Page</h1>
      <hr />
      <input
        type="email"
        placeholder="Input your email ..."
        name="email"
        onChange={handleChangeForm}
      />{" "}
      <br />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Input your password ..."
        name="password"
        onChange={handleChangeForm}
      />{" "}
      <br />
      <button onClick={handleShowPassword}>
        {showPassword ? "Hide" : "Show"} Password
      </button>
      <br />
      <button className="btn btn-primary" onClick={handleLogin}>
        Signin
      </button>
    </div>
  );
}
