import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import ilustrationImg from "../../assets/ilustration.png";

export function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={ilustrationImg} />
    </View>
  );
}
