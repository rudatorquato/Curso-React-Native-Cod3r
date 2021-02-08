import React from 'react'
import {  StyleSheet, SafeAreaView } from 'react-native'

import Familia from './components/relacao/Familia'
import Membro from './components/relacao/MembroFamilia'
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
        <Familia>
            <Membro nome="Luke " sobrenome="Skywalker"/>
            <Membro nome="Leia " sobrenome="Organa"/>
        </Familia>
        {/*
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