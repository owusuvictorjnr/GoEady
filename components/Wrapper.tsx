import { View, Platform } from "react-native";
import React from "react";
import tw from "twrnc";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Wrapper = ({ children, className }: Props) => {
  return (
    <SafeAreaView
      style={tw`bg-white flex-1 ${
        Platform.OS === "android" ? "mt-10" : "mt-1"
      }`}
    >
      <View style={[tw`p-5`, className ? tw`${className}` : null]}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Wrapper;
