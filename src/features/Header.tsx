import { colors } from "@/utils/colors";
import styled from "@emotion/styled";

export const Header = () => {
  return (
    <HeaderContainer>
        <HeaderTitle>
          <span>LEE MINKYEONG</span>
        </HeaderTitle>
        <HeaderMenu>
          <HeaderMenuItem>ABOUT</HeaderMenuItem>
          <HeaderMenuItem>SKILLS</HeaderMenuItem>
          <HeaderMenuItem>PROJECTS</HeaderMenuItem>
          <HeaderMenuItem>CONTACT</HeaderMenuItem>
        </HeaderMenu>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
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

const HeaderMenu = styled.div`
  display: flex;
  gap: 20px;
  font-size: 24px;
`;

const HeaderMenuItem = styled.span`
  cursor: pointer;

  &:hover {
    color: ${colors.text.gray};
  }
`;