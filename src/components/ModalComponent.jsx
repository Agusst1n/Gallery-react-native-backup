import { Text, View, Modal } from 'react-native';
import tw from 'twrnc';

function ModalComponent() {
  return (
    <>
      <View style={tw`h-full w-full fixed top-0 right-0`}>
        <Text>Hi v2</Text>
      </View>
      <View style={tw`absolute`}>
        <Text>2</Text>
      </View>
    </>
  );
}

export default ModalComponent;
