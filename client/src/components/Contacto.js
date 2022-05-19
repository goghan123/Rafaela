import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import { Form, FormGroup, Col, Input, Label, Button } from 'reactstrap';
import { useResponsiveTools } from '../elements/someFunctions.js';
import { RedesSociales } from './RedesSociales.js';


const ComponenteAmpliado = () => {
    return (
        <div>
            <FormGroup row>
                <Label
                    for="mailLabelOne"
                    sm={3}>
                    Mail
                </Label>
                <Col sm={9}>
                    <Input
                        id="exampleEmailOne"
                        name="email"
                        placeholder="ejemplo@ejemplo.com"
                        type="email" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label
                    for="meetLabelOne"
                    sm={3}>
                    ¿Cómo supiste de nosotros?
                </Label>
                <Col sm={9}>
                    <Input
                        name='como-nos-conociste'
                        type='text'
                        placeholder="Por ejemplo, Instagram"
                    ></Input>
                </Col>
            </FormGroup>
        </div>
    )
}

const ComponenteReducido = () => {
    return (
        <div>
            <Label
                for="mailLabelTwo">
                Mail
            </Label>
            <Col>
                <Input
                    id="exampleEmailTwo"
                    name="email"
                    placeholder="ejemplo@ejemplo.com"
                    type="email" />
            </Col>
            <br></br>
            <Label
                for="meetLabelTwo">
                ¿Cómo supiste de nosotros? (Opcional)
            </Label>
            <Col>
                <Input
                    name='como-nos-conociste'
                    type='text'
                    placeholder="Por ejemplo, Instagram"
                ></Input>
            </Col>
            <br></br>
            <br></br>
        </div>
    )
}

export const Contacto = () => {
    const { windowWidth } = useResponsiveTools();
    return (
        <div className='fondo'>
            <br></br>
            <br></br>
            <br></br>
            <Form
                action='https://formsubmit.co/e3a47b2b016d1e06ce6ec0df5e6908d2'
                method='POST'
                className='text-white formulario margenes'>
                {
                    windowWidth >= 860 ?
                        <ComponenteAmpliado />
                        :
                        <ComponenteReducido />
                }
                <FormGroup row>
                    <Col sm={12}>
                        <Input
                            id="exampleText"
                            name="text"
                            type="text"
                            placeholder='Mensaje' />
                    </Col>
                </FormGroup>
                <FormGroup
                    row>
                    <Col
                        sm={2}
                        className='orientacion-izquierda'>
                        <Button type='submit'>
                            Enviar
                        </Button>
                    </Col>
                </FormGroup>
                <br></br>
            </Form>
            <RedesSociales />
        </div>
    )
}
