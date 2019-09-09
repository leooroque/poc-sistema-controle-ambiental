import React, { useState } from 'react';
import { Container, Col, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Bemvindo.css';

export default function Bemvindo(){

    return(
    <div>
        <Container>
            <Row>
                <Col>
                 <h2 className='titulo-bemvindo'> Bem-vindo ao sistema de controle ambinetal, para iniciar realize o LOGIN.</h2>
                 <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }}sm={{ span: 10, offset: 2 }}>
                    <Link to={{ pathname: '/login' }}>
                        <Button className="botaoLogin">LOGIN</Button>
                    </Link>
                 </Col>
                </Col>
            </Row>
        </Container>
    </div>
    )
}