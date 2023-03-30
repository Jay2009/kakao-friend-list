import { Image, Text, View } from "react-native";
import Margin from "../../common/Margin";

export default (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ url: props.uri }}
        style={{ height: 50, width: 50, borderRadius: 20 }}
      />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{props.name}</Text>
        <Margin height={6} />
        <Text style={{ fontSize: 12, color: "grey" }}>
          {props.introduction}
        </Text>
      </View>
    </View>
  );
};
