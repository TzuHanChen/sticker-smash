import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import palette from '../palette';

export default function Button({ label, theme, id, active, onPressIn, onPressOut, onPress }) {
  if (theme === 'primary') {
    return (
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button,
        { backgroundColor: id == active ? palette.yellow : palette.white }]}
          onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress}>
          <FontAwesome name='picture-o' size={18}
            color={palette["dark-gray"]} style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: palette["dark-gray"] }]}>
            {label}</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={[styles.button,
      { backgroundColor: id == active ? palette["dark-gray"] : palette["light-gray"] }]}
        onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 12,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: palette.white,
    fontSize: 16,
  },
});