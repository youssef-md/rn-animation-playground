import React from "react";
import { Ionicons } from "@expo/vector-icons";

import { Touch, Container } from "./styles";

interface RoundButtonProps {
  icon: string;
  onPress: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({ icon, onPress }) => {
  return (
    <Touch onPress={onPress}>
      <Container>
        <Ionicons name={icon} size={28} />
      </Container>
    </Touch>
  );
};

export default RoundButton;
