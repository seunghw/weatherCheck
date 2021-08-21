import React, { useState, useEffect } from "react";
import Loading from "./pages/LoadingPage";
import * as Location from "expo-location";
import { Alert } from "react-native";
import { axios } from "axios";
const API_KEY = "c626da9911fba2b6b824ee171b4c92c4";

export default function App() {
  const [location, setLocation] = useState(null); // 위치정보
  let [userState, setuserState] = useState(true);

  useEffect(() => {
    const getweather = async () => {
      const { data } = await axios.get(``); //블라블라~
    };

    const getLocation = async () => {
      try {
        await Location.requestForegroundPermissionsAsync(); // 사용자에게 동의 요청보내기

        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({}); // 사용자의 위치정보 받아오기
        //console.log(coords.latitude, coords.longitude);
        //throw error();
        setuserState(true);
        getweather(latitude, longitude);
        console.log(latitude);
        console.log(longitude);
        setLocation(location);
      } catch (error) {
        Alert.alert("Can't find you", "so sad");
      }
    };
  }, []);

  return userState == 1 ? <Loading /> : null;
}
