import React, { useState } from "react";
import { View, Text, Alert, TextInput, Button, StyleSheet, TouchableOpacity, Linking} from "react-native";

export default function Integrantes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>INTEGRANTES</Text>

      <View style={styles.item}>
        <Text style={styles.name}>Eduardo do Nascimento Barriviera</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.item}>
        <Text style={styles.name}>Thiago Lima de Freitas</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.item}>
        <Text style={styles.name}>Thiago Thomaz Sales</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  },
  item: {
    marginBottom: 10
  },
  name: {
    fontSize: 20
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 18
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 15
  }
});
