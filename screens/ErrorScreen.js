import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ErrorScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ErrorScreen Screen</Text>
      <Button
        title="Go to sign up"
        onPress={() => {
          props.navigation.navigate("SignUp");
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
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
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
