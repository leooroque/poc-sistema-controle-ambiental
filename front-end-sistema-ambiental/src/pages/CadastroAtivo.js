import React,{Component} from 'react';
import { Form, Container,Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import './Cadastro.css'
import apiAdministrador from '../services/apiAdministrador';
class CadastrorAtivo extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            id: '',
            produto:'',
            material:'',
            aplicacao_do_produto:'',
            data_aquisicao:'',
            fabricante:'',
            custo:'',
            observacao:'',
            msg:'',
            showMsg:false
        }
    }
    
    atualizarInfo(campo,e){
        var valor = e.target.value;
        this.setState(prevState => {
            let newState = Object.assign({}, prevState);
            newState[campo] = valor;
            return newState;
        })
    }


    async cadastrar(e){
        e.preventDefault();
         const response = await apiAdministrador.post('/ativo/inserir',{
            "ativo":{
                "id": this.state.id,
                "produto":this.state.produto,
                "material":this.state.material,
                "aplicacao_do_produto":this.state.aplicacao_do_produto,
                "data_aquisicao":this.state.data_aquisicao,
                "fabricante":this.state.fabricante,
                "custo":this.state.custo,
                "observacao":this.state.custo
            }
        });
        if(response.status ==200){
                this.setState(prevState => {
                    let newState = Object.assign({}, prevState);
                    newState.msg = 'Ativo cadastrado com sucesso';
                    newState.showMsg = true; 
                    return newState;
                })
        } else{
            this.setState(prevState => {
                let newState = Object.assign({}, prevState);
                newState.msg = 'Seu token expirou volte para a tela de login';
                newState.showMsg = true; 
                return newState;
            })
        }

    }
    render(){
        return(
            <div>
                <Container>
                    <Row>
                    <Col lg={{ span: 7, offset: 2 }} md={{ span: 7, offset: 2 }} sm={12} xs={12} className='titulo-cadastro'>
                        <h2> CADASTRO DE ATIVOS</h2>
                    </Col>
                        <Col lg={{ span: 7, offset: 2 }} md={{ span: 7, offset: 2 }} sm={12} xs={12}>
                        <form className='formulario-cadastro' onSubmit={this.cadastrar.bind(this)} style={{textAlign:'center'}}>
                                <Col lg={12} md={12} sm={12} xs={12} >
                                    {(this.state.showMsg)? <span className='msg-retorno'>{this.state.msg}</span> : <div></div>}
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Digite o id do ativo'
                                value={this.id}
                                onChange={this.atualizarInfo.bind(this,'id')}/>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Digite o nome do ativo'
                                value={this.produto}
                                onChange={this.atualizarInfo.bind(this,'produto')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Em que material o ativo será usado ? Ex: Granito'
                                value={this.material}
                                onChange={this.atualizarInfo.bind(this,'material')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Qual aaplicacao do ativo ? Ex.: Mineracao'
                                value={this.aplicacao_do_produto}
                                onChange={this.atualizarInfo.bind(this,'aplicacao_do_produto')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Data aquisicao do ativo, ex: 2019-09-08'
                                value={this.data_aquisicao}
                                onChange={this.atualizarInfo.bind(this,'data_aquisicao')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Fabricante do ativo'
                                value={this.fabricante}
                                onChange={this.atualizarInfo.bind(this,'fabricante')}/>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Custo do ativo'
                                value={this.custo}
                                onChange={this.atualizarInfo.bind(this,'custo')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'O ativo tem alguma observação ?'
                                value={this.observacao}
                                onChange={this.atualizarInfo.bind(this,'observacao')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <Button  type='submit'>CADASTRAR</Button>
                                </Col>
                                
                        </form>
                        </Col>
                    
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CadastrorAtivo;