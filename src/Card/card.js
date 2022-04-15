import React from "react";
import { View, Text, Image } from "react-native";
import CardStyle from "./cardStyle";

function Card({ product }) {
    const { container, inner_container, title, price, inStock, image } = CardStyle
    return (
        <View style={container}>
            <View style={inner_container}>
                <Image style={image} source={{ uri: product.imgURL }} />
                <Text style={title}>{product.title}</Text>
                <Text style={price} >{product.price}</Text>
                <Text style={inStock}>{product.inStock === true ? ' ' : 'STOKTA YOK'}</Text>
            </View>
        </View>
    )
}
export default Card

