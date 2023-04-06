import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import TopIconButton from "./components/page/friend/TopIconButton";

const Header = () => {
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
        <TopIconButton name="search-outline" />
        <TopIconButton name="person-add-outline" />
        <TopIconButton name="md-musical-notes-outline" />
        <TopIconButton name="ios-settings-outline" />
      </View>
    </View>
  );
};

export default Header;
