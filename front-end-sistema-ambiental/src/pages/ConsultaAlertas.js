import React,{Component} from 'react';
import { Form, Container,Row, Col, Card, Nav, Accordion } from 'react-bootstrap';
import apiMorador from '../services/apiMorador';
import './ConsultarAlertas.css';


class ConsultaAlertas extends Component{
    constructor(props){
        super(props);
        this.state={
            alertas:[]
        }
    }
    componentDidMount(){
        this.consultaAlertas();
    }

    async consultaAlertas(){
        const response = await apiMorador.get('/consultar/alertas');
        this.setState(prevState => {
            let newState = Object.assign({}, prevState);
            newState.alertas = response.data;
            return newState;
        })
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col lg={{ span: 7, offset: 2 }} md={{ span: 7, offset: 2 }} sm={12} xs={12} className='titulo-cadastro'>
                        <h2> ALERTAS</h2>
                    </Col>
                    <Col lg={12} md={12} sm={12}>
                    <Accordion defaultActiveKey="1">
                        {this.state.alertas.map((content,index) => {
                                return (
                                    <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey={index} className="toggle-faq">
                                        <label>{content.titulo}</label>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={index}>
                                        <Card.Body className="toggle-faq-body">{content.descricao}</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                       )    
                            })}
                    </Accordion>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default ConsultaAlertas;