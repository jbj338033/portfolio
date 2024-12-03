import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import * as S from "./style";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "activities", label: "Activities" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "archiving", label: "Archiving" },
  { id: "career", label: "Career" },
] as const;

type NavItemId = (typeof NAV_ITEMS)[number]["id"];

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<NavItemId>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      NAV_ITEMS.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (!element) return;

        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: NavItemId) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerHeight = 60;
    window.scrollTo({
      top: element.offsetTop - headerHeight,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  return (
    <S.HeaderWrapper>
      <S.Container isScrolled={scrollY > 0}>
        <S.Logo isScrolled={scrollY > 0}>JMO's Portfolio</S.Logo>

        <S.DesktopNav>
          {NAV_ITEMS.map((item) => (
            <S.NavItem
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              isScrolled={scrollY > 0}
              isActive={activeSection === item.id}
            >
              {item.label}
            </S.NavItem>
          ))}
        </S.DesktopNav>

        <S.MobileMenuButton
          isScrolled={scrollY > 0}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
          )}
        </S.MobileMenuButton>
      </S.Container>

      {/* Mobile Navigation */}
      <S.MobileNav isOpen={isMenuOpen}>
        {NAV_ITEMS.map((item) => (
          <S.MobileNavItem
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            isActive={activeSection === item.id}
          >
            {item.label}
          </S.MobileNavItem>
        ))}
      </S.MobileNav>
    </S.HeaderWrapper>
  );
};

export default Header;
