import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'reactstrap';
import '../App.css';
import imagenCocinera from '../elements/imagenes/cocinera-chocolate.jpg';

const Componente = () => {
    return (
        <div className='App-header'>
            <div className='container-fluid' key='sobreNosotros'>
                <Row>
                    <Col sm="6">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h4>Somos una chocolatería artesanal y familiar con varios años en diversos campos de la cocina.</h4>
                        <h4>Nuestras artesanías son respaldadas por los aprendizajes adquiridos en instituciones reconocidas</h4>
                        <h4>y por materia prima de primera. Nos encanta lo que hacemos. ¡Te invitamos a compartir ese gusto con nosotros!</h4>
                    </Col>
                    <Col sm="6">
                        <div className='imagen-mediana'>
                            <img src={imagenCocinera} alt='cocinera'></img>
                        </div>
                    </Col>
                </Row>
            </div >
        </div >
    )
}

export const SobreNosotros = () => {
    return (
        <div>
            <Componente />
        </div>
    )
}
