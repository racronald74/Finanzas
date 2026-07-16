// ============================
// IMPORTACIONES
// ============================

import Navbar from "./Navbar";
import Footer from "./Footer";


// ============================
// COMPONENTE
// ============================

/**
 * Plantilla principal de la aplicación.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
const Layout = ({ children }) => {

    return (

        <>

            <Navbar />

            <main>

                {children}

            </main>

            <Footer />

        </>

    );

};

export default Layout;
