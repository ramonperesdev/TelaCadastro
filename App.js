import React, { Component } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TextInput,
  Picker,
  Switch,
  TouchableOpacity } from 'react-native';

import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 0,
      sexos: [
        { key: 1, nome: 'Indefinido' },
        { key: 2, nome: 'Masculino' },
        { key: 3, nome: 'Feminino' },
      ],
      valor: 0,
      status: false
    };  
    this.pegaNome = this.pegaNome.bind(this);
    this.pegaIdade = this.pegaIdade.bind(this);
    this.mostraDados = this.mostraDados.bind(this);
  } 

  pegaNome(texto) {
    this.setState({
      nome: texto
    });
  }

  pegaIdade(text) {
    this.setState({
      idade: text
    });
  }

  mostraDados() {
    if(this.state.nome === '' || this.state.idade === '') {
      alert ('Dados inválidos, preencha todos os campos.');
      return;
    }

    alert (
      'Nome: ' + this.state.nome + ' \n' +
      'Idade: ' + this.state.idade + ' \n' +
      'Sexo: ' + this.state.sexos[this.state.sexo].nome + ' \n' +
      'Limite Conta: ' + this.state.valor.toFixed(0) + ' \n' +
      'Conta Estudante? ' + ((this.state.status)? 'Sim':'Não')
    );
  }

  render() {
    let sexoItem = this.state.sexos.map( (v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    });

    return( 

      <View style={styles.container} >

        <View style={styles.containerCadastro} >

          <Text style={styles.textoCadastro} >Banco React</Text>
        </View>  

        <TextInput 
          placeholder="Digite seu nome..."
          style={styles.inputText}
          onChangeText={this.pegaNome}
        />
        <TextInput 
          placeholder="Digite sua idade..."
          style={styles.inputText}
          onChangeText={this.pegaIdade}        
        />

        <Picker 
          style={styles.sexo}
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}
        >
          {sexoItem}
        </Picker>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado})}
          value={this.state.valor}
          maximumTrackTintColor="#646869"
          minimumTrackTintColor="green"
        />
        <Text style={styles.textoLimite} >Limite selecionado: {this.state.valor.toFixed(0)} reais</Text>

        <Switch 
          style={styles.switch}
          value={this.state.status} 
          onValueChange={(statusSelecionado) => this.setState({ status: statusSelecionado })}
          thumbColor='#646869'
        />

        <Text style={styles.textoSwitch} >Estudante: {this.state.status ? 'Sim' : 'Não'}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.mostraDados}>
          <View style={styles.btnArea} >
            <Text style={styles.txtBotao} >Cadastrar conta</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  containerCadastro:{
    height: 65,
    backgroundColor: '#646869'
  },  
  textoCadastro: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  inputText: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    height: 40,
    borderColor: '#646869',
    borderWidth: 1,
    textAlign: 'center'
  },
  sexo: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    color: '#646869'
  },
  textoLimite: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
    color: '#646869'
  },
  slider: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
  },
  switch: {
    marginTop: 20,
    marginRight: 180
  },
  textoSwitch: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 18,
    color: '#646869',
    fontWeight: 'bold'
  },
  btnArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBotao: {
    fontSize: 20,
    color: '#646869',
    margin: 10,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 350,
    height: 50,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 80,
    borderWidth: 2,
    borderColor:'#646869',
    borderRadius: 25
  }
});

export default App;