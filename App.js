import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.logoArea}>
        <Text style={styles.logoText}>Botujuru</Text>
        <Text style={styles.logoText}>Online</Text>
      </View>

      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>ENTRARR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>CADASTRAR</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.visitanteButton}>
          <Text style={styles.visitanteText}>ENTRAR COMO VISITANTE</Text>
        </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoArea: {
    alignItems: 'center',
    marginBottom: 100,
  },

  logoText: {
    fontSize: 42,
    color: '#3D7A44',
    fontWeight: '300',
  },

  buttonArea: {
    width: '70%',
    gap: 20,
  },

  loginButton: {
    backgroundColor: '#D9D9D9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  registerButton: {
    backgroundColor: '#59B35A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  loginText: {
    color: '#3D7A44',
    fontWeight: 'bold',
  },

  registerText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  visitanteText: {
    color: '#3D7A44',
    fontWeight: 'bold',
    
  
},

  visitanteButton: {
    backgroundColor: '#D9D9D9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    
  },

});