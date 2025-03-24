import { TouchableOpacity, Text, StyleSheet } from "react-native";

type BingoCellProps = {
  number: number;
  isSelected: boolean;
  onPress: () => void;
};

export const BingoCell = ({ number, isSelected, onPress }: BingoCellProps) => {
  return (
    <TouchableOpacity
      style={[styles.cell, isSelected && styles.selectedCell]}
      onPress={onPress}
    >
      <Text style={[styles.cellText, isSelected && styles.selectedText]}>
        {number}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedCell: {
    backgroundColor: "#4CAF50",
  },
  cellText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  selectedText: {
    color: "#fff",
  },
});
