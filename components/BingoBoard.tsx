import { View, StyleSheet } from "react-native";
import { BingoCell } from "./BingoCell";

export interface BingoBoardProps {
  numbers: number[];
  selectedCells: boolean[];
  onCellPress: (index: number) => void;
  disabled?: boolean;
}

export const BingoBoard = ({
  numbers,
  selectedCells,
  onCellPress,
  disabled = false,
}: BingoBoardProps) => {
  return (
    <View style={[styles.grid, disabled && styles.disabledGrid]}>
      {numbers.map((number, index) => (
        <BingoCell
          key={`number-${number}-${index}`}
          number={number}
          isSelected={selectedCells[index]}
          onPress={() => onCellPress(index)}
          disabled={disabled}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 360,
    padding: 8,
  },
  disabledGrid: {
    opacity: 0.8,
  },
});
