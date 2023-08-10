import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { Button, Card, Chip, Text } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { showStudent } from "../store/action/actionStudent";

export default function StudentCard({ navigation }) {
  const students = useSelector((state) => state.student.students);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStudent());
  }, []);

  return (
    <View style={styles.container}>
      {students?.map((student) => {
        return (
          <Card mode="elevated" style={styles.card} key={student.id}>
            <Card.Content>
              <View style={styles.headerContainer}>
                <View>
                  <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
                    {student.name}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    style={[styles.button]}
                    onPress={() =>
                      navigation.navigate("EditStudent", { id: student.id })
                    }
                  >
                    <Text style={{ color: "white" }}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.footerContainer}>
                <Text variant="titleMedium">{student.age} Years Old </Text>
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
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff7f00",
    borderRadius: 5,
  },
  categoryText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
