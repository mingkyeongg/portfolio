import { useIsMobile } from "@/hooks/useIsMobile";
import { breakpoints } from "@/utils/breakpoints";
import { colors } from "@/utils/colors";
import styled from "@emotion/styled";
import Link from "next/link";

export const Header = () => {
  const isMobile = useIsMobile();
  return (
    <HeaderContainer>
        <HeaderTitle>
          <Link href="#landing">{isMobile ? "이민경" : "LEE MINKYEONG"}</Link>
        </HeaderTitle>
        <HeaderMenu>
          <HeaderMenuItem href="#about">ABOUT</HeaderMenuItem>
          <HeaderMenuItem href="#skills">SKILLS</HeaderMenuItem>
          <HeaderMenuItem href="#projects">PROJECTS</HeaderMenuItem>
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
  
  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 16px;
  }
`;

const HeaderMenu = styled.nav`
  display: flex;
  gap: 20px;
  font-size: 24px;

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: 16px;
    gap: 10px;
  }
`;

const HeaderMenuItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.text.cream};
  &:hover {
    color: ${colors.text.gray};
  }
`;