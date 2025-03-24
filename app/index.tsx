import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useCallback, useEffect } from "react";
import { BingoBoard } from "../components/BingoBoard";
import { checkWinningLines } from "../utils/gameUtils";
import { AnimatedBingoLetter } from "../components/AnimatedBingoLetter";

export default () => {
  const [numbers, setNumbers] = useState<number[]>(() =>
    Array.from({ length: 25 }, (_, i) => i + 1).sort(() => Math.random() - 0.5)
  );
  const [selectedCells, setSelectedCells] = useState<boolean[]>(
    Array(25).fill(false)
  );
  const [completedLines, setCompletedLines] = useState<number>(0);
  const hasWon = completedLines >= 5;

  const handleNewGame = useCallback(() => {
    setNumbers((prev) => [...prev].sort(() => Math.random() - 0.5));
    setSelectedCells(Array(25).fill(false));
    setCompletedLines(0);
  }, []);

  const handleCellPress = (index: number) => {
    if (hasWon) return;
    setSelectedCells((prev) => {
      const newSelected = [...prev];
      newSelected[index] = !newSelected[index];
      return newSelected;
    });
  };

  useEffect(() => {
    const wins = checkWinningLines(selectedCells);
    setCompletedLines(wins);
  }, [selectedCells]);

  const bingoText = "BINGO";
  const ANIMATION_DELAY = 150; // milliseconds between each letter animation

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {bingoText.split("").map((letter, index) => (
          <AnimatedBingoLetter
            key={index}
            letter={letter}
            isStriked={index < completedLines}
            delay={index * ANIMATION_DELAY}
          />
        ))}
      </View>
      <BingoBoard
        numbers={numbers}
        selectedCells={selectedCells}
        onCellPress={handleCellPress}
        disabled={hasWon}
      />
      <TouchableOpacity style={styles.button} onPress={handleNewGame}>
        <Text style={styles.buttonText}>
          {hasWon ? "You Won! Play Again" : "New Game"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titleContainer: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#2196F3",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
