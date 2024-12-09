import styled from "@emotion/styled";

interface StyleProps {
  isScrolled: boolean;
  isActive?: boolean;
}

interface MobileNavProps {
  isOpen: boolean;
}

export const HeaderWrapper = styled.div`
  position: relative;
  z-index: 1000;
`;

export const Container = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  background: ${({ theme, isScrolled }) =>
    isScrolled ? theme.colors.background.default : "transparent"};
  border-bottom: ${({ theme, isScrolled }) =>
    isScrolled ? `1px solid ${theme.colors.border.default}` : "none"};
  transition: all 0.3s;
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${({ theme }) => theme.container.lg};
  margin: 0 auto;
`;

export const Logo = styled.h1<{ isScrolled: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  color: ${({ theme, isScrolled }) =>
    isScrolled
      ? theme.colors.text.primary
      : theme.mode === "dark"
      ? theme.colors.text.primary
      : theme.colors.text.inverse};
  transition: color 0.3s;
`;

export const DesktopNav = styled.nav`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const NavItem = styled.button<StyleProps>`
  background: none;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme, isActive }) =>
    isActive ? theme.fontWeight.semibold : theme.fontWeight.normal};
  color: ${({ theme, isScrolled, isActive }) => {
    if (isScrolled)
      return isActive ? theme.colors.text.primary : theme.colors.text.secondary;

    return theme.mode === "dark"
      ? isActive
        ? theme.colors.text.primary
        : theme.colors.text.secondary
      : isActive
      ? theme.colors.text.inverse
      : "rgba(255, 255, 255, 0.8)";
  }};
  cursor: pointer;
  transition: all 0.2s;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: ${({ theme, isScrolled, isActive }) => {
      if (!isActive) return "transparent";

      if (isScrolled) {
        return theme.colors.text.primary;
      }

      return theme.mode === "dark"
        ? theme.colors.text.primary
        : theme.colors.text.inverse;
    }};
    transform: scaleX(${({ isActive }) => (isActive ? 1 : 0)});
    transition: transform 0.2s;
  }

  &:hover {
    color: ${({ theme, isScrolled }) =>
      isScrolled
        ? theme.colors.text.primary
        : theme.mode === "dark"
        ? theme.colors.text.primary
        : theme.colors.text.inverse};

    &::after {
      transform: scaleX(1);
      background: ${({ theme, isScrolled }) =>
        isScrolled
          ? theme.colors.text.primary
          : theme.mode === "dark"
          ? theme.colors.text.primary
          : theme.colors.text.inverse};
    }
  }
`;

export const MobileControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ThemeToggle = styled.button<{ isScrolled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme, isScrolled }) =>
    isScrolled
      ? theme.colors.text.primary
      : theme.mode === "dark"
      ? theme.colors.text.primary
      : theme.colors.text.inverse};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const MenuButton = styled.button<{ isScrolled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme, isScrolled }) =>
    isScrolled
      ? theme.colors.text.primary
      : theme.mode === "dark"
      ? theme.colors.text.primary
      : theme.colors.text.inverse};
  cursor: pointer;
`;

export const MobileNav = styled.nav<MobileNavProps>`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  height: calc(100vh - 60px);
  background: ${({ theme }) => theme.colors.background.default};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: all 0.2s;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  overflow-y: auto;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const MobileNavItem = styled.button<{ isActive?: boolean }>`
  width: 100%;
  background: none;
  border: none;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme, isActive }) =>
    isActive ? theme.fontWeight.semibold : theme.fontWeight.normal};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.text.primary : theme.colors.text.secondary};
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};

  &:hover {
    background: ${({ theme }) => theme.colors.background.alt};
  }
`;
