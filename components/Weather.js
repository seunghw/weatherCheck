import React from "react";
import propTypes from "prop-types";
import { Text, View, StatusBar } from "react-native";
import { t } from "react-native-tailwindcss";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-tornado",
    gradient: ["#40e0d0", "#ff8c00", "#ff0080"],
    title: "폭풍",
    subtitle: "날씨가 굉장하네요. 집에 계세요!",
  },
  Drizzle: {
    iconName: "weather-partly-rainy",
    gradient: ["#3d7eaa", "#ffe47a"],
    title: "이슬비",
    subtitle: "비가 올거면 차라리 시원하게 팍팍      왔으면 좋겠네요",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#185a9d", "#43cea2"],
    title: "비",
    subtitle: "빗소리 들으면 막걸리에 파전이 땡기네요",
  },
  Snow: {
    iconName: "weather-snowy-heavy",
    gradient: ["#274046", "#e6dada"],
    title: "눈",
    subtitle: "눈도 오니 집에서 푹 쉽시당",
  },
  Atmosphere: {
    iconName: "weather-cloudy-arrow-right",
    gradient: ["#9796f0", "#fbc7d4"],
    title: "대기",
    subtitle: "무난무난한 날씨네요",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#ff4b1f", "#ff9068"],
    title: "맑음",
    subtitle: "밖에 나가 놀아도 좋은 날씨예요",
  },
  Clouds: {
    iconName: "cloud-outline",
    gradient: ["#003973", "#e5e5be"],
    title: "구름",
    subtitle: "사진 찍기에 좋은 날씨예요",
  },
};

function Weather({ temp, condition, country, city }) {
  return (
    <LinearGradient
      // Button Linear Gradient
      colors={weatherOptions[condition].gradient}
      style={[t.flex1]}
    >
      <StatusBar barStyle="light-content" />
      <View style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
        <Text
          style={[t.textWhite, t.text2xl, t.fontLight, t.mB4, t.m5, t.mT24]}
        >
          {country}
        </Text>
        <Text style={[t.textWhite, t.fontSemibold, t.text2xl, t.mB10]}>
          {city}
        </Text>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={120}
          color="white"
        />
        <Text style={[t.text6xl, t.textWhite]}>{temp}°</Text>
      </View>
      <View style={[t.flex1, t.itemsCenter, t.justifyCenter]}>
        <Text style={[t.textWhite, t.text4xl, t.fontLight, t.mB16, t.m5]}>
          {weatherOptions[condition].title}
        </Text>
        <Text style={[t.textWhite, t.fontSemibold, t.text2xl, t.m4]}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: propTypes.number.isRequired,
  //country: propTypes.oneOF(["KR", "US", "JP"]).isRequired,
  country: propTypes.string,
  city: propTypes.string,
  condition: propTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

export default Weather;
