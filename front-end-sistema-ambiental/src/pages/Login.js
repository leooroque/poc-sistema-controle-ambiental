import React, { useState } from 'react';
import { Container, Col, Row, Button} from 'react-bootstrap';
import { reactLocalStorage } from 'reactjs-localstorage';
import './Login.css';
import apiAuth from '../services/apiAutenticacao';


export default function Login({history}){
    const [username, setUserName] = useState('');
    const [password, setUserPassword] = useState('');
    const [msg, setmsg] = useState('');
    const [showmsg, setshowmsg] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
         const response = await apiAuth.post('/auth',{
                "usuario":{
                "id": `${username}`,
                "password":`${password}`
            }
        });
         const { token } = response.data;
         const { perfil } = response.data;
         if(token){
            reactLocalStorage.set('token', token);
            reactLocalStorage.set('perfil', perfil);
            history.push('/principal')
         } else {
             setshowmsg(true);
            setmsg('Usuario ou senha invalidos');
         }
         
    }
    
    return (
        <Container >
            <Row>
                <Col lg={{ span: 8, offset: 2 }} md={{ span: 8, offset: 2 }}sm={{ span: 10, offset: 2 }}>
                    <h2 className="titulo">SISTEMA DE CONTROLE AMBIENTAL</h2>
                </Col>
                <Col lg={{ span: 8, offset: 3 }} md={{ span: 8, offset: 3 }}sm={{ span: 10, offset: 2 }} className='login-container'>
                    <form onSubmit={handleSubmit}>
                        <Col lg={{ span: 7, offset: 1 }} md={{ span: 7, offset: 1 }} sm={12} xs={12}>
                        <input
                            placeholder='Digite o nome do usuário'
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            
                        />
                        </Col>
                        <Col lg={{ span: 7, offset: 1 }} md={{ span: 7, offset: 1 }} sm={12} xs={12}>
                        <input
                            placeholder='Digite sua senha'
                            type="password"
                            value={password}
                            onChange={(e) => setUserPassword(e.target.value)}
                            lg={12} md={12} sm={12}
                        />
                        </Col>
                        <Col lg={{ span: 7, offset: 1 }} md={{ span: 7, offset: 1 }} sm={12} xs={12}>
                            <Button  type='submit' >Entrar</Button>
                        </Col>
                        <Col lg={{ span: 7, offset: 1 }} md={{ span: 7, offset: 1 }} sm={12} xs={12}>
                        {(showmsg)? <span className='msg-retorno'>{msg}</span> : <div></div>}
                        </Col>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}