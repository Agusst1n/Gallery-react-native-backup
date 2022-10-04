import { Text, View, Image } from "react-native";
import tw from "twrnc";

function ImageComponent(props) {
  console.log(props.data.src);
  const { large2x } = props.data.src;
  return (
    <View style={tw`w-40 h-40 m-2`}>
      <Image source={{ uri: large2x }} style={tw`w-full h-full`} />
    </View>
  );
}

export default ImageComponent;
