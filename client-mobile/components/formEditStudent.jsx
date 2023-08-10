import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";

import { Button, RadioButton, Text, TextInput } from "react-native-paper";
import { UpdateStudent } from "../store/action/actionStudent";
import { View, StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { baseUrl } from "./baseUrl";

export default function FormEditStudnet({ navigation }) {
  const dispatch = useDispatch();
  const { id } = useRoute().params;

  const [inputStudent, setInputStudent] = useState({
    name: "",
    day: "",
    month: "",
    year: "",
  });

  useEffect(() => {
    const detail = async () => {
      try {
        const response = await axios.get(baseUrl + "/student/" + id);
        const res = response.data;
        console.log(res);
        let dateString = res.dateofbirdh;
        let [datePart, timePart] = dateString.split("T");
        let [year, month, day] = datePart.split("-").map(Number);
        setInputStudent({
          name: res.name,
          day: String(day),
          month: String(month),
          year: String(year),
        });
      } catch (error) {}
    };
    detail();
  }, []);

  const changeInput = (key, value) => {
    let newInput = {
      ...inputStudent,
    };
    newInput[key] = value;
    setInputStudent(newInput);
  };

  const StudentHandler = () => {
    const { day, month, year } = inputStudent;
    const dateofbirdh = `${year}-${month}-${day}`;

    const newStudent = {
      ...inputStudent,
      dateofbirdh: dateofbirdh,
    };

    dispatch(UpdateStudent(id, newStudent))
      .then(() => {
        navigation.navigate("StudentPage");
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Text variant="headlineMedium" style={styles.headers}>
          Edit Student
        </Text>
      </View>
      <Text>Name :</Text>
      <TextInput
        label=""
        value={inputStudent.name}
        mode="outlined"
        onChangeText={(value) => changeInput("name", value)}
        style={{ marginBottom: 10 }}
      />
      <Text style={{ marginBottom: 4 }}>Date of Birth :</Text>
      <View style={styles.horizontalInputContainer}>
        <TextInput
          label="Day"
          placeholder="DD"
          value={inputStudent.day}
          keyboardType="numeric"
          onChangeText={(value) => changeInput("day", value)}
          style={styles.input}
        />

        <TextInput
          label="Month"
          placeholder="MM"
          value={inputStudent.month}
          keyboardType="numeric"
          onChangeText={(value) => changeInput("month", value)}
          style={styles.input}
        />

        <TextInput
          label="Year"
          placeholder="YYYY"
          value={inputStudent.year}
          keyboardType="numeric"
          onChangeText={(value) => changeInput("year", value)}
          style={styles.input}
        />
      </View>

      <Button
        mode="contained"
        uppercase={true}
        onPress={() => StudentHandler()}
        style={styles.button}
      >
        Submit
      </Button>
      <Button
        mode="contained"
        uppercase={true}
        onPress={() => navigation.navigate("StudentPage")}
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
