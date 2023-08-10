import { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { showStudent } from "../store/action/actionStudent";
import { useRoute } from "@react-navigation/native";
import { CreateGetCourse } from "../store/action/actionCourse";

export default function AddGetCourse({ navigation }) {
  const students = useSelector((state) => state.student.students);
  const { id } = useRoute().params;
  console.log(id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStudent);
  }, []);

  const Add = (StudentId) => {
    dispatch(CreateGetCourse(id, StudentId));
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            title="home"
            onPress={() => navigation.navigate("CoursePage")}
          >
            <Icon
              name="chevron-left"
              size={20}
              color="black"
              style={styles.arrow}
            />
          </TouchableOpacity>

          <Text variant="headlineMedium" style={styles.headers}>
            + Add Student
          </Text>
        </View>

        <ScrollView>
          <View>
            <View style={styles.container1}>
              {students?.map((student) => {
                return (
                  <Card mode="elevated" style={styles.card1} key={student.id}>
                    <Card.Content>
                      <View style={styles.headerContainer1}>
                        <View>
                          <Text
                            variant="titleLarge"
                            style={{ fontWeight: "bold" }}
                          >
                            {student.name}
                          </Text>
                        </View>
                        <View>
                          <TouchableOpacity
                            style={[styles.button1]}
                            onPress={() => Add(student.id)}
                          >
                            <Text style={{ color: "white" }}>+Add</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                      <View style={styles.footerContainer1}>
                        <Text variant="titleMedium">
                          {" "}
                          {student.age}Years Old{" "}
                        </Text>
                      </View>
                    </Card.Content>
                  </Card>
                );
              })}
            </View>
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
    backgroundColor: "#3d8c40",
    borderRadius: 5,
    fontWeight: "bold",
    paddingVertical: 5,
    marginBottom: 13,
  },
  container1: {
    marginBottom: 10,
  },
  card1: {
    backgroundColor: "white",
    borderColor: "#eee",
    borderWidth: 1,
  },
  dateContainer1: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  footerContainer1: {
    marginTop: 5,
  },
  headerContainer1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button1: {
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3d8c40",
    borderRadius: 5,
  },
  categoryText1: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
