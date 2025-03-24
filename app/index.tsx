import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useState, useCallback } from "react";
import { BingoBoard } from "@/components/BingoBoard";

export default () => {
  const [numbers, setNumbers] = useState<number[]>(() =>
    Array.from({ length: 25 }, (_, i) => i + 1).sort(() => Math.random() - 0.5)
  );
  const [selectedCells, setSelectedCells] = useState<boolean[]>(
    Array(25).fill(false)
  );

  const handleNewGame = useCallback(() => {
    setNumbers((prev) => [...prev].sort(() => Math.random() - 0.5));
    setSelectedCells(Array(25).fill(false));
  }, []);

  const handleCellPress = (index: number) => {
    setSelectedCells((prev) => {
      const newSelected = [...prev];
      newSelected[index] = !newSelected[index];
      return newSelected;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BINGO</Text>
      <BingoBoard
        numbers={numbers}
        selectedCells={selectedCells}
        onCellPress={handleCellPress}
      />
      <TouchableOpacity style={styles.button} onPress={handleNewGame}>
        <Text style={styles.buttonText}>New Game</Text>
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
  title: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2196F3",
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
