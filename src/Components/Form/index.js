import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import Resultado from './Resultado';

export default function Form()
{
    const [height, setHeight] = React.useState(null);
    const [weight, setWeight] = React.useState(null);
    const [message, setMessage] = React.useState('Preencha o peso e a altura');
    const [imc, setImc] = React.useState(null);
    const [buttonTitle, setButtonTitle] = React.useState('Calcular');

    function calcularImc()
    {
        return setImc((weight/(height*height)).toFixed(2));
    }

    function validarImc(){
        if(weight != null && height != null){
            calcularImc();
            setMessage('Seu imc é igual: ');
            setButtonTitle('Calcular novamente');
            return;
        }

        setImc(null);
        setButtonTitle('Calcular');
        setMessage('Preencha o peso e a altura');
    }

    return (
    <View>
        <View>
            <Text>Altura: </Text>
            <TextInput 
                placeholder='1.75cm' 
                keyboardType='numeric'
                onChangeText={setHeight}
                value={height}
            />
                
            <Text>Peso: </Text>
            <TextInput 
                placeholder='175kg' 
                keyboardType='numeric'
                onChangeText={setWeight}
                value={weight}
            />

            <Button title={buttonTitle} onPress={() => validarImc()}/>
        </View>

        <Resultado mensagem={message} imc={imc}></Resultado>
    </View>
    );
}