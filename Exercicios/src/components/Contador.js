import React, {useState} from 'react'
import {Text, Button } from 'react-native'
import Estilo from './estilo'

export default props => {
    //let numero = props.inicial

    const [numero, setNumero] = useState(props.inicial)

    const inc = () => { 
        setNumero(numero + 1)
        //console.warn(numero)
    }
    const dec = () => setNumero(numero - 1)

    const inc10 = () => setNumero(numero + props.passo)

    const dec10 = () => setNumero(numero -  props.passo)

    const res = () => setNumero(props.inicial)

    return (
        
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc}/>
            <Button title="-" onPress={dec}/>
            <Button title="+ de 10 em 10" onPress={inc10}/>
            <Button title="- de 10 em 10" onPress={dec10}/>
            <Button title="Resetar" onPress={res}/>
        </>
    )
}