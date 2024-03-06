import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Prazer eu sou Teteu, sou o seu Papai Noel</Text>
      <Text>Seu presente é piroca e ela caiu do céu</Text>
      <Text>Cinquenta porcento açucar</Text>
      <Text>Cinquenta porcento mel</Text>
      <Text>Dingo bell, Dingo bell, Dingo bell</Text>
      <Text>Passou a noite comigo viu que Teteu</Text>
      <Text>Cinquenta porcento açucar</Text>
      <Text>Cinquenta porcento mel</Text>
      <Text>Seu presente é piroca e ela caiu do céu</Text>

      <Text>============================</Text>

      <Text>Na hora que me escutar</Text>
      <Text>Vai ver que isso não é drama</Text>
      <Text>Precisa raciocinar</Text>
      <Text>Que beijo não resume em transa</Text>
      <Text>Mas quem sou eu, se quiser vir pra cá</Text>
      <Text>Vou me contradizer e não aguentar</Text>
      <Text>Fiz essa letra pra te incentivar</Text>
      <Text>Mas se você mudar, vai fazer falta</Text>
      <Text>Se teu hobby é sentar, não vou te criticar</Text>
      <Text>Tá de parabéns, parabéns</Text>
      <Text>Mas preciso de você pro rolê valer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
