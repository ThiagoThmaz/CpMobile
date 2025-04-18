import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

export default function PagInicial() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [genero, setGenero] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página Inicial</Text>

      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        value={idade}
        onChangeText={setIdade}
      />

      <Text style={styles.label}>Gênero:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu gênero"
        value={genero}
        onChangeText={setGenero}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5,
    marginTop: 5,
  },
});
