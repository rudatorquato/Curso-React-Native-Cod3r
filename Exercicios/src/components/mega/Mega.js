import React, {Component} from 'react'
import {Text} from 'react-native'
import Estilo from '../Estilo'

export default class Mega extends React.Component{

    render(){
        return(
            <Text style={Estilo.txtG}>
                Gerador de Mega-Sena
            </Text>
        )
    }
}