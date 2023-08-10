import { useDispatch } from "react-redux";
import { useState } from "react";

import { Button, RadioButton, Text, TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { addCourse } from "../store/action/actionCourse";

export default function FormAddCourse({ navigation }) {
  const dispatch = useDispatch();

  const [inputCourse, setInputCourse] = useState({
    name: "",
  });

  const changeInput = (key, value) => {
    let newInput = {
      ...inputCourse,
    };
    newInput[key] = value;
    setInputCourse(newInput);
  };

  const CourseHandler = () => {
    const newCourse = {
      ...inputCourse,
    };

    dispatch(addCourse(newCourse))
      .then(() => {
        navigation.navigate("CoursePage");
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Text variant="headlineMedium" style={styles.headers}>
          Add Course
        </Text>
      </View>
      <Text>Course Name :</Text>
      <TextInput
        label=""
        value={inputCourse.name}
        mode="outlined"
        onChangeText={(value) => changeInput("name", value)}
        style={{ marginBottom: 10 }}
      />

      <Button
        mode="contained"
        uppercase={true}
        onPress={() => CourseHandler()}
        style={styles.button}
      >
        Submit
      </Button>
      <Button
        mode="contained"
        uppercase={true}
        onPress={() => navigation.navigate("CoursePage")}
        style={styles.button}
      >
        Back
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
    width: 300,
    height: 200,
    marginBottom: 20,
  },
  button: {
    borderRadius: 5,
    fontWeight: "bold",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
  },
});
