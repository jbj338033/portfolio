import * as S from "./style";
import { BsGithub, BsInstagram, BsEnvelope } from "react-icons/bs";

const CONTACT_LINKS = [
  {
    icon: <BsGithub />,
    href: "https://github.com/jbj338033",
    label: "GitHub",
  },
  {
    icon: <BsInstagram />,
    href: "https://instagram.com/jbj338033",
    label: "Instagram",
  },
  {
    icon: <BsEnvelope />,
    href: "mailto:jbj338033@gmail.com",
    label: "Email",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Container>
      <S.Inner>
        <S.ContactLinks>
          {CONTACT_LINKS.map((link) => (
            <S.LinkItem
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </S.LinkItem>
          ))}
        </S.ContactLinks>
        <S.Copyright>© {currentYear} JMO. All rights reserved.</S.Copyright>
      </S.Inner>
    </S.Container>
  );
};

export default Footer;
