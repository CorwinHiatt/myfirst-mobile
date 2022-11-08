import React from "react";
import {Text, StyleSheet} from 'react-native'

export default function Welcome({firstName}) {
    return(
        <Text style={style.largerText}>Welcome {firstName}!</Text>
    )
}
const style = StyleSheet.create({
    largerText: {
        fontSize:36,
        fontWeight:'800',
        color:'orange'
    }
})