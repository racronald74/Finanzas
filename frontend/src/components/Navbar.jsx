// ============================
// IMPORTACIONES
// ============================

import { Link } from "react-router-dom";


// ============================
// COMPONENTE
// ============================

/**
 * Barra de navegación principal.
 */
const Navbar = () => {

    return (

        <nav>

            <h2>Finanzas App</h2>

            <ul>

                <li>
                    <Link to="/">Inicio</Link>
                </li>

                <li>
                    <Link to="/ingresos">
                        Gestión de Ingresos
                    </Link>
                </li>

            </ul>

        </nav>

    );

};

export default Navbar;