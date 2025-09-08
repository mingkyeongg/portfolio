import { colors } from "@/utils/colors";
import styled from "@emotion/styled";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({ primary, backgroundColor, size = 'medium', label, onClick }: ButtonProps) => {
  return (
    <ButtonContainer
      primary={primary}
      backgroundColor={backgroundColor}
      size={size}
      onClick={onClick}
      label={label}
    >
      {label}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button<ButtonProps>`
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  cursor: pointer;

  background: ${({ primary, backgroundColor }) =>
    backgroundColor
      ? backgroundColor
      : primary
      ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      : 'rgba(255, 255, 255, 0.3)'};

  color: ${colors.absolute.white};
  font-weight: 600;

  ${({ size }) => {
    switch (size) {
      case 'small':
        return 'padding: 8px 12px; font-size: 14px;';
      case 'large':
        return 'padding: 16px 24px; font-size: 18px;';
      default:
        return 'padding: 12px 20px; font-size: 16px;';
    }
  }}

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.85;
  }
`;