import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Student({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.circle, { backgroundColor: "#b22222" }]}
        title="Go to Student"
        onPress={() => navigation.navigate("StudentPage")}
      >
        <Text style={styles.text}>Student</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 15,
    fontWeight: "bold",
  },
  circle: {
    marginLeft: 50,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    width: 270,
    height: 150,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: "white",
    fontSize: 35,
  },
});
