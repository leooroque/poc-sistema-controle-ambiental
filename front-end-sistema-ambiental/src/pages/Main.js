import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button} from 'react-bootstrap';
import Menu from './Menu';
import CadastroAtivo from './CadastroAtivo';
import Ativos  from './Ativos';
import ConsultaAlertas from './ConsultaAlertas';
import ConsultaManuais from './ConsultaManuais';

export default function Main(){
    const [pageDefault, setPageDefault] = useState('0');

    
    function page(param){
        if(param == 0){
            return <div style={{textAlign:'center',marginTop:'20%',fontSize:'20px'}}>BEM VINDO AO SICA !</div>
        } else if( param == 1){
            return <CadastroAtivo/>;
        } else if (param == 2){
            return <Ativos/>;
        } else if(param == 3){
            return <ConsultaManuais/>;
        } else if(param == 4){
            return <ConsultaAlertas/>;
        }
    }
    return(
    <div>
        <Menu setPageDefault={setPageDefault.bind(this)}/>
        {page(pageDefault)}
    </div>
    )
}