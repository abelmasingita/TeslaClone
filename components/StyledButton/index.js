import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './Styles'

const  StyledButton = ({type,onPress,content}) => {

    const backgroundcolor = type ==='primary'? '#171A20CC' : '#FFFFFFA6'; 
    const textcolor = type ==='primary'? '#FFFFFF' : '#171A20'; 

    return (
        <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: backgroundcolor} ]}
                onPress={onPress}>
                    <Text style={[styles.text,{color:textcolor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}
export default  StyledButton
 