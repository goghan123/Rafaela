import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles.css';
import { Form, FormGroup, Col, Input, Label, Button } from 'reactstrap';
import { useResponsiveTools } from '../elements/someFunctions.js';
import { SocialNetworks } from './SocialNetworks.js';


const LargerComponent = () => {
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
                        placeholder="example@example.com"
                        type="email" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label
                    for="meetLabelOne"
                    sm={3}>
                    How did you know about us?
                </Label>
                <Col sm={9}>
                    <Input
                        name='como-nos-conociste'
                        type='text'
                        placeholder="For example, Instagram"
                    ></Input>
                </Col>
            </FormGroup>
        </div>
    )
}

const ReducedComponent = () => {
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
                    placeholder="example@example.com"
                    type="email" />
            </Col>
            <br></br>
            <Label
                for="meetLabelTwo">
                How did you know about us? (Optional)
            </Label>
            <Col>
                <Input
                    name='how-did-you-know-us'
                    type='text'
                    placeholder="For example, Instagram"
                ></Input>
            </Col>
            <br></br>
            <br></br>
        </div>
    )
}

export const Contact = () => {
    const { windowWidth } = useResponsiveTools();
    return (
        <div className='background'>
            <div className='margins-for-contact'>
                <br></br>
                <br></br>
                <br></br>
                <Form
                    action='https://formsubmit.co/e3a47b2b016d1e06ce6ec0df5e6908d2'
                    method='POST'
                    className='text-white custom-form margins'>
                    {
                        windowWidth >= 860 ?
                            <LargerComponent />
                            :
                            <ReducedComponent />
                    }
                    <FormGroup row>
                        <Col sm={12}>
                            <Input
                                id="exampleText"
                                name="text"
                                type="text"
                                placeholder='Message' />
                        </Col>
                    </FormGroup>
                    <FormGroup
                        row>
                        <Col
                            sm={2}
                            className='left-oriented'>
                            <Button type='submit'>
                                Send
                            </Button>
                        </Col>
                    </FormGroup>
                    <br></br>
                </Form>
                <SocialNetworks />
            </div>
        </div >
    )
}
