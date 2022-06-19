import AppRoutes from "../Routes";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LogoImg from "../Assets/Img/logoNova.png";

const theme = createTheme();

export function Main() {
    const sections = [
        {title: 'Produtos', url: '/produtos'},
        {title: 'Categorias', url: '/categorias'},
        {title: 'Lançamentos', url: '/lancamentos'},
    ];

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="lg">
                <Navbar sections={sections} img={LogoImg}/>
                <AppRoutes/>
            </Container>
            <Footer title="Footer" description="Something here to give the footer a purpose!"/>
        </ThemeProvider>
    );
}