import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Store from "./src/redux/Store";
import Homescreen from "./src/Components/Homescreen";

export default function App() {
  return (
    <Provider store={Store}>
      <Homescreen />
    </Provider>
  );
}
