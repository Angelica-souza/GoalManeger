import { Link } from "react-router-dom"
import Button from "../../components/Button"

import logo from "../../assets/logo.png"
import eye from "../../assets/eye.svg"
import eyeOff from "../../assets/eye-off.svg"

import "./style.css"
import { useState } from "react"

function Register() {
    const [isPasswordVisibility, setIsPasswordVisibility] = useState(false);

    const handlePasswordVisibility = () =>{
        setIsPasswordVisibility(!isPasswordVisibility);
    }

    return (
        <div className="container">
            <div className="main">
                <div className="main-title">
                    <h2 className="title">Cadastro</h2>
                    <img className="logo" src={logo} alt="" />
                </div>

                {/* <div className="main-form"> */}
                <div className="div"></div>
                    <form className="form">
                        <div className="form-group">
                            <label>Nome completo</label>
                            <input type="text" name="name" id="name" placeholder="Digite seu e-mail aqui..." />
                        </div>
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="email" name="email" id="email" placeholder="Digite seu e-mail aqui..." />
                        </div>
                        <div className="form-group">
                            <label>Senha</label>

                            <input type={isPasswordVisibility ? "text" : "password"} name="password" id="password" placeholder="Digite sua senha aqui..." />
                            <img src={isPasswordVisibility ? eye : eyeOff} className="eye" onClick={handlePasswordVisibility}/>
                        </div>

                    </form>

                    <div className="footer">
                        <Button text="Cadastrar" />
                        <p>Já tem conta? Faça<Link to="/"> login</Link></p>
                    </div>
                
                </div>

            </div>
        // </div>
    );
}

export default Register