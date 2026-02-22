// ==============================
// File: components/BatForm/BatForm.tsx
// ==============================

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import { styles } from './BatFormStyles';

type BatFormProps = {
    onSubmit: () => void;
    onBack: () => void;
};

export function BatForm({ onSubmit, onBack} : BatFormProps) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [obs, setObs] = useState("");

    return (
        <View>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.field}
                placeholder='Digite seu nome'
                value={name}
                onChangeText={setName}
            />
          
            <Text style={styles.label}>Telefone de Contato:</Text>
            <TextInput
                style={styles.field}
                placeholder='Digite seu telefone de contato'
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
            />

            <Text style={styles.label}>Localização Atual:</Text>
            <TextInput
                style={styles.field}
                placeholder='Digite sua localização atual'
                value={location}
                onChangeText={setLocation}
            />        
    
            <Text style={styles.label}>Observação:</Text>
            <TextInput
                style={styles.field}
                placeholder='Observações'
                value={obs}
                onChangeText={setObs}
                multiline
            />

            <Pressable style={styles.field} onPress={onSubmit}>
                <Text style={styles.label}>ENVIAR BATSINAL</Text>
            </Pressable>

            <Pressable style={styles.field} onPress={onBack}>
                <Text style={styles.label}>VOLTAR</Text>
            </Pressable>
                
        </View>
    );
}