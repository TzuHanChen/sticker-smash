import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Button({ label, theme, onPress }) {
  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer, 
        { marginBottom: 6, borderRadius: 18 }]}>
        <Pressable style={[styles.button, { backgroundColor: '#FFF' }]}
          onPress={onPress}>
          <FontAwesome name='picture-o' size={18}
            color='#25292E' style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292E' }]}>
            {label}</Text>
        </Pressable>
      </View>
    )
  }

	return (
		<View style={styles.buttonContainer}>
			<Pressable style={styles.button} onPress={onPress}>
				<Text style={styles.buttonLabel}>{label}</Text>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
    marginHorizontal: 20,
    width: 320,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
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
    color: '#FFF',
    fontSize: 16,
  },
});