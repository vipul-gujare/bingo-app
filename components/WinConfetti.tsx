import { useRef, useEffect } from "react";
import ConfettiCannon from "react-native-confetti-cannon";

interface WinConfettiProps {
  isVisible: boolean;
}

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
      count={200}
      origin={{ x: -10, y: 0 }}
      autoStart={false}
      fadeOut
      explosionSpeed={350}
      fallSpeed={3000}
      colors={["#2196F3", "#4CAF50", "#FFC107", "#F44336", "#9C27B0"]}
    />
  );
};
