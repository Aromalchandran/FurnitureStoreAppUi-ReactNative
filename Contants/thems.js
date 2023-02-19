import { Dimensions } from "react-native";
const {width,height} = Dimensions.get("window");

export const COLORS = {
    //BASE COLOR
    primary:"#a6c13c",//green
    secondary:"#454c5d", //gray

    //colors
    black:"#1e1f20",
    white:"#ffffff",
    lightgray:"ABAF88",
    lightgray2:"EFEFF0",
    lightgray3:"D4D5D6",
    gray:"#BEC1D2",
    blue:"#42B0FF",
    darkGreen:"#59990F",
    darkgray:"#898C95",
    transparentLightGray:"#CCD4D5D6",
    transparentLightGray1:"rgba(255,255,255,0.7)"
}

export const SIZES = {
    // global sizes
    base:8,
    font:14,
    radius:12,
    padding:24,
    // font sizes 
    largetitle:50,
    h1:30,
    h2:22,
    h3:16,
    h4:14,
    body1:30,
    body2:20,
    body3:16,
    body4:14,
    //app dimentions
    width,
    height
}
const  appTheme = {COLORS,SIZES,};

export default appTheme;
