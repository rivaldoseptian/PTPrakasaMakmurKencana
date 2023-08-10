import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Card, Chip, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showCourse } from "../store/action/actionCourse";
import Icon from "react-native-vector-icons/FontAwesome";

export default function StudentCard({ navigation }) {
  const courses = useSelector((state) => state.course.courses);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showCourse());
  }, []);

  return (
    <View style={styles.container}>
      {courses?.map((course) => {
        return (
          <Card mode="elevated" style={styles.card} key={course.id}>
            <Card.Content>
              <View style={styles.headerContainer}>
                <View>
                  <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
                    {course.name}
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={[styles.button2]}
                    onPress={() =>
                      navigation.navigate("AddGetCourse", { id: course.id })
                    }
                  >
                    <Icon
                      name="user-plus"
                      size={20}
                      color="white"
                      style={styles.arrow}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button2]}
                    onPress={() =>
                      navigation.navigate("EditCourse", { id: course.id })
                    }
                  >
                    <Icon
                      name="edit"
                      size={20}
                      color="white"
                      style={styles.arrow}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.footerContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("DetailCourse", { id: course.id })
                  }
                >
                  <Text variant="titleMedium" style={{ color: "blue" }}>
                    Detail{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </Card.Content>
          </Card>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: "white",
    borderColor: "#eee",
    borderWidth: 1,
    marginBottom: 5,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  footerContainer: {
    marginTop: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#26747b",
    borderRadius: 5,
    marginLeft: 7,
  },
  button2: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#26747b",
    borderRadius: 50,
    marginLeft: 7,
  },
  categoryText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
