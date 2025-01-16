import React, { useRef } from 'react';
import { Animated, ScrollView, View, Text, StyleSheet } from 'react-native';

export default function ScrollAnimation() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200], // Scroll range
    outputRange: [100, 50], // Header height changes from 100 to 50
    extrapolate: 'clamp', // Prevents the output range from exceeding the specified values
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <Text style={styles.headerText}>Header</Text>
      </Animated.View>
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false } // If you're animating layout properties, set this to false
        )}
        scrollEventThrottle={16} // How often the scroll event will be fired, in milliseconds
      >
        {/* Sample content */}
        {[...Array(10)].map((_, i) => (
          <View key={i} style={styles.item}>
            <Text>Item {i + 1}</Text>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
  },
  scrollContent: {
    paddingTop: 100, // Ensure content doesn't overlap with header
  },
  item: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
