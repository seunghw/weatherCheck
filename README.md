# ๐ weatherCheck

expo Link : [์ฒดํํ๊ธฐ](https://expo.dev/@seunghw/weatherCheck)

## ๐ฌ Demo

### ๋ก๋ฉํ๋ฉด

<img  src="https://raw.githubusercontent.com/seunghw/weatherCheck/master/img/Simulator%20Screen%20Shot%20-%20iPhone%2012%20-%202021-08-23%20at%2000.08.22.png" width="300px">

### ๋ ์จ๋ณ ํ๋ฉด

<img  src="https://raw.githubusercontent.com/seunghw/weatherCheck/main/img/all.png" width="900px">

## ๐ฏ ์ค๋ช

React Native๊ณผ tailwind, expo๋ฅผ ์ด์ฉํ์ฌ ๋ ์จ ์ดํ ๋ง๋ค๊ธฐ

## ๐ฑ ์ฌ์ฉ๋ฐฉ๋ฒ

ํ๋ก์ ํธ ์ฌ์ฉ์

```javacript

yarn run ios

```

expo ์ฌ์ฉ์

https://expo.dev/@seunghw/weatherCheck

## ๐ ์ฃผ์ ์คํ

- React-Native
- tailwind
- expo(API)
- Proptypes

## ๐ ์ผ์ 

8.21

- axios set
- expo weather API ์ค์ 
- LoadingPage ๋ณ๊ฒฝ

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

## ๐งฉ ๊ตฌ์ฑ

### pages

- LoadingPage
  ๊ธฐ๋ณธ ๋ก๋ฉ ํ์ด์ง

- WeatherPage
  ๋ ์จ ์ ๋ณด๋ฅผ ์๋ ค์ฃผ๋ ํ์ด์ง

### components

- Weather

## ๐  ์ ์ง๋ณด์ ๋ฐ ์งํ์ฌํญ

- [ ] ์ฌ์ฉ์์ ํ์ฌ์์น๋ ์จ ์ธ์๋ ๋ค๋ฅธ ๋์๋ค ๋ถ๋ฌ์ค๊ธฐ
- [ ] ๋ฏธ์ 

โ besides

ํ์คํ rn์ผ๋ก ๋ง๋ค์ด๋ณด๋ ์ ๊ธฐํ๊ณ  ์ฌ๋ฐ๋ ๊ฒฝํ์ด๋ผ๊ณ  ์๊ฐํ๋ค. ๊ฒ๋ค๊ฐ ์๋ ๋ชฉ์ ์ธ tailwind๋ ์ด๋์ ๋ ์ต์ํด์ง๊ณ  ์๋ค. ์์น์ ๋ณด๋ฅผ ํ์ธํ ์์๋ ip-api, ๋ฐฐ๊ฒฝ์ ์์๊ณ  ์ฝ๊ฒ ๋ง๋ค ์ ์๋ uiGradient, ์ค๋ฅ ์ค์ผ ์ ์๊ฒ ๋ง๋ค์ด ์ฃผ๋ proptypes๊น์ง ์ด๊ฒ์ ๊ฒ ํจ๊ป ๋ฐฐ์ธ ์ ์์๋ค.

PropTypes ์๋ฌ๊ฐ ๋ฐ์ํด์ ์ ๊ทธ๋ฐ๊ฐ ์ฐพ์๋ณด๋ ๋๋ฌธ์๊ฐ ์๋๋ผ ์๋ฌธ์๋ก ์์ฑํด์ผ ์ค๋ฅ๊ฐ ๋ฐ์ํ์ง ์๋๋ค๊ณ  ํ๋ค. ๊ฝค ๋ง์ ์ฌ๋๋ค์ด ์ด ๋ถ๋ถ๋๋ฌธ์ ์ค๋ฅ๋ฅผ ๋ง๋๊ณ  ์๋ค๊ณ  ํ๋ค.;;

์๋๋ ์๊น๋จน๊ฒ ์์๋ฅผ ๋ค์ด๋จ๋ค.

ํ๋ฆฐ ์

```javascript
FieldWrapper.PropTypes = {
  foo: PropTypes.string.isRequired,
};
```

์ฌ๋ฐ๋ฅธ ์

```javascript
FieldWrapper.propTypes = {
  foo: PropTypes.string.isRequired,
};
```
