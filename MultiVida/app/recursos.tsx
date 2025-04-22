import { Link } from "expo-router";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function LinkScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/saude1.png')} style={styles.imagem} />
      <Image source={require('../assets/logofiap.png')} style={styles.imagem} />
      <Text style={styles.title}>Links</Text>
      <View style={styles.link}>
        <Link href="/" asChild>
          <Button title="Ir para tela Inicial" />
        </Link>
      </View>
      <View style={styles.link}>
        <Link href="/ajuda" asChild>
          <Button title="Ir para tela de motivação" />
        </Link>
      </View>
      <View style={styles.link}>
        <Link href="/dicas" asChild>
          <Button title="Ir para tela de dicas" />
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    display: 'flex',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  link: {
    marginVertical: 10,
  },
  imagem: {
    flexDirection: 'row',
    width: 200,
    height: 150,
    marginVertical: 10
  }
});