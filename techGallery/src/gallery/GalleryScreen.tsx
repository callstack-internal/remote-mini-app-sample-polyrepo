import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const PhotoGallery = () => {
  const PHOTOS = Array.from({length: 24}).map(
    (_, i) => `https://unsplash.it/300/300/?random&__id=tech-gallery${i}`,
  );

  return (
    <>
      {PHOTOS.map((uri: string) => (
        <View key={uri} style={styles.item}>
          <Image
            source={{uri}}
            style={styles.photo}
            accessibilityIgnoresInvertColors
          />
        </View>
      ))}
    </>
  );
};

function GalleryScreen() {
  return (
    <View style={styles.content}>
      <PhotoGallery />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  photo: {
    width: '100%',
    height: 300,
  },
});

export default GalleryScreen;
