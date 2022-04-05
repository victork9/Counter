import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

export default function App() {
  const [state, setState] = useState(2);

  useEffect(() => {
    setState(0);
  }, []);

  function plusCounter() {
    setState((state) => state + 1);
  }

  function minusCounter() {
    setState((state) => state - 1);
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={minusCounter}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            alignItems: "center",
            borderColor: "#dcdcdc",
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              textAlignVertical: "center",
              fontSize: 18,
              justifyContent: "center",
            }}
          >
            -
          </Text>
        </TouchableOpacity>
        <Text style={styles.textCenter}>{state}</Text>
        <TouchableOpacity
          onPress={plusCounter}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            alignItems: "center",
            borderColor: "#dcdcdc",
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 18,
              justifyContent: "center",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textCenter: {
    paddingHorizontal: 20,
    fontSize: 32,
  },
});
