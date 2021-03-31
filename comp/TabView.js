import * as React from "react";
import { View, useWindowDimensions, Text, StyleSheet, TouchableOpacity } from "react-native";
import { TabView as AllTabs, SceneMap } from "react-native-tab-view";
import Animated, {useAnimatedStyle} from 'react-native-reanimated'

import TabPage from "./tabPage/TabPage";
import TabPage2 from "./tabPage/TabPage2";

export default function TabView() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: "first", title: "Your Notes" },
    { key: "second", title: "Edited Notes" },
  ]);

  const renderScene = SceneMap({
    first: TabPage,
    second: TabPage2,
  });

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
  
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const color = Animated.color(
            Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 255 : 0
                ),
              })
            ),
            0,
            0
          );

          const borderBottomBox = {
            borderBottomColor: '#4ea4de',
            paddingBottom: 10,
            fontFamily: 'serif',
            fontSize: 20,
            borderBottomWidth: Animated.round(
              Animated.interpolate(props.position, {
                inputRange,
                outputRange: inputRange.map(inputIndex =>
                  inputIndex === i ? 3 : 0
                ),
              })
            )
          }
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => setIndex(i)}
              key={i}>
              <Animated.Text style={ borderBottomBox }>{route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <>
    <AllTabs
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
    </>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: "pink",
  },
  tabBar: {
    flexDirection: 'row',
    marginRight: 100,
  },
  tabItem: {
    padding: 16,
  },
});
