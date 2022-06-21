import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home/Home';
import Produtos from "./Pages/Produtos/Produtos";
import Lancamentos from "./Pages/Produtos/Lancamentos"
import ByCategoria from "./Pages/Produtos/ByCategoria";
import Cart from "./Pages/Produtos/Cart"
import Login from './Pages/User/Login';
import Cadastro from './Pages/User/Cadastro';
import Categorias from './Pages/Categoria/Categorias';
import EditCategoria from './Pages/Categoria/Edit';
import AddCategoria from './Pages/Categoria/Add'
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
                <Route path="/categorias" element={<ByCategoria/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/enderecos" element={<Endereco/>}/>
                <Route path="/adm/categorias" element={<Categorias/>}/>
                <Route path="/adm/categorias/edit" element={<EditCategoria/>}/>
                <Route path="/adm/categorias/add" element={<AddCategoria/>}/>
                <Route path="/adm/enderecos/edit" element={<EditEndereco/>}/>
            </Routes>
        </BrowserRouter>
    );
}