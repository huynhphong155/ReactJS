import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import userIcon from "../../assets/user.svg";
import passwordIcon from "../../assets/password.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };

  return (
    <form>
      <h1 className={style.title}>Đăng nhập</h1>
      <div className={style.field}>
        <label className={style.label} htmlFor="">
          Tên đăng nhập
        </label>
        <div className={style.input_container}>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            name="username"
            id="username"
            className={style.input}
          />
          <img className={style.input_icon} src={userIcon} alt="user-icon" />
        </div>
      </div>
      <div className={style.field}>
        <label className={style.label} htmlFor="">
          Mật khẩu
        </label>
        <div className={style.input_container}>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
            className={style.input}
          />
          <img
            className={style.input_icon}
            src={passwordIcon}
            alt="password-icon"
          />
        </div>
      </div>
      <div className={style.link_container}>
        <Link to="/login/forgot-password">Quên mật khẩu?</Link>
      </div>

      <div>
        <button className={style.button} onClick={handleSubmit}>
          Đăng nhập
        </button>
      </div>
    </form>
  );
};

export default Login;
