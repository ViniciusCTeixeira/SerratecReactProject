import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import LogoImg from '../assets/img/logo.png';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Logo} from '../assets/styles/NavbarStyle';

export default function Navbar() {
    return (
        <BrowserRouter>
            <Nav>
                <NavLink to='/'>
                    <Logo src={LogoImg} alt='logo'/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to='/'>Inicio</NavLink>
                    <NavLink to='/produtos'>Produtos</NavLink>
                    <NavLink to='/cadastro'>Cadastro</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </BrowserRouter>
    );
};