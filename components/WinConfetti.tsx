import { useRef, useEffect } from "react";
import ConfettiCannon from "react-native-confetti-cannon";
import { Dimensions } from "react-native";

interface WinConfettiProps {
  isVisible: boolean;
}

const { width } = Dimensions.get("window");

export const WinConfetti = ({ isVisible }: WinConfettiProps) => {
  const confettiRef = useRef<ConfettiCannon>(null);

  useEffect(() => {
    if (isVisible) {
      confettiRef.current?.start();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <ConfettiCannon
      ref={confettiRef}
      count={150}
      origin={{ x: width / 2, y: 0 }}
      autoStart={false}
      fadeOut
      explosionSpeed={250}
      fallSpeed={2500}
      colors={["#2196F3", "#4CAF50", "#FFC107", "#F44336", "#9C27B0"]}
    />
  );
};
