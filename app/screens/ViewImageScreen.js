import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode="contain" style={styles.imageView} source={require("../assets/youngplanet_celebrate.jpg")} />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#fc5c65",
        position: "absolute",
        top: 40,
        right: 40
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#4ecdc4",
        position: "absolute",
        top: 40,
        left: 40
    },
    container: {
        backgroundColor: "#000", 
        flex: 1
    },
    imageView: {
        width: "100%",
        height: "100%"
    }
})

export default ViewImageScreen