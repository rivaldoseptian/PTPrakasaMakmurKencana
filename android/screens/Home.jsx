import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";

import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import IconStudent from "../components/IconStudent";
import IconCourse from "../components/IconCourse";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <IconStudent navigation={navigation} />
        </View>
        <View>
          <IconCourse />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
