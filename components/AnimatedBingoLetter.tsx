import { Text, Animated, StyleSheet, View } from "react-native";
import { useEffect, useRef } from "react";

interface AnimatedBingoLetterProps {
  letter: string;
  isStriked: boolean;
  delay: number;
}

export const AnimatedBingoLetter = ({
  letter,
  isStriked,
  delay,
}: AnimatedBingoLetterProps) => {
  const strikeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const handleStriked = () => {
      Animated.sequence([
        Animated.delay(delay),
        Animated.spring(strikeAnim, {
          toValue: 1,
          tension: 50,
          friction: 5,
          useNativeDriver: true,
        }),
      ]).start();
    };

    const handleNotStriked = () => {
      strikeAnim.setValue(0);
    };

    if (isStriked) {
      handleStriked();
    } else {
      handleNotStriked();
    }
  }, [isStriked, delay]);

  return (
    <View style={styles.letterContainer}>
      <Text style={styles.letter}>{letter}</Text>
      <Animated.View
        style={[
          styles.strikeThrough,
          {
            transform: [{ scaleX: strikeAnim }],
            opacity: strikeAnim,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  letterContainer: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  letter: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2196F3",
  },
  strikeThrough: {
    position: "absolute",
    height: 3,
    backgroundColor: "#FF0000",
    width: "100%",
    left: 0,
    right: 0,
    top: "50%",
    transform: [{ translateY: -1.5 }],
  },
});
