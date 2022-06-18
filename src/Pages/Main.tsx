import {Navbar} from '../Components/Navbar';
import {Footer} from '../Components/Footer';
import {AppRoutes} from "../Routes";

export function Main() {
    return (
        <main>
            <Navbar />
            <AppRoutes />
            <Footer />
        </main>
    );
}