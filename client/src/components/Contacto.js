import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Form, FormGroup, Col, Input, Label, FormText, Button } from 'reactstrap';

const Componente = () => {
    return (
        <div>
            <Form className='text-white formulario'>
                <br></br>
                <br></br>
                <br></br>
                <FormGroup row>
                    <Label
                        for="exampleEmail"
                        sm={2}
                    >
                        Mail
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="ejemplo@ejemplo.com"
                            type="email"
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="exampleEmail"
                        sm={2}
                    >
                        ¿Cómo supiste de nosotros?
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="checkbox2"
                            type="checkbox"
                        />
                        {' '}
                        <Label check>
                            Check me out
                        </Label>
                    </Col>
                    <Col sm={10}>

                        <Input
                            id="checkbox2"
                            type="checkbox"
                        />
                        {' '}
                        <Label check>
                            Check me out
                        </Label>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Label
                        for="exampleText"
                        sm={2}
                    >
                    </Label>
                    <Col sm={10}>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                        />
                    </Col>
                </FormGroup>
                <FormGroup
                    check
                    row
                >
                    <Col
                        sm={{
                            offset: 2,
                            size: 10
                        }}
                    >
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

export const Contacto = () => {
    return (
        <div>
            <Componente />
        </div>
    )
}
