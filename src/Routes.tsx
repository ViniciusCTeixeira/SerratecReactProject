import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Login} from './Pages/User/Login';
import Cadastro from './Pages/User/Cadastro';
import {Home} from './Pages/Home/Home';
import {Categorias} from './Pages/Categoria/Categorias';
import {Endereco} from './Pages/Endereco/Endereco'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Cadastro/>}/>
                <Route path="/produtos" element={<Login/>}/>
                <Route path="/categorias" element={<Categorias/>}/>
                <Route path="/endereco" element={<Endereco/>}/>
            </Routes>
        </BrowserRouter>
    );
}