import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../estilos-todos.css';
import { Form, FormGroup, Col, Input, Label, Button } from 'reactstrap';
import { useResponsiveTools } from '../elements/someFunctions.js';


const ComponenteAmpliado = () => {
    const { windowWidth } = useResponsiveTools();
    return (
        <div>
            <FormGroup row>
                <Label
                    for="exampleEmail"
                    sm={3}
                >
                    Mail
                </Label>
                <Col sm={9}>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="ejemplo@ejemplo.com"
                        type="email"
                    />
                </Col>
            </FormGroup>
            <FormGroup row className='centrado'>
                <Label
                    for="exampleEmail"
                    sm={3}
                >
                    ¿Cómo supiste de nosotros? (Opcional)
                </Label>
                <Col>
                    <Input
                        id="checkbox2"
                        type="checkbox"
                    />
                    {' '}
                    {windowWidth > 960 ?
                        <Label check>
                            Amigo o familiar
                        </Label>
                        :
                        <Label check>
                            Alguien
                        </Label>
                    }
                </Col>
                <Col>
                    <Input
                        id="checkbox2"
                        type="checkbox"
                    />
                    {' '}
                    <Label check>
                        Instagram
                    </Label>
                </Col>
                <Col>
                    <Input
                        id="checkbox2"
                        type="checkbox"
                    />
                    {' '}
                    <Label check>
                        Google
                    </Label>
                </Col>
                <Col>
                    <Input
                        id="checkbox2"
                        type="checkbox"
                    />
                    {' '}
                    {windowWidth > 960 ?
                        <Label check>
                            Meta (Facebook)
                        </Label>
                        :
                        <Label check>
                            Meta
                        </Label>
                    }
                </Col>
            </FormGroup>
            <FormGroup row className='orientacion-izquierda-2'>
                <Label
                    for="exampleEmail"
                    sm={3}
                >
                </Label>
                <Col>
                    <Input
                        id="checkbox2"
                        type="checkbox"
                    />
                    {' '}
                    <Label check>
                        Diario
                    </Label>
                </Col>
                <Col>
                    <Input
                        id="checkbox2"
                        type="checkbox"
                    />
                    {' '}
                    <Label check>
                        Revista
                    </Label>
                </Col>
                <Col>
                    <Input
                        id="checkbox2"
                        type="checkbox"
                    />
                    {' '}
                    <Label check>
                        Radio
                    </Label>
                </Col>
                <Col className='pegado-derecha'>
                    <Input
                        id="checkbox2"
                        type="checkbox"
                    />
                    {' '}
                    <Label check className='pegado-derecha'>
                        Otro:
                    </Label>
                </Col>
                <Col sm='3'>
                    <Input></Input>
                </Col>
            </FormGroup>
        </div>
    )
}

const ComponenteReducido = () => {
    return (
        <div>
            <Label
                for="exampleEmail"
            >
                Mail
            </Label>
            <Col>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="ejemplo@ejemplo.com"
                    type="email"
                />
            </Col>
            <br></br>
            <Label
                for="exampleEmail"
            >
                ¿Cómo supiste de nosotros? (Opcional)
            </Label>
            <Col>
                <Input
                    id="checkbox2"
                    type="checkbox"
                />
                {' '}
                <Label check>
                    Amigo o familiar
                </Label>
            </Col>
            <Col>
                <Input
                    id="checkbox2"
                    type="checkbox"
                />
                {' '}
                <Label check>
                    Instagram
                </Label>
            </Col>
            <Col>
                <Input
                    id="checkbox2"
                    type="checkbox"
                />
                {' '}
                <Label check>
                    Google
                </Label>
            </Col>
            <Col>
                <Input
                    id="checkbox2"
                    type="checkbox"
                />
                {' '}
                <Label check>
                    Meta
                </Label>
            </Col>
            <Col>
                <Input
                    id="checkbox2"
                    type="checkbox"
                />
                {' '}
                <Label check>
                    Otro:
                </Label>
            </Col>
            <Col>
                <Input></Input>
            </Col>
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
            <Form className='text-white formulario margenes'>
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
                            type="textarea"
                            placeholder='Mensaje'
                        />
                    </Col>
                </FormGroup>
                <FormGroup
                    row
                >
                    <Col
                        sm={2}
                        className='orientacion-izquierda'>
                        <Button>
                            Enviar
                        </Button>
                    </Col>
                </FormGroup>
                <br></br>
            </Form>
        </div>
    )
}
