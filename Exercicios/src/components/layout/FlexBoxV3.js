import React from 'react'
import {View, StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return(
        <View style={style.FlexV3}>
            <Quadrado color='#50d1f6' lado={20}/>
            <Quadrado color='#ff801a' lado={30}/>
            <Quadrado color='#dd22c1' lado={40}/>
            <Quadrado color='#8312ed' lado={50}/>
            <Quadrado color='#36c9a7' lado={60}/>

        </View>
    )
}

const style = StyleSheet.create({
    FlexV3:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        height: 350,
        width:'100%',
        backgroundColor: "#000"
    }
})