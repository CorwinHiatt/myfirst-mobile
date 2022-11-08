import React, {useState} from "react";
import { Button, Text, StyleSheet } from "react-native";




export default function Counter(){
    const [count, setCount] = useState(0)
    return(
        <>
            <Text style= {style.medText}>Counter: {count}</Text>
            <Button  
            onPress={() => setCount(count + 1)}
            title={'Count +1'}
            color='silver'
            accessibilityLabel="count +1"
            
            />
        </>
    )
}

const style = StyleSheet.create({
    medText: {
        fontSize:24,
        margin:16
    }
})