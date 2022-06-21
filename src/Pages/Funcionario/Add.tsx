import React, {useState} from 'react';
import "../../Assets/Styles/CategoriaStyle.css"

export const Add = () =>{
    const [email, setEmail] = useState("");
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [nascimento, setNascimento] = useState("");

    return (
        <div className='container'>
            <div className='container-login'>
                <div className="wrap-login">
                    <form className='login-form'>
                        <div className="login-form-title">
                            <h1>Adicionar</h1>
                        </div>
                        <div className='wrap-input'>
                            <label className='focus-input' htmlFor="email">Email</label>
                            <input className={email !== "" ? "has-val input" : "input"} type="email" name="email"
                                   id="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="wrap-input">
                            <label className='focus-input' htmlFor="usuario">Usuário</label>
                            <input className={usuario !== "" ? "has-val input" : "input"} type="usuario"
                                   name="usuario" id="usuario" value={usuario}
                                   onChange={(e) => setUsuario(e.target.value)}></input>
                        </div>
                        <div className="wrap-input">
                            <label className='focus-input' htmlFor="senha">Senha</label>
                            <input className={senha !== "" ? "has-val input" : "input"} type="password"
                                   name="senha" id="senha" value={senha}
                                   onChange={(e) => setSenha(e.target.value)}></input>
                        </div>
                        <div className="wrap-input">
                            <label className='focus-input' htmlFor="nome">Nome</label>
                            <input className={nome !== "" ? "has-val input" : "input"} type="nome"
                                   name="nome" id="nome" value={nome}
                                   onChange={(e) => setNome(e.target.value)}></input>
                        </div>
                        <div className="wrap-input">
                            <label className='focus-input' htmlFor="cpf">CPF</label>
                            <input className={cpf !== "" ? "has-val input" : "input"} type="cpf"
                                   name="cpf" id="cpf" value={cpf}
                                   onChange={(e) => setCpf(e.target.value)}></input>
                        </div>
                        <div className="wrap-input">
                            <label className='focus-input' htmlFor="nascimento">Data de nascimento</label>
                            <input className={nascimento !== "" ? "has-val input" : "input"} type="date"
                                   name="nascimento" id="nascimento" value={nascimento}
                                   onChange={(e) => setNascimento(e.target.value)}></input>
                        </div>
                        <div className="ccontainer-login-form-btn">
                            <button className='login-form-btn' type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};