import { StyleSheet, View, Platform, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';
import domtoimage from 'dom-to-image';

import palette from './palette';
import ImageViewer from './components/imageViewer';
import Button from './components/Button';
import CircleButton from './components/CircleButton';
import IconButton from './components/IconButton';
import EmojiPicker from "./components/EmojiPicker";
import EmojiList from './components/EmojiList';
import EmojiSticker from './components/EmojiSticker';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const imageRef = useRef();
  const [activeButton, setActiveButton] = useState('');

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image. 您並未選擇任何圖片。');
    }
  }

  const onReset = () => {
    setSelectedImage(null);
    setShowAppOptions(false);
    setPickedEmoji(null);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  if (status === null) {
    requestPermission();
  }

  const onSaveImageAsync = async () => {
    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(imageRef, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert("Saved image on your device! 已儲存圖片到您的裝置！");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(imageRef.current, {
          quality: 1,
          width: 320,
          height: 440
        })

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.screenshotArea} ref={imageRef} collapsable={false}>
          <ImageViewer
            placeholderImage={PlaceholderImage}
            selectedImage={selectedImage} />
          {pickedEmoji &&
            <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
        </View>
      </View>

      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset 重置"
              id="reset" active={activeButton}
              onPressIn={() => setActiveButton("reset")}
              onPressOut={() => setActiveButton('')}
              onPress={onReset} />
            <CircleButton id="add-sticker" active={activeButton}
              onPressIn={() => setActiveButton("add-sticker")}
              onPressOut={() => setActiveButton('')}
              onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save 儲存"
              id="save" active={activeButton}
              onPressIn={() => setActiveButton("save")}
              onPressOut={() => setActiveButton('')}
              onPress={onSaveImageAsync} />
          </View>
          {pickedEmoji &&
            <View>
              <Text style={styles.optionsText}>
                Drag to move, double tap to scale</Text>
              <Text style={styles.optionsText}>
                拖曳貼紙可移動，點擊貼紙兩次可縮放</Text>
            </View>}
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button label='Choose a photo 選擇圖片' theme='primary'
            id="choose-a-photo" active={activeButton}
            onPressIn={() => setActiveButton("choose-a-photo")}
            onPressOut={() => setActiveButton('')}
            onPress={pickImageAsync} />
          <Button label='Use this photo 使用現在的圖片'
            id="use-this-photo" active={activeButton}
            onPressIn={() => setActiveButton("use-this-photo")}
            onPressOut={() => setActiveButton('')}
            onPress={() => setShowAppOptions(true)} />
        </View>
      )}

      <EmojiPicker isVisible={isModalVisible}
        onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji}
          onCloseModal={onModalClose} />
      </EmojiPicker>

      <StatusBar style='light' />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette['dark-gray'],
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageContainer: {
    marginVertical: 18,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  screenshotArea: {
    width: 320,
    height: 440,
  },
  footerContainer: {
    width: 320,
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    gap: 9
  },
  optionsContainer: {
    width: 320,
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    gap: 9
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionsText: {
    color: palette.white,
    fontSize: 16,
    textAlign: 'center',
  }
});