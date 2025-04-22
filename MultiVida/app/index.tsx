import { useRouter } from 'expo-router';
import React, { useState } from "react";
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function PagInicial() {

  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    console.log('Dados cadastrados:', { nome, email, senha });
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');

    setNome('');
    setEmail('');
    setSenha('');
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Bem-vindo ao MultiVida 💙</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={handleCadastro} />
      </View>


      <View style={styles.image}>
        <Image source={require('../assets/saude1.png')} style={{ width: 200, height: 150, marginVertical: 10 }} />
        <Image source={require('../assets/saude2.png')} style={{ width: 200, height: 150, marginVertical: 10 }} />
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
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
})