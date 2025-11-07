import { colors } from "@/utils/colors";
import styled from "@emotion/styled";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderContainer>
        <HeaderTitle>
          <Link href="#landing">LEE MINKYEONG</Link>
        </HeaderTitle>
        <HeaderMenu>
          <HeaderMenuItem href="#about">ABOUT</HeaderMenuItem>
          <HeaderMenuItem href="#skills">SKILLS</HeaderMenuItem>
          <HeaderMenuItem href="#projects">PROJECTS</HeaderMenuItem>
          <HeaderMenuItem href="#contact">CONTACT</HeaderMenuItem>
        </HeaderMenu>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 120px;
  width: 100%;
  align-items: center;
  background-color: ${colors.background.dark};
  padding: 40px;
  font-family: 'Aggravo';
  color: ${colors.text.cream};
  border-bottom: 4px solid ${colors.text.cream};
`;

const HeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: medium;
`;

const HeaderMenu = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 24px;
`;

const HeaderMenuItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.text.cream};
  &:hover {
    color: ${colors.text.gray};
  }
`;