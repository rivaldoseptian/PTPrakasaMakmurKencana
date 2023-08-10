import { Text, SafeAreaView, StyleSheet } from "react-native";

// You can import supported modules from npm
import store from "./store";
import { Provider } from "react-redux";
import MainStack from "./navigators/mainstack.jsx";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
});
