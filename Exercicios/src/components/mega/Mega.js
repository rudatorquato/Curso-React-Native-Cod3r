import React, {Component} from 'react'
import {Text, TextInput} from 'react-native'
import Estilo from '../Estilo'

export default class Mega extends React.Component{

    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    alterarQtdeNumero(qtde){
        this.setState({ qtdeNumeros:qtde })
    }

    render(){
        return(
            <>
                <Text style = {Estilo.txtG}>
                    Gerador de Mega-Sena 
                    {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    placeholder = "Quantidade  de Números"
                    value = {this.state.qtdeNumeros}
                    onChangeText = {this.alterarQtdeNumero}
                />
            </>
        )
    }
}