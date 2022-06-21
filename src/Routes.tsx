import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Login} from './Pages/User/Login';
import Cadastro from './Pages/User/Cadastro';
import {Home} from './Pages/Home/Home';
import {Categorias} from './Pages/Categoria/Categorias';
import {Endereco} from './Pages/Endereco/Endereco'
import { Edit as EditCategoria} from './Pages/Categoria/Edit';
import { Edit as EditEndereco} from './Pages/Endereco/Edit'
import { Edit as EditFuncionario} from './Pages/Funcionario/Edit'
import {Funcionario} from './Pages/Funcionario/Funcionario';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Cadastro/>}/>
                <Route path="/produtos" element={<Login/>}/>
                <Route path="/categorias" element={<Categorias/>}/>
                <Route path="/enderecos" element={<Endereco/>}/>
                <Route path="/categorias/edit" element={<EditCategoria/>}/>
                <Route path="/enderecos/edit" element={<EditEndereco/>}/>
                <Route path="/funcionarios" element={<Funcionario/>}/>
                <Route path="/funcionarios/edit" element={<EditFuncionario/>}/>
            </Routes>
        </BrowserRouter>
    );
}