// ==============================
// File: components/BatButton/BatButton.tsx
// ==============================

import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatLogo } from '../components/BatLogo';

type BatButtonProps = {
    onPress: () => void;
}


export function BatButton({ onPress }: BatButtonProps) {
  
    return (
        <View>
            <View>
                <BatLogo/>
            </View>
            
            
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>BAT SINAL</Text>
            </Pressable>

        </View>
        
    


    );
}