import Button from "../../components/Button";

import logo from "../../assets/logo.png";
import eyeOff from "../../assets/eye-off.svg";
import eye from "../../assets/eye.svg";

import { Link } from "react-router-dom";

import "./style.css";
import { useState } from "react";


function Login() {
    const [isPasswordVisibility, setIsPasswordVisibility] = useState(false);

    const handlePasswordVisibility = () => {
        setIsPasswordVisibility(!isPasswordVisibility);
    }


    return (
        <div className="container">
            <div className="main">
                <div className="main-title">
                    <h2 className="title">Bem vindo(a)</h2>
                    <img className="logo" src={logo} alt="" />
                </div>
{/* 
                <div className="main-form"> */}
                <div className="div">

                </div>
                    <form className="form">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" name="email" id="email" placeholder="Digite seu e-mail aqui..." />
                        </div>
                        <div className="form-group">
                            <label>Senha</label>

                            <input type={isPasswordVisibility ? "text" : "password"} name="password" id="password" placeholder="Digite sua senha aqui..." maxLength={8}/>
                            <img src={isPasswordVisibility ? eye : eyeOff} className="eye" onClick={handlePasswordVisibility}/>

                            {/* <div className={limit = 8 ? "alert" : "block"}>
                                <p>Limite de 8 digitos</p>
                            </div> */}

                            <div className="form-lost">
                                <a href="#">Esqueceu sua senha?</a>
                            </div>
                        </div>

                    </form>

                    <div className="footer">
                        <Button text="Entrar" />
                        <p>Ainda não tem conta? <Link to="/Register">Cadastre-se</Link></p>
                    </div>
                </div>

            </div>
        // </div>
    )

}

export default Login