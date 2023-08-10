import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Appbar, Button, Card, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import StudentCard from "../components/StudentCard";

export default function StudentScreen({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            title="home"
            onPress={() => navigation.navigate("Landing Page")}
          >
            <Icon
              name="chevron-left"
              size={20}
              color="black"
              style={styles.arrow}
            />
          </TouchableOpacity>

          <Text variant="headlineMedium" style={styles.headers}>
            Student
          </Text>
        </View>
        <View>
          <Button
            icon="text-box-plus"
            mode="contained"
            style={styles.button}
            uppercase={true}
            onPress={() => navigation.navigate("AddStudent")}
          >
            Add Student
          </Button>
        </View>
        <ScrollView>
          <View>
            <StudentCard navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  headers: {
    alignItems: "center",
    marginBottom: 17,

    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  arrow: {
    marginLeft: 9,
  },
  button: {
    backgroundColor: "#b22222",
    borderRadius: 5,
    fontWeight: "bold",
    paddingVertical: 5,
    marginBottom: 13,
  },
});
