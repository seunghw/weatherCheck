import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";

export default function ClearPage() {
  return (
    <View style={[t.bgOrange400, t.flex1, t.justifyEnd]}>
      <Text style={[t.p20, t.textXl]}>Getting the weather here</Text>
    </View>
  );
}
