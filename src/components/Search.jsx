import { useContext, useState } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagesContext from '../context/ImagesContext';

function Search() {
  const { setParam } = useContext(ImagesContext);

  const [input, setInput] = useState('');

  const handleChange = (value) => {
    // Para busqueda a tiempo real sin la necesidad de darle a la lupa para buscar
    //! Puedo hacer un setParam(value) para que cada vez que el usuario escriba haga una peticion
    setInput(value);
  };

  const handleSubmit = () => {
    setParam(input);
  };

  return (
    <View style={tw`w-full h-30 flex-row justify-evenly items-center`}>
      <TextInput
        placeholder="Search image"
        style={tw`w-3/5 h-10 bg-white rounded pl-2`}
        onChangeText={handleChange}
      />
      <TouchableHighlight
        style={tw`w-10 h-10 bg-white rounded justify-center items-center`}
        onPress={handleSubmit}
      >
        <View>
          <Icon name="search" size={35} color="black" />
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default Search;
