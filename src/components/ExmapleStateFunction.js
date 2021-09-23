import React, {useState} from 'react';
import { Button, View, StyleSheet, Text} from 'react-native';

export default function ExampleStateFunction(){
    const [count, setCount] = useState(0);

    const handlePress = () => {
        setCount(previousCount => previousCount + 1)
        setCount(previousCount => previousCount + 1)
    };

    return (
        <View style = {styles.container}>
            <View style={styles.containerButton}>
                <Button title="Press me!" onPress={() => {
                    console.log("You pressed")
                    console.log(count)
                    handlePress
                }} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.textStyle}>
                    You have pressed: {count} time(s).
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerButton:{
        flex: 5,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3
    },
    containerText: {
        flex: 5
    },
    textStyle: {
        fontSize: 20,
        color: 'red',
        fontStyle: 'italic'
    }
})