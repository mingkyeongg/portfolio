import { colors } from "@/utils/colors";
import styled from "@emotion/styled";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <CardContainer>{children}</CardContainer>;
}

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 16px;
  color: ${colors.absolute.white};
`;

export default Card;