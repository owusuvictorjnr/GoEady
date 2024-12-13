import SearchBar from "@/components/SearchBar";
import Wrapper from "@/components/Wrapper";
import { Image } from "react-native";
import tw from "twrnc";

export default function HomeScreen() {
  return (
    <Wrapper className="">
      <Image
        source={require("@/assets/images/android-chrome-192x192.png")}
        style={tw`w-24 h-10 `}
        resizeMode="cover"
      />

      {/* search bar */}
      <SearchBar />
      {/* NavOptions */}
      {/* suggestions */}
    </Wrapper>
  );
}
