import React, {useState} from 'react';
import "./Style.css"

const Login = () => {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

const handleSubmit = (e) => {
  e.preventDefaut();
  console.log("submit", {email, password});
};

  return ( 
    
      <div className='container'>
        <div className='container-login'>
          <div className="wrap-login">
            <form className='login-form' onSubmit={handleSubmit}>
            <div className="login-form-title">
              <h1>Login</h1>
            </div>
              <div className='wrap-input'>
                <label className='focus-input' htmlFor="email">Email</label>
                <input className={email !== "" ? "has-val input" : "input"} type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
              </div>
              <div className="wrap-input">
                <label className='focus-input' htmlFor="password">Senha</label>
                <input className={password !== "" ? "has-val input" : "input"} type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
              </div>
              <div className="ccontainer-login-form-btn">
                <button className='login-form-btn' type="submit">Entrar</button>
              </div>
              <div className='text-center'>
                <span className='text1'>Não possui conta</span>
                <a className='text2' href="#">Criar conta</a>
              </div>
            </form>
          </div>
        </div>
      </div>
   );
}
 
export default Login;