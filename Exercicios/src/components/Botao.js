import React from 'react'
import { Button } from 'react-native'

export default props => {

    function executar(){
        console.warn('Executou 1')
    }

    function executar2(){
        return function(){
            console.warn('Executou 2')
        }
    }

    const executar5 = () => {
        console.warn('Executou 5')
    }

    return (
        <>
        <Button
            title="Executar #01!"
            onPress={executar}
        />

        <Button
            title="Executar #02!"
            onPress={executar2()}
        />

        <Button
            title="Executar #03!"
            onPress={function(){
                console.warn('Executou 3')
            }}
        />

        <Button
            title="Executar #04!"
            onPress={() => console.warn('Executou 4')}
        />

        <Button
            title="Executar #05!"
            onPress={executar5}
        />
        </>
    )
}