import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyles, { images } from "../styles/GlobalStyles";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "green" }}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: "red" }}
        ></TouchableOpacity>
      </View>
      <Image style={styles.image} source={images.chair}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    height: "65%",
    width: "100%",
    resizeMode: "stretch",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "black",
    top: -60,
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "grey",
    width: 50,
    height: 50,
    margin: 5,
  },
});

export default ViewImageScreen;
