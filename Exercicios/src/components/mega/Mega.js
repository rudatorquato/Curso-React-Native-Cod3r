import React, {Component} from 'react'
import {Button, Text, TextInput} from 'react-native'
import Estilo from '../Estilo'

export default class Mega extends React.Component{

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros:[]
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
        this.setState({ qtdeNumeros: +qtde})
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.qtdeNumeros)
            .fill()
            .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
            .sort((a,b) => a - b) 
        this.setState({ numeros })
    }

    //gerarNumeros = () => {
    //    const { qtdeNumeros } = this.state
    //    const numeros = []
    //    
    //    for(let i = 0; i < qtdeNumeros; i++){
    //        const n = this.gerarNumeroNaoContido(numeros)
    //        numeros.push(n)
    //    }
    //    numeros.sort((a,  b) => a - b)
    //
    //    this.setState({ numeros })
    //}

    render(){
        return(
            <>
                <Text style = {Estilo.txtG}>
                    Gerador de Mega-Sena 
                    
                </Text>
                <TextInput
                    keyboardType = {'numeric'}
                    style = {{borderBottomWidth: 1}}
                    placeholder = "Quantidade  de Números"
                    value = {`${this.state.qtdeNumeros}`}
                    //terceira solução
                    onChangeText = {this.alterarQtdeNumero}
                    //segunda solução
                    //onChangeText = {qtde=>this.alterarQtdeNumero(qtde)}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <Text>
                    {this.state.numeros.join(',')}
                </Text>
            </>
        )
    }
}