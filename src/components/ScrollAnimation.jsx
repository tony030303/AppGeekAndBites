import React, { useRef, useEffect, useState } from 'react';
import { Animated, ScrollView, Text, View, StyleSheet } from 'react-native';

export default function ScrollAnimation() {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [distance, setDistance] = useState(0);
  const textRef = useRef(null);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  useEffect(() => {
    if (textRef.current) {
      textRef.current.measure((x, y, width, height, pageX, pageY) => {
        scrollY.addListener(({ value }) => {
          const relativeDistance = pageY - value;
          setDistance(relativeDistance);
        });
      });
    }

    return () => {
      scrollY.removeAllListeners();
    };
  }, [scrollY]);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.scrollContent}>
          <View ref={textRef} style={styles.box}>
            <Text style={styles.boxText}>Texto monitoreado</Text>
          </View>
          {[...Array(20).keys()].map(i => (
            <View key={i} style={styles.box}>
              <Text style={styles.boxText}>Item {i + 1}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.infoBox}>
        <Text>Distancia del texto al scroll: {Math.round(distance)} px</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingVertical: 20,
  },
  box: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'lightgray',
  },
  boxText: {
    fontSize: 16,
  },
  infoBox: {
    padding: 20,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderColor: 'lightgray',
  },
});
