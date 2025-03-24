import { View, StyleSheet } from "react-native";
import { BingoCell } from "./BingoCell";

export interface BingoBoardProps {
  numbers: number[];
  selectedCells: boolean[];
  onCellPress: (index: number) => void;
}

export const BingoBoard = ({
  numbers,
  selectedCells,
  onCellPress,
}: BingoBoardProps) => {
  return (
    <View style={styles.grid}>
      {numbers.map((number, index) => (
        <BingoCell
          key={index}
          number={number}
          isSelected={selectedCells[index]}
          onPress={() => onCellPress(index)}
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
});
