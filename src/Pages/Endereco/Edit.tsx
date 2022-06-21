import React, {useState} from 'react';
import "../../Assets/Styles/CategoriaStyle.css"

export default function Edit() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");

    return (
        <div className='container'>
            <div className='container-login'>
                <div className="wrap-login">
                    <form className='login-form'>
                        <div className="login-form-title">
                            <h1>Editar</h1>
                        </div>
                        <div className='wrap-input'>
                            <label className='focus-input' htmlFor="nome">Nome</label>
                            <input className={nome !== "" ? "has-val input" : "input"} type="nome" name="nome"
                                   id="nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                        </div>
                        <div className="wrap-input">
                            <label className='focus-input' htmlFor="descricao">Descrição</label>
                            <input className={descricao !== "" ? "has-val input" : "input"} type="descricao"
                                   name="descricao" id="descricao" value={descricao}
                                   onChange={(e) => setDescricao(e.target.value)}></input>
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