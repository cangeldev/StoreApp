import React from "react";
import { View, FlatList } from "react-native";

import HeaderComp from "../header/headerComp";
import ContainerStyle from "./containerStyle";
import Card from "../Card/card";
import products from "../assets/items.json"

function Container() {
    const { Container } = ContainerStyle
    const renderProduct = ({ item }) => <Card product={item} />;

    return (
        <View style={Container}>
            <FlatList data={products} renderItem={renderProduct} numColumns={2} ListHeaderComponent={<HeaderComp />} />
        </View>
    )
}
export default Container