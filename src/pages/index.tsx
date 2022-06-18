import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {AppRoutes} from "../Routes";

export function App() {
    return (
        <main>
            <Navbar />
            <AppRoutes />
            <Footer />
        </main>
    );
}