import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState<string>("");
  const ageAsNumber: number = isNaN(Number(age)) === true ? 0 : Number(age);
  const lower = (220 - ageAsNumber) * 0.65;
  const upper = (220 - ageAsNumber) * 0.85;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age:</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Age"
        keyboardType="numeric"
        onChangeText={setAge}
      />
      <Text> Lower limit:
        {lower.toFixed(0)} bpm
      </Text>
      <Text> Upper limit:  
        {upper.toFixed(0)} bpm  
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efebed',
    paddingTop: 70,
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  TextInput: {
    width: 100,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
});
