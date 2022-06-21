import React, {useState} from 'react';
import "../../Assets/Styles/CategoriaStyle.css"

export const Add = () =>{
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");

    return (
        <div className='container'>
            <div className='container-login'>
                <div className="wrap-login">
                    <form className='login-form'>
                        <div className="login-form-title">
                            <h1>Adicionar</h1>
                        </div>
                        <div className='wrap-input'>
                            <label className='focus-input' htmlFor="cep">CEP</label>
                            <input className={cep !== "" ? "has-val input" : "input"} type="cep" name="cep"
                                   id="cep" value={cep} onChange={(e) => setCep(e.target.value)}></input>
                        </div>
                        <div className="wrap-input">
                            <label className='focus-input' htmlFor="numero">Número</label>
                            <input className={numero !== "" ? "has-val input" : "input"} type="numero"
                                   name="numero" id="numero" value={numero}
                                   onChange={(e) => setNumero(e.target.value)}></input>
                        </div>
                        <div className="wrap-input">
                            <label className='focus-input' htmlFor="complemento">Complemento</label>
                            <input className={complemento !== "" ? "has-val input" : "input"} type="complemento"
                                   name="complemento" id="complemento" value={complemento}
                                   onChange={(e) => setComplemento(e.target.value)}></input>
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