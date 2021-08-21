import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";

export default function LoadingPage() {
  return (
    <View style={[t.bgYellow300, t.flex1, t.justifyCenter, t.itemsCenter]}>
      <View
        style={[
          t.bgWhite,
          t.w11_12,
          t.shadow2xl,
          t.hAuto,
          t.roundedLg,
          t.itemsCenter,
        ]}
      >
        <Text style={[t.textXl, t.pB22, t.p20]}>Getting the weather </Text>
      </View>
    </View>
  );
}
