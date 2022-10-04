import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import tw from "twrnc";
import Main from "./src/components/Main";
import { ImagesProvider } from "./src/context/ImagesContext";

export default function App() {
  return (
    <View style={tw`h-full bg-slate-900 w-full justify-center items-center`}>
      <ImagesProvider>
        <Main />
        <StatusBar style="light" />
      </ImagesProvider>
    </View>
  );
}
