import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'reactstrap';
import '../estilos-todos.css';
import imagenCocinera from '../elements/imagenes/cocinera-chocolate.jpg';
import { useResponsiveTools } from '../elements/someFunctions.js';

const ComponenteAmpliado = (props) => {
    const { windowWidth, windowHeight } = useResponsiveTools();
    return (
        <div className='App-header margenes'>
            {
                windowHeight < 400 &&
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            }
            <div className='container-fluid' key='sobreNosotros'>
                <Row height='400px'>
                    <Col className=''>
                        {
                            windowWidth < 1300 ?
                                <h5 className=''>
                                    {props.texto}
                                </h5>
                                :
                                <h4 className=''>
                                    {props.texto}
                                </h4>
                        }
                    </Col>
                    <Col className='' sm={1}>
                    </Col>
                    <Col className='centrado' sm={6}>
                        <div className='centrado'>
                            <img
                                className='imagen-mediana'
                                src={imagenCocinera}
                                alt='cocinera'>
                            </img>
                        </div>
                    </Col>
                </Row>
                {
                    windowHeight < 400 && <br></br>
                }
            </div >
        </div >
    )
}

const ComponenteReducido = (props) => {
    const { windowHeight } = useResponsiveTools();
    return (
        <div className='App-header margenes'>
            {
                windowHeight < 400 && <br></br>
            }
            {
                windowHeight < 768 &&
                <div>
                    <br></br>
                    <br></br>
                </div>
            }
            <div className='container-fluid' key='sobreNosotros'>
                <h4 className=''>
                    {props.texto}
                </h4>
                <br></br>
                <img className='imagen-ancha' src={imagenCocinera} alt='cocinera'></img>
            </div>
            {
                windowHeight < 400 && <br></br>
            }
        </div >
    )
}

export const SobreNosotros = () => {
    const { windowWidth } = useResponsiveTools();
    const texto = 'Somos una chocolatería artesanal y familiar con varios años en diversos campos de la cocina. Nuestras artesanías son respaldadas por los aprendizajes adquiridos en instituciones reconocidas y por materia prima de primera. Creemos que todo sale mejor cuando se hace con ganas, y nos encanta lo que hacemos. ¡Te invitamos a compartir ese gusto con nosotros!';
    return (
        <div className='fondo'>
            {
                windowWidth > 1200 ?
                    <ComponenteAmpliado texto={texto} />
                    :
                    <ComponenteReducido texto={texto} />
            }
        </div>
    )
}
