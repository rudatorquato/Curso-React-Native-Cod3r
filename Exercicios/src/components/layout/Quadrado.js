import React from 'react'
import {View} from 'react-native'

export default props => {
    const lado = 35
    return(
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.color || '#000'
        }}/>
        
    )
}