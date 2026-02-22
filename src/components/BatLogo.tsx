// ==============================
// File: components/BatLogo/BatLogo.tsx
// ==============================

import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from './BatLogoStyles';
import batLogo from '../../assets/bat-logo-3.png'

export function BatLogo() {
    return (
        <View>
            <Text style={styles.title}>
                BAT PASS SIGNAL
            </Text>
            <Image
                source={batLogo}
                style={{
                    resizeMode:'contain',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height:150
                }}
            />
        </View>
    )
}