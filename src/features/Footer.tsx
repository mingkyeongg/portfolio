import { breakpoints } from "@/utils/breakpoints";
import { colors } from "@/utils/colors";
import styled from "@emotion/styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025. Lee Min Kyeong. All rights reserved.</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: ${colors.background.dark};
  color: ${colors.text.cream};
  padding: 48px;
  text-align: center;
  font-size: 14px;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 24px;
    font-size: 12px;
  }
`;