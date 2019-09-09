import React,{Component} from 'react';
import { Form, Container,Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import './Cadastro.css'
import apiAdministrador from '../services/apiAdministrador';
class CadastrorAtivo extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            idconsuta:'',
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
    async excluir(e){
        e.preventDefault();
        const response = await apiAdministrador.get(`/ativo/excluir/${this.state.id}`);
        if(response.status == 200){
            this.setState(prevState => {
                let newState = Object.assign({}, prevState);
                newState.msg='Ativo excluido com sucesso';
                newState.showMsg = true;
                newState.id = '';
                newState.produto = '';
                newState.material = '';
                newState.aplicacao_do_produto = '';
                newState.data_aquisicao = '';
                newState.fabricante = '';
                newState.custo = '';
                newState.observacao = '';
                return newState;
            });
        }
    }

    async atualizar(e){
        e.preventDefault();
        const response = await apiAdministrador.post(`/ativo/atualizar/`,{
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
        if(response.status == 200){
            this.setState(prevState => {
                let newState = Object.assign({}, prevState);
                newState.msg='Ativo atualizado com sucesso';
                newState.showMsg = true;
                newState.id = '';
                newState.produto = '';
                newState.material = '';
                newState.aplicacao_do_produto = '';
                newState.data_aquisicao = '';
                newState.fabricante = '';
                newState.custo = '';
                newState.observacao = '';
                return newState;
            });
        }
    }

    async consultar(e){
        e.preventDefault();
         const response = await apiAdministrador.get(`/ativo/consultar/${this.state.idconsuta}`);
         if(response.data[0]){
            this.setState(prevState => {
                let newState = Object.assign({}, prevState);
                newState.showMsg = false;
                newState.id = response.data[0].id;
                newState.produto = response.data[0].produto;
                newState.material = response.data[0].material;
                newState.aplicacao_do_produto = response.data[0].aplicacao_do_produto;
                newState.data_aquisicao = response.data[0].data_aquisicao;
                newState.fabricante = response.data[0].fabricante;
                newState.custo = response.data[0].custo;
                newState.observacao = response.data[0].observacao;
                return newState;
            })
         } else{
            this.setState(prevState => {
                let newState = Object.assign({}, prevState);
                newState.msg = 'Id nao encontrado';
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
                        <Col lg={12} md={12} sm={12}>
                    <Col lg={{ span: 7, offset: 2 }} md={{ span: 7, offset: 2 }} sm={12} xs={12} className='titulo-cadastro'>
                        <h2> CONSULTA DE ATIVOS</h2>
                    </Col>
                        <Col lg={{ span: 7, offset: 2 }} md={{ span: 7, offset: 2 }} sm={12} xs={12}>
                        <form className='formulario-cadastro' onSubmit={this.consultar.bind(this)} style={{textAlign:'center'}}>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Digite o id do ativo'
                                    value={this.state.idconsuta}
                                    onChange={this.atualizarInfo.bind(this,'idconsuta')}/>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <Button  type='submit'>CONSULTAR</Button>
                                </Col>
                        </form>
                        </Col>
                        <div className='formulario-cadastro'>
                        <Col lg={12} md={12} sm={12} xs={12} >
                                
                                    {(this.state.showMsg)? <span className='msg-retorno'>{this.state.msg}</span> : <div></div>}
                                
                                <input placeholder = 'Digite o id do ativo'
                                value={this.state.id}
                                onChange={this.atualizarInfo.bind(this,'id')}/>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Digite o nome do ativo'
                                value={this.state.produto}
                                onChange={this.atualizarInfo.bind(this,'produto')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Em que material o ativo será usado ? Ex: Granito'
                                value={this.state.material}
                                onChange={this.atualizarInfo.bind(this,'material')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Qual aaplicacao do ativo ? Ex.: Mineracao'
                                value={this.state.aplicacao_do_produto}
                                onChange={this.atualizarInfo.bind(this,'aplicacao_do_produto')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Data aquisicao do ativo, ex: 2019-09-08'
                                value={this.state.data_aquisicao}
                                onChange={this.atualizarInfo.bind(this,'data_aquisicao')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Fabricante do ativo'
                                value={this.state.fabricante}
                                onChange={this.atualizarInfo.bind(this,'fabricante')}/>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'Custo do ativo'
                                value={this.state.custo}
                                onChange={this.atualizarInfo.bind(this,'custo')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                <input placeholder = 'O ativo tem alguma observação ?'
                                value={this.state.observacao}
                                onChange={this.atualizarInfo.bind(this,'observacao')}
                                />
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <Button  onClick={this.atualizar.bind(this)}>ATUALIZAR</Button>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <Button  onClick={this.excluir.bind(this)}>EXCLUIR</Button>
                                </Col>
                                </div>
                            
                    </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CadastrorAtivo;