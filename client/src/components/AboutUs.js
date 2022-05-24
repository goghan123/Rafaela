import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'reactstrap';
import '../styles.css';
import cheffImage from '../elements/images/chocolate_cheff.jpg';
import { useResponsiveTools } from '../elements/someFunctions.js';
import { SocialNetworks } from './SocialNetworks.js';


const ExpandedComponent = (props) => {
    const { windowWidth, windowHeight } = useResponsiveTools();
    return (
        <div className='App-header margins'>
            {
                windowHeight < 500 &&
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            }
            <div className='container-fluid' key='aboutUs'>
                <Row height='400px'>
                    <Col className=''>
                        {
                            windowWidth < 1300 ?
                                <h5 className=''>
                                    {props.text}
                                </h5>
                                :
                                <h4 className=''>
                                    {props.text}
                                </h4>
                        }
                    </Col>
                    <Col className='' sm={1}>
                    </Col>
                    <Col className='centered' sm={6}>
                        <div className='centered-image'>
                            <img
                                className='medium-image'
                                src={cheffImage}
                                alt='cheff'>
                            </img>
                        </div>
                    </Col>
                </Row>
                {
                    windowHeight < 500 && <br></br>
                }
            </div >
        </div >
    )
}

const ReducedComponent = (props) => {
    const { windowHeight } = useResponsiveTools();
    return (
        <div className='App-header margins'>
            {
                windowHeight < 500 && <br></br>
            }
            {
                windowHeight < 768 &&
                <div>
                    <br></br>
                    <br></br>
                </div>
            }
            <div className='container-fluid' key='aboutUs'>
                <h4>
                    {props.text}
                </h4>
                <br></br>
                <img className='broad-image' src={cheffImage} alt='cheff'></img>
            </div>
            {
                windowHeight < 500 && <br></br>
            }
        </div >
    )
}

export const AboutUs = () => {
    const { windowWidth } = useResponsiveTools();
    const text = 'We are an artisan and familiar chocolate shop with many years in different fields of gastronomy. Our handcrafts are supported with the know-how acquired by recognized institutions and by raw materials of first class. We believe that everything goes better when it is made with passion, and we really love what we do. We invite you to share the taste with us!';
    return (
        <div className='background'>
            {
                windowWidth > 1200 ?
                    <ExpandedComponent text={text} />
                    :
                    <ReducedComponent text={text} />
            }
            <SocialNetworks />
        </div>
    )
}
