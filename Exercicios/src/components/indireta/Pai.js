import React, {useState} from 'react'
import { Text } from 'react-native'
import Estilo from '../estilo'
import Filho from './Filho'

export default props => {
    const [texto, setTexto] = useState('')
    const [num, setUm] = useState(0)

    function exibirValor(texto, numero){
        setTexto(texto)
        setUm(numero)
    }

    return (
        <>
        <Text style={Estilo.txtG}>
            {texto}{num}
        </Text>

        <Filho 
            min = {1}
            max = {60}
            funcao={exibirValor}
        />
        </>
    )
}