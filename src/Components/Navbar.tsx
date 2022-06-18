import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import LogoImg from '../Assets/Img/logo.png';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Logo} from '../Assets/Styles/NavbarStyle';
export function Navbar() {
    return (
        <BrowserRouter>
            <Nav>
                <NavLink to='' >
                    <Logo src={LogoImg} alt='logo'/>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to=''>Inicio</NavLink>
                    <NavLink to='produtos'>Produtos</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='login'>Login</NavBtnLink>
                    <NavBtnLink to='cadastro'>Cadastro</NavBtnLink>
                </NavBtn>
            </Nav>
        </BrowserRouter>
    );
};