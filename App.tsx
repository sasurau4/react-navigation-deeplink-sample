import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Linking } from "expo";

const uriPrefix = Linking.makeUrl("/");

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

class Stack1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Stack 1</Text>
      </View>
    );
  }
}

class Bottom2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Bottom 2</Text>
      </View>
    );
  }
}

class Material1 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Material 1</Text>
      </View>
    );
  }
}

class Material2 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Material 2</Text>
      </View>
    );
  }
}

const MaterialTabNavigator = createMaterialTopTabNavigator({
  Material1: {
    screen: Material1,
    path: "material1"
  },
  Material2: {
    screen: Material2,
    path: "material2"
  }
});

const StackNavigator1 = createStackNavigator({
  Stack1: {
    screen: Stack1,
    path: "stack1"
  },
  Home: {
    screen: MaterialTabNavigator,
    path: ""
  }
});

const BottomTabNavigator = createBottomTabNavigator({
  Bottom: {
    screen: StackNavigator1,
    path: ""
  },
  Bottom2: {
    screen: Bottom2,
    path: "bottom2"
  }
});

const AppNavigator = createSwitchNavigator({
  Switch1: {
    screen: BottomTabNavigator,
    path: ""
  },
  Details: {
    screen: DetailsScreen,
    path: "detail"
  }
});

const App = createAppContainer(AppNavigator);
console.log(App.router.childRouters);

export default () => <App uriPrefix={uriPrefix} />;
