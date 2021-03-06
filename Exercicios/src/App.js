import React from 'react'
import {  StyleSheet, SafeAreaView } from 'react-native'
  
import Mega from './components/mega/Mega'
//import FlecBoxV4 from './components/layout/FlexBoxV4'
//import FlecBoxV3 from './components/layout/FlexBoxV3'
//import FlecBoxV2 from './components/layout/FlexBoxV2'
//import FlecBoxV1 from './components/layout/FlexBoxV1'
//import Quadrado from './components/layout/Quadrado'
//import DigiteSeuNome from './components/DigiteSeuNome'
//import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
//import ListaProdutos from './components/produtos/ListaProdutos'
//import UsuarioLogado from  './components/UsuarioLogado'
//import Familia from './components/relacao/Familia'
//import Membro from './components/relacao/MembroFamilia'
//import ParImpar from './components/ParImpar'
//import Diferenciar from './components/Diferenciar'
//import ContadorV2 from './components/contador/ContadorV2'
//import Pai from './components/indireta/Pai'
//import Pai from './components/direta/Pai'
//import Contador from './components/Contador'
//import Botao from './components/Botao'
//import Titulo from './components/Titulo'
//import Aleatorio from './components/Aleatorio'
//import MinMax from './components/MinMax'
//import CompPadrao ,{ Comp1, Comp2 } from './components/Multi'
//import Primeiro from './components/Primeiro'

export default () => (
    <SafeAreaView style={style.App}>

        <Mega qtdeNumeros={7} />
        {/*
        <FlecBoxV4/>
        <FlecBoxV3/>
        <FlecBoxV2/>
        <FlecBoxV1/>
        <Quadrado />
        <Quadrado color='#900'/>
        <Quadrado color='#090'/>
        <Quadrado color='#009'/>
        
        <DigiteSeuNome />
        <ListaProdutosV2 />
        <ListaProdutos />
        <UsuarioLogado usuario={{ nome: 'Torquato', email: 'teste@teste.com' }} />
        <UsuarioLogado usuario={{ nome: 'Ana' }} />
        <UsuarioLogado usuario={{ email: 'carlos@empresa.com' }} />
        <Familia>
            <Membro nome="Luke " sobrenome="Skywalker"/>
            <Membro nome="Leia " sobrenome="Organa"/>
        </Familia>
        <ParImpar num={3}/>
        <Diferenciar />
        <ContadorV2 />
        <Pai/>
        <Pai/>
        <Contador inicial={100} passo={10}/>
        <Botao/>
        <Titulo principal="Cadastro Produto"
                secundario="Tela de Cadastro do Produto"
        />
        <Aleatorio min={1} max={50} />
        <MinMax min="3" max="20" />
        <MinMax min={3} max={20} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro />
        */}
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
})