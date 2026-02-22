// ==============================
// File: screens/Home/Home.tsx
// ==============================

import React, { useState} from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';


import styles from './HomeStyle';
import { BatButton } from '../../components/BatButton';
import { BatForm } from '../../components/BatForm';

type Screen = "button" | "form" | "success";

export default function Home() {
  const [screen, setScreen] = useState<Screen>("button");

  return (
    <View style={styles.appContainer}>
      {screen === "button" && <BatButton onPress={() => setScreen("form")} />}

      {screen === "form" && (
        <BatForm
          onSubmit={() => setScreen("success")}
          onBack={() => setScreen("button")}
        />
      )}

      {screen === "success" && (
        <View style={localStyles.successContainer}>
          <Text style={localStyles.successText}>Bat Signal Enviado.</Text>

          <Pressable
            style={localStyles.successButton}
            onPress={() => setScreen("button")}
          >
            <Text style={localStyles.successButtonText}>Voltar para Home</Text>
          </Pressable>
        </View>
      )}

    </View>
  );
}

const localStyles = StyleSheet.create({
  successContainer: {
    gap: 16,
    alignItems: "center",
  },
  successText: {
    fontSize: 22,
    fontWeight: "800",
  },
  successButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#111",
  },
  successButtonText: {
    fontSize: 16,
    fontWeight: "700",
  },
})