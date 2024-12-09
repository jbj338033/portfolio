import { memo, useCallback, useState, useEffect } from "react";
import * as S from "./style";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { IoMdTrophy } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Certificate } from "../../../types/certificate";
import { Award } from "../../../types/award";
import { CERTIFICATES } from "../../../constants/certificate";
import { AWARDS } from "../../../constants/award";

type TabType = "certificates" | "awards";
type ItemType = Certificate | Award;

const isCertificate = (item: ItemType): item is Certificate => {
  return "number" in item;
};

const isAward = (item: ItemType): item is Award => {
  return "rank" in item;
};

const Header = memo(() => (
  <S.Header>
    <S.Title>Certificates & Awards</S.Title>
    <S.HeaderDescription>자격증과 수상 내역을 소개합니다</S.HeaderDescription>
  </S.Header>
));

Header.displayName = "Header";

interface TabItemProps {
  isActive: boolean;
  onClick: () => void;
  icon: typeof HiOutlineAcademicCap | typeof IoMdTrophy;
  label: string;
}

const TabItem = memo(
  ({ isActive, onClick, icon: Icon, label }: TabItemProps) => (
    <S.TabItem
      isActive={isActive}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
    >
      <Icon aria-hidden="true" />
      {label}
    </S.TabItem>
  )
);

TabItem.displayName = "TabItem";

interface CardProps {
  item: ItemType;
  onClick: (item: ItemType) => void;
}

const Card = memo(({ item, onClick }: CardProps) => (
  <S.Card
    onClick={() => onClick(item)}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => e.key === "Enter" && onClick(item)}
  >
    <S.CardHeader>
      <S.CardTitle>{item.name}</S.CardTitle>
      <S.Period>{item.date}</S.Period>
    </S.CardHeader>
    <S.Organization>{item.organization}</S.Organization>
    {isCertificate(item) && item.number && (
      <S.CertNumber>{item.number}</S.CertNumber>
    )}
    {isAward(item) && item.rank && <S.Badge>{item.rank}</S.Badge>}
    <S.CardDescription>{item.description}</S.CardDescription>
  </S.Card>
));

Card.displayName = "Card";

interface ModalProps {
  item: ItemType;
  onClose: () => void;
}

const Modal = memo(({ item, onClose }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <S.Modal onClick={onClose} role="dialog" aria-modal="true">
      <S.ModalContent onClick={(e) => e.stopPropagation()} role="document">
        <S.CloseButton onClick={onClose} aria-label="Close modal">
          <IoClose aria-hidden="true" />
        </S.CloseButton>
        <S.ModalBody>
          <S.CardHeader>
            <S.CardTitle>
              {isCertificate(item) ? (
                <HiOutlineAcademicCap aria-hidden="true" />
              ) : (
                <IoMdTrophy aria-hidden="true" />
              )}
              {item.name}
            </S.CardTitle>
            <S.Period>{item.date}</S.Period>
          </S.CardHeader>

          <S.Organization>{item.organization}</S.Organization>
          {isCertificate(item) && item.number && (
            <S.CertNumber>{item.number}</S.CertNumber>
          )}
          {isAward(item) && item.rank && <S.Badge>{item.rank}</S.Badge>}
          <S.CardDescription>{item.description}</S.CardDescription>
        </S.ModalBody>
      </S.ModalContent>
    </S.Modal>
  );
});

Modal.displayName = "Modal";

const CertificatesAndAwards = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("certificates");
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

  const handleTabChange = useCallback((tab: TabType) => {
    setSelectedTab(tab);
  }, []);

  const handleItemSelect = useCallback((item: ItemType) => {
    setSelectedItem(item);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const renderItems = useCallback(
    (items: ItemType[]) =>
      items.map((item) => (
        <Card key={item.name} item={item} onClick={handleItemSelect} />
      )),
    [handleItemSelect]
  );

  return (
    <S.Container id="certificates">
      <S.Inner>
        <Header />

        <S.TabList role="tablist" aria-label="Certificates and Awards">
          <TabItem
            isActive={selectedTab === "certificates"}
            onClick={() => handleTabChange("certificates")}
            icon={HiOutlineAcademicCap}
            label="Certificates"
          />
          <TabItem
            isActive={selectedTab === "awards"}
            onClick={() => handleTabChange("awards")}
            icon={IoMdTrophy}
            label="Awards"
          />
        </S.TabList>

        <S.Content role="tabpanel">
          {selectedTab === "certificates"
            ? renderItems(CERTIFICATES)
            : renderItems(AWARDS)}
        </S.Content>
      </S.Inner>

      {selectedItem && <Modal item={selectedItem} onClose={handleModalClose} />}
    </S.Container>
  );
};

export default memo(CertificatesAndAwards);
