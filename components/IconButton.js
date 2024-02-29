import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import palette from '../palette';

export default function IconButton({ icon, label, id, active, onPressIn, onPressOut, onPress }) {
  return (
    <Pressable style={[styles.iconButton,
    { backgroundColor: id == active ? palette["dark-gray"] : palette["light-gray"] }]}
      onPressIn={onPressIn} onPressOut={onPressOut} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={palette.white} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    width: 96,
    height: 84,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    marginTop: 6,
    color: palette.white,
    fontSize: 16,
  },
});