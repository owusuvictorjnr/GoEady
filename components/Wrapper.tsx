import { View, Text } from "react-native";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Wrapper = ({ children, className }: Props) => {
  return (
    <View>
      <Text>Wrapper</Text>
    </View>
  );
};

export default Wrapper;
