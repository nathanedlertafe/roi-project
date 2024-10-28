import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button
        title="Go to sign up"
        onPress={() => {
          props.navigation.navigate("SignUp");
        }}
      />
      <Button
        title="Go to error"
        onPress={() => {
          props.navigation.navigate("Error");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffa",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
