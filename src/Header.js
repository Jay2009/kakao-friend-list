import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "react-native";
import TopMenu from "./components/page/friend/TopMenu";

export default () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>친구</Text>
      <View style={{ flexDirection: "row" }}>
        <TopMenu name="search-outline" />
        <TopMenu name="person-add-outline" />
        <TopMenu name="md-musical-notes-outline" />
        <TopMenu name="ios-settings-outline" />
      </View>
    </View>
  );
};
