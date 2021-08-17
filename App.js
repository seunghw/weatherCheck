import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";

export default function App() {
  return (
    <View
      style={[t.flex1, t.bgBlue400, t.itemsCenter, t.justifyCenter, t.flexRow]}
    >
      <Text style={[t.flex1, t.bgOrange300, t.p6]}>
        Open up App.js to start working on your app!
      </Text>

      <Text style={[t.flex1, t.bgPurple600, t.p6]}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
