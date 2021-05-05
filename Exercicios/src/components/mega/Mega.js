import React, {Component} from 'react'
import {Text, TextInput} from 'react-native'
import Estilo from '../Estilo'

export default class Mega extends React.Component{

    state = {
        qtdeNumeros: this.props.qtdeNumeros
    }

    //primeira solução, mais verbal
    //constructor(props){
    //    super(props)
    //    this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this)
    //}

    // usado na primeria e segunda solução
    //alterarQtdeNumero(qtde){
    //    this.setState({ qtdeNumeros:qtde })
    //}

    // usado na terceira solução
    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: qtde })
    }

    render(){
        return(
            <>
                <Text style = {Estilo.txtG}>
                    Gerador de Mega-Sena 
                    {this.state.qtdeNumeros}
                </Text>
                <TextInput
                    keyboardType = {'numeric'}
                    style = {{borderBottomWidth: 1}}
                    placeholder = "Quantidade  de Números"
                    value = {this.state.qtdeNumeros}
                    //terceira solução
                    onChangeText = {this.alterarQtdeNumero}
                    //segunda solução
                    //onChangeText = {qtde=>this.alterarQtdeNumero(qtde)}
                />
            </>
        )
    }
}