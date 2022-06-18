import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Login} from './Pages/User/Login';
import {Home} from './Pages/Home/Home';
import {Categorias} from './Pages/Categoria/Categorias';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Login/>}/>
                <Route path="/produtos" element={<Login/>}/>
                <Route path="/categorias" element={<Categorias/>}/>
            </Routes>
        </BrowserRouter>
    );
}