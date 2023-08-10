import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Course() {
  return (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: "#4e79a7" }]}>
        <Text style={styles.text}>Course</Text>
      </View>
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
