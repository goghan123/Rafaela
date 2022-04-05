import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet
} from "react-router-dom";
import './estilos-todos.css';
import { BarraSuperior } from './components/BarraSuperior';
import { BarraInferior } from './components/BarraInferior';
import './App.css';
import { Cuerpo } from './components/Cuerpo';
import { SobreNosotros } from './components/SobreNosotros';
import { Entregas } from './components/Entregas';
import { Inicio } from './components/Inicio';
import { NuestrosProductos } from './components/NuestrosProductos';
import { Pedido } from './components/Pedido';

const General = (props) => {
    return (
        <div>
            {document.title = 'Rafaela'}
            <BarraSuperior />
            <Cuerpo
                content={props.contenido}
            ></Cuerpo>
            <BarraInferior />
        </div>
    );
}

export default function Principal() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' element={<General contenido={<Outlet />} />}>
                        <Route index element={<Inicio />}></Route>
                        <Route path={'/pedido'} element={<Pedido />}></Route>
                        <Route path={'/nuestros-productos'} element={<NuestrosProductos />}></Route>
                        <Route path={'/entregas'} element={<Entregas />}></Route>
                        <Route path={'/sobre'} element={<SobreNosotros />}></Route>
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}
