# 🌈 weatherCheck

## 🎬 Demo

<img  src="https://raw.githubusercontent.com/seunghw/weatherCheck/main/img/Simulator%20Screen%20Shot%20-%20iPhone%2012%20-%202021-08-22%20at%2023.08.41.png" width="200px">

## 🎯 설명

React Native과 tailwind, expo를 이용하여 날씨 어플 만들기

## 🚀 주요 스택

- React-Native
- tailwind
- expo(API)
- Proptypes

## 🗓 일정

8.21

- axios set
- expo weather API 설정
- LoadingPage 변경

  8.22

- Getting the Weather
- Displaying Temperature
- Getting the Condition Names
- Icons and Styling
- Background Gradient
- Title and Subtitles
- ip-api (locate)
- uiGradient(backgroundcolor)
- proptypes

More

- country, city setting

## 🧩 구성

### pages

- LoadingPage
  기본 로딩 페이지

- WeatherPage
  날씨 정보를 알려주는 페이지

### components

- Weather

## 🛠 유지보수 및 진행사항

- [ ] 사용자의 현재위치날씨 외에도 다른 도시들 불러오기
- [ ] 미정

⛏ besides

확실히 rn으로 만들어보니 신기하고 재밌는 경험이라고 생각한다. 게다가 원래 목적인 tailwind도 어느정도 익숙해지고 있다. 위치정보를 확인할수있는 ip-api, 배경을 예쁘고 쉽게 만들 수 있는 uiGradient, 오류 줄일 수 있게 만들어 주는 proptypes까지 이것저것 함께 배울 수 있었다.

PropTypes 에러가 발생해서 왜 그런가 찾아보니 대문자가 아니라 소문자로 작성해야 오류가 발생하지 않는다고 한다. 꽤 많은 사람들이 이 부분때문에 오류를 만나고 있다고 한다.;;

아래는 안까먹게 예시를 들어놨다.

틀린 예

```javascript
FieldWrapper.PropTypes = {
  foo: PropTypes.string.isRequired,
};
```

올바른 예

```javascript
FieldWrapper.propTypes = {
  foo: PropTypes.string.isRequired,
};
```
