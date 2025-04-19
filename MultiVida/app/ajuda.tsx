import React, { useState } from "react";
import { View, Text, Alert, TextInput, Button, StyleSheet} from "react-native";

export default function Ajuda(){
    const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviar = () => {
    Alert.alert('Mensagem enviada!', `Obrigado, ${nome}!`);
    setNome('');
    setMensagem('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Precisa de ajuda?</Text>
      {/* <Image source={require('../assets/images/ajuda1.png')} style={styles.image} />
      <Image source={require('../assets/images/ajuda2.png')} style={styles.image} /> */}
      <TextInput placeholder="Seu nome" style={styles.input} value={nome} onChangeText={setNome} />
      <TextInput
        placeholder="Como você está se sentindo hoje?"
        style={styles.input}
        multiline
        value={mensagem}
        onChangeText={setMensagem}
      />
      <Button title="Enviar" onPress={enviar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 8 },
  image: { width: 150, height: 100, alignSelf: 'center', marginVertical: 10 },
});
