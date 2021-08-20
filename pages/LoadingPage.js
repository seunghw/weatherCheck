import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";

export default function LoadingPage() {
  return (
    <View style={[t.bgYellow300, t.flex1, t.justifyEnd]}>
      <Text style={[t.p22, t.textXl]}>Getting the weather here</Text>
    </View>
  );
}
