import { Link } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function LinkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Links</Text>
      <View style={styles.link}>
        <Link href="/index" asChild>
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
});