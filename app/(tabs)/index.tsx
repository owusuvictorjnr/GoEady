import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import tw from "twrnc";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={tw`bg-red-400 mt-10`}>
        <Text>hello</Text>
      </View>
    </SafeAreaView>
  );
}

