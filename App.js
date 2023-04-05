import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "./src/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Profile from "./src/components/page/friend/Profile";
import { friendProfiles, myProfile } from "./src/data";
import Division from "./src/components/common/Division";
import Margin from "./src/components/common/Margin";
import FriendSection from "./src/components/page/friend/FriendSection";
import FriendList from "./src/components/page/friend/FriendList";
import { useState } from "react";
import TabBar from "./src/components/page/friend/TabBar";

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);
  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };
  const ItemSeparatorComponent = () => <Margin height={13} />;

  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />
      <Margin height={10} />
      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />
      <Margin height={15} />
      <Division />
      <Margin height={12} />
      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5} />
    </View>
  );
  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={["top", "right", "bottom", "left"]} // 예외없이 모두 안전영역 적용
      >
        <FlatList
          data={isOpened ? friendProfiles : []}
          ItemSeparatorComponent={ItemSeparatorComponent}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          stickyHeaderIndices={[0]}
          keyExtractor={(_, index) => index}
          renderItem={renderItem}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          showsVerticalScrollIndicator={false}
        />
        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
        }}
      >
        <FriendList data={friendProfiles} isOpened={isOpened} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
