import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default props => {
    return(
    <View style={style.Botoes}>
         <Button title="-" onPress={props.dec}/>
        <Button title="Resetar" onPress={props.reset}/>
        <Button title="+" onPress={props.inc}/>
    </View>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: "row"
    }
})