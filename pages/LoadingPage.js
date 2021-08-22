import React from "react";
import { StatusBar, Text, View } from "react-native";
import { t } from "react-native-tailwindcss";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function LoadingPage() {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={["#feac5e", "#c779d0", "#4bc0c8"]}
      style={[t.bgYellow300, t.flex1, t.justifyCenter, t.itemsCenter]}
    >
      <StatusBar barStyle="dark-content" />

      <View
        style={[
          t.bgTransparent,
          t.w11_12,
          t.shadow2xl,
          t.hAuto,
          t.roundedLg,
          t.itemsCenter,
        ]}
      >
        <AntDesign name="hourglass" size={54} color="black" style={[t.pT10]} />
        <Text style={[t.text4xl, t.pT5]}>WeatherCheck </Text>
        <Text style={[t.textXs, t.pB5, t.p2]}>Now Loading... </Text>
      </View>
    </LinearGradient>
  );
}
