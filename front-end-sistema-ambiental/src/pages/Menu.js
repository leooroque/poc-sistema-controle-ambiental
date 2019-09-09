import React,{Component} from 'react';
import { Form, Container, Navbar, Nav, Button } from 'react-bootstrap';
import { reactLocalStorage } from 'reactjs-localstorage';
import './Menu.css';


class Menu extends Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
        <nav >
        <Navbar bg="dark" expand="lg" className="nav-master">
          <Container>
            <Navbar.Brand href="/">
              <h2>SICA</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              {reactLocalStorage.get('perfil', undefined) == 1 ? 
              <Nav bg="dark" className="nav-header">
                <Form inline>
                    <Button variant="outline-light" style={{marginLeft:"10px"}} onClick={this.props.setPageDefault.bind(this,1)}>CADASTRAR ATIVOS</Button>
                </Form>
                <Form inline>
                    <Button variant="outline-light" style={{marginLeft:"10px"}} onClick={this.props.setPageDefault.bind(this,2)}>CONSULTAR ATIVOS</Button>
                </Form>
              </Nav>
              :
              <Nav bg="dark" className="nav-header">
                <Form inline>
                    <Button variant="outline-light" style={{marginLeft:"10px"}} onClick={this.props.setPageDefault.bind(this,3)}>CONSULTAR MANUAIS</Button>
                </Form>
                <Form inline>
                    <Button variant="outline-light" style={{marginLeft:"10px"}} onClick={this.props.setPageDefault.bind(this,4)}>CONSULTAR ALERTAS</Button>
                </Form>
              </Nav>
              }
              <Nav className="mr-auto" />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    )
  }
}

export default Menu;