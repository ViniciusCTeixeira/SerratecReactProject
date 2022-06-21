import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Produtos from "./Pages/Produtos/Produtos";
import Lancamentos from "./Pages/Produtos/Lancamentos"
import Login from './Pages/User/Login';
import Cadastro from './Pages/User/Cadastro';
import Categorias from './Pages/Categoria/Categorias';
import EditCategoria from './Pages/Categoria/Edit';
import Endereco from './Pages/Endereco/Endereco'
import EditEndereco from './Pages/Endereco/Edit'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Cadastro/>}/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/lancamentos" element={<Lancamentos/>}/>
                <Route path="/categorias" element={<Categorias/>}/>
                <Route path="/enderecos" element={<Endereco/>}/>
                <Route path="/categorias/edit" element={<EditCategoria/>}/>
                <Route path="/enderecos/edit" element={<EditEndereco/>}/>
            </Routes>
        </BrowserRouter>
    );
}