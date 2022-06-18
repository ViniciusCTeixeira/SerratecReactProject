import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import AppRoutes from "../Routes";

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export function Main() {
    const sections = [
        { title: 'Produtos', url: '/produtos' },
        { title: 'Categorias', url: '/categorias' },
        { title: 'Lançamentos', url: '/lancamentos' },
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Navbar title="Blog" sections={sections} />
                <AppRoutes />
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!"/>
        </ThemeProvider>
    );
}