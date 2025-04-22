import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Image, Linking } from 'react-native';

export default function Ajuda() {
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(true);

  const buscarMensagem = async () => {
    setCarregando(true);
    try {
      const resposta = await fetch('https://api.adviceslip.com/advice');
      const json = await resposta.json();
      setMensagem(json.slip.advice);
    } catch (erro) {
      setMensagem('Erro ao buscar mensagem. Tente novamente.');
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarMensagem();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🌟 Mensagem Motivacional 🌟</Text>
      <Image
        source={require('../assets/motivacao.jpg')}
        style={styles.imagem}
      />

      <Image
        source={require('../assets/motivacao2.jpg')}
        style={styles.imagem}
      />

      {carregando ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <Text style={styles.mensagem}>{mensagem}</Text>
      )}
      <TouchableOpacity style={styles.botao} onPress={buscarMensagem}>
        <Text style={styles.botaoTexto}>Nova Mensagem</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.botao, { backgroundColor: '#28a745', marginTop: 10 }]}
        onPress={() => Linking.openURL('https://cvv.org.br/')}
      >
        <Text style={styles.botaoTexto}>Precisa de ajuda? Acesse o CVV 💬</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6F6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007BFF',
  },
  mensagem: {
    fontSize: 20,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
    marginVertical: 30,
    paddingHorizontal: 10,
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  botao: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 18,
  },
});
