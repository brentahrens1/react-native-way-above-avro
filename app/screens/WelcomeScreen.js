import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'

function WelcomeScreen() {
    return (
            <ImageBackground 
                style={styles.background}
                source={require("../assets/planer.jpg")}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require("../assets/planet.png")} />
                        <Text style={styles.logoText}>Way Above Avro</Text>
                    </View>
                    <View style={styles.loginBtn}></View>
                    <View style={styles.registerBtn}></View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginBtn: {
        width: "100%",
        height: 70,
        backgroundColor: '#fc5c65'
    },
    registerBtn: {
        width: "100%",
        height: 70,
        backgroundColor: '#4ecdc4'
    },
    logo: {
        width: 80,
        height: 80,
    },
    logoContainer: {
        position: "absolute",
        top: 60,
        alignItems: "center"
    },
    logoText: {
        color: "#fff",
        fontSize: 30,
        marginTop: 5,
        textTransform: "uppercase",
        fontWeight: "700"
    }

})

export default WelcomeScreen