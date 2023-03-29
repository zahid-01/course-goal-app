import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  Button,
} from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={props.goalsArray}
        renderItem={(itemData) => {
          return (
            <View style={styles.goal}>
              <Pressable
                android_ripple={{ color: '#ddd' }}
                onPress={props.deleteGoal.bind(this, itemData.item.key)}
                style={({ pressed }) => pressed && { opacity: 0.5 }}
              >
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 5,
  },
  goal: {
    margin: 16,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  goalText: {
    padding: 8,
    color: 'white',
    alignSelf: 'center',
  },
});

export default GoalItem;
