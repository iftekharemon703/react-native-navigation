Stack Navigation

import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Blog({ navigation }) {
  return (
    <View>
      <Text>Blog Screen</Text>
      <Button
        title="View Blog"
        onPress={() => navigation.navigate("BlogDetail", { id: "1" })}
      />
    </View>
  );
}

function BlogDetail({ route }) {
  return (
    <View>
      <Text>Blog Details Screen {route.params.id}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: "green" },
            headerTintColor: "white",
          }}
          name="BlogDetail"
          component={BlogDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// Button Tab Navigation

import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function Map() {
  return (
    <View>
      <Text>Map Screen</Text>
    </View>
  );
}

function Account() {
  return (
    <View>
      <Text>Account Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: "red",
          activeTintColor: "white",
          inactiveBackgroundColor: "lightGray",
          inactiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={Map}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="map" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
