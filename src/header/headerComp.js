import React from "react";
import { View,Text,TextInput} from "react-native";
import HeaderCompStyle from "./headerCompStyle";
function HeaderComp(){
    const {title,textInput}=HeaderCompStyle
    return(
        <View>
            <Text style={title}>PATİKA STORE</Text>
            <TextInput style={textInput} placeholder="Ara..." placeholderTextColor={"#b9bbbe"}/>
        </View>
    )
}
export default HeaderComp