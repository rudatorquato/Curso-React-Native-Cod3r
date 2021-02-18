import React, { useState } from 'react'
import { TextInput, View, Text} from 'react-native'

export default props => {
    const [nome, setNome] = useState('Nome:')
    return (
            <View >
                <Text>{nome}</Text>
                <TextInput 
                    placeholder="Digite seu Nome"
                    value={null}
                    onChangeText={nome => setNome(nome)}
                />
            </View>
    )
}