import { View, FlatList } from 'react-native';
import tw from 'twrnc';
import Constants from 'expo-constants';
import { useContext } from 'react';
import Search from './Search';
import ImagesContext from '../context/ImagesContext';
import ImageComponent from './ImageComponent';
import Loader from './Loader';
import ModalComponent from './ModalComponent';

function Main() {
  const { images, loading } = useContext(ImagesContext);

  if (loading) {
    return <Loader />;
  }
  return (
    <View
      style={tw`w-full h-full items-center mt-${Constants.statusBarHeight}`}
    >
      <Search />

      <View style={tw`w-full h-full items-center justify-center `}>
        <FlatList
          data={images}
          keyExtractor={(image) => image.id}
          renderItem={({ item: image }) => <ImageComponent data={image} />}
          numColumns={2}
        />
      </View>
    </View>
  );
}

export default Main;
