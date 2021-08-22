import React, { useState, useEffect } from "react";
import Loading from "./pages/LoadingPage";
import Weather from "./components/Weather";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "d59268c795345c88056a0309aa4b551e";

export default function App(props) {
  const [location, setLocation] = useState(null); // 위치정보
  let [userState, setuserState] = useState(true);
  let [temp, settemp] = useState(null);
  let [condition, setcondition] = useState("Clear");
  let [country, setcountry] = useState("nope");
  let [city, setcity] = useState("city");

  useEffect(() => {
    let getweather = async (latitude, longitude) => {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      ); //블라블라~

      settemp(data.main.temp);
      setcondition(data.weather[0].main);
      setcountry(data.sys.country);
      setcity(data.name);
      console.log(country);
      console.log(city);
    };

    const getLocation = async () => {
      try {
        await Location.requestForegroundPermissionsAsync(); // 사용자에게 동의 요청보내기

        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({}); // 사용자의 위치정보 받아오기
        //console.log(coords.latitude, coords.longitude);
        //throw error();

        getweather(latitude, longitude);
        setLocation(location);
        setuserState(false);
        //
      } catch (error) {
        Alert.alert("Can't find you", "so sad");
      }

      // let timer = setTimeout(() => {
      //   // 시간체크
      //   setuserState(false);
      // }, 1800); // 약 2초 뒤에 상태변경
      // return () => {
      //   clearTimeout(timer); // 깔끔하게 제거
      // };
    };

    getLocation();
    //
  }, []);

  return userState == 1 ? (
    <Loading />
  ) : (
    <Weather
      temp={Math.round(temp)}
      condition={condition}
      country={country}
      city={city}
    />
  );
}
