import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    Logo
} from './Navbar';

const Navbar = () => {
    return (
        <BrowserRouter>

            <Nav>
                <NavLink to='/'>
                    <Logo src={require('../../assets/img/logob.png')} alt='logo' />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/' >
                        Inicio
                    </NavLink>
                    <NavLink to='/produtos' >
                        Produtos
                    </NavLink>
                    <NavLink to='/cadastro' >
                        Cadastro
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavBtn>
            </Nav>

        </BrowserRouter>
    );
};

export default Navbar;