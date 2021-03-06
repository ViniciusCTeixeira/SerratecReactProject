import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Pages/User/Login';
import Cadastro from './Pages/User/Cadastro';
import Home from './Pages/Home/Home';
import Produtos from './Pages/Produtos/Produtos';
import Lancamentos from "./Pages/Produtos/Lancamentos";
import Categorias from './Pages/Categoria/Categorias';
import Endereco from './Pages/Endereco/Endereco';
import EditCategoria from './Pages/Categoria/Edit';
import EditEndereco from './Pages/Endereco/Edit';
import EditFuncionario from './Pages/Funcionario/Edit';
import Funcionario from './Pages/Funcionario/Funcionario';
import AddFuncionario from './Pages/Funcionario/Add';
import AddCategoria from './Pages/Categoria/Add';
import ByCategoria from "./Pages/Produtos/ByCategoria";
import Cart from "./Pages/User/Cart";
import ListaProdutos from "./Pages/Produtos/ListaProdutos";
import AddProduto from "./Pages/Produtos/Add";
import EditProduto from "./Pages/Produtos/Edit";
import AddEndereco from "./Pages/Endereco/Add";

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
                <Route path="enderecos" element={<Endereco/>}/>
                <Route path="/enderecos/edit" element={<EditEndereco/>}/>
                <Route path="/enderecos/add" element={<AddEndereco/>}/>
                <Route path="/adm/funcionarios" element={<Funcionario/>}/>
                <Route path="/adm/funcionarios/edit" element={<EditFuncionario/>}/>
                <Route path="/adm/funcionarios/add" element={<AddFuncionario/>}/>
                <Route path="/adm/categorias" element={<Categorias/>}/>
                <Route path="/adm/categorias/edit" element={<EditCategoria/>}/>
                <Route path="/adm/categorias/add" element={<AddCategoria/>}/>
                <Route path="/adm/produtos" element={<ListaProdutos/>}/>
                <Route path="/adm/produtos/edit" element={<EditProduto/>}/>
                <Route path="/adm/produtos/add" element={<AddProduto/>}/>
            </Routes>
        </BrowserRouter>
    );
}