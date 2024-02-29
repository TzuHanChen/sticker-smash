import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import palette from '../palette';

export default function CircleButton({ id, active, onPressIn, onPressOut, onPress }) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={[styles.circleButton,
      { backgroundColor: id == active ? palette.yellow : palette.white }]}
        onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress}>
        <MaterialIcons name="add" size={36} color={palette['dark-gray']} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    padding: 6,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
  },
});