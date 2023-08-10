import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";

import { Button, RadioButton, Text, TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { baseUrl } from "./baseUrl";
import { UpdateCourse } from "../store/action/actionCourse";

export default function FormEditStudnet({ navigation }) {
  const dispatch = useDispatch();
  const { id } = useRoute().params;

  const [inputCourse, setInputCourse] = useState({
    name: "",
  });

  useEffect(() => {
    const detail = async () => {
      try {
        const response = await axios.get(baseUrl + "/course/" + id);
        const res = response.data;

        setInputCourse({
          name: res.name,
        });
      } catch (error) {}
    };
    detail();
  }, []);

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

    dispatch(UpdateCourse(id, newCourse))
      .then(() => {
        navigation.navigate("CoursePage");
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Text variant="headlineMedium" style={styles.headers}>
          Edit Course
        </Text>
      </View>
      <Text>Name :</Text>
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
  horizontalInputContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  arrow: {
    marginLeft: 9,
  },
});
