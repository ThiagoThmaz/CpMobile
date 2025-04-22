import React, { useState } from "react";
import { View, Text, Alert, TextInput, Button, StyleSheet, Image, ScrollView} from "react-native";
import { useRouter } from 'expo-router';

export default function PagInicial(){

    const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bem-vindo ao MultiVida 💙</Text>

      <View style={styles.image}>
        <Image source={require('../assets/saude1.png')} style={{width: 200, height: 150, marginVertical: 10}} />
        <Image source={require('../assets/saude2.png')} style={{width: 200, height: 150, marginVertical: 10}} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Dicas" onPress={() => router.push('/dicas')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Motivação" onPress={() => router.push('/ajuda')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Recursos" onPress={() => router.push('/recursos')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Sobre os Desenvolvedores" onPress={() => router.push('/sobre/')} />
      </View>
    </ScrollView>
  );
}
    
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white' // #3A59D1
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 20
    },
    image: {
        
        flexDirection: 'row'
    },
    buttonContainer: {
        marginVertical: 5,
        width: '80%'
    }
  })