import * as S from "./style";
import { useState } from "react";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { IoMdTrophy } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Certificate } from "../../../types/certificate";
import { Award } from "../../../types/award";
import { CERTIFICATES } from "../../../constants/certificate";
import { AWARDS } from "../../../constants/award";

const isCertificate = (item: Certificate | Award): item is Certificate => {
  return "number" in item;
};

const isAward = (item: Certificate | Award): item is Award => {
  return "rank" in item;
};

const CertificatesAndAwards = () => {
  const [selectedTab, setSelectedTab] = useState<"certificates" | "awards">(
    "certificates"
  );
  const [selectedItem, setSelectedItem] = useState<Certificate | Award | null>(
    null
  );

  const renderCertificateItems = (certs: Certificate[]) =>
    certs.map((cert) => (
      <S.Card key={cert.name} onClick={() => setSelectedItem(cert)}>
        <S.CardHeader>
          <S.CardTitle>{cert.name}</S.CardTitle>
          <S.Period>{cert.date}</S.Period>
        </S.CardHeader>
        <S.Organization>{cert.organization}</S.Organization>
        {cert.number && <S.CertNumber>{cert.number}</S.CertNumber>}
        <S.CardDescription>{cert.description}</S.CardDescription>
      </S.Card>
    ));

  const renderAwardItems = (awards: Award[]) =>
    awards.map((award) => (
      <S.Card key={award.name} onClick={() => setSelectedItem(award)}>
        <S.CardHeader>
          <S.CardTitle>{award.name}</S.CardTitle>
          <S.Period>{award.date}</S.Period>
        </S.CardHeader>
        <S.Organization>{award.organization}</S.Organization>
        {award.rank && <S.Badge>{award.rank}</S.Badge>}
        <S.CardDescription>{award.description}</S.CardDescription>
      </S.Card>
    ));

  return (
    <S.Container id="certificates">
      <S.Inner>
        <S.Header>
          <S.Title>Certificates & Awards</S.Title>
          <S.HeaderDescription>
            자격증과 수상 내역을 소개합니다
          </S.HeaderDescription>
        </S.Header>

        <S.TabList>
          <S.TabItem
            isActive={selectedTab === "certificates"}
            onClick={() => setSelectedTab("certificates")}
          >
            <HiOutlineAcademicCap />
            Certificates
          </S.TabItem>
          <S.TabItem
            isActive={selectedTab === "awards"}
            onClick={() => setSelectedTab("awards")}
          >
            <IoMdTrophy />
            Awards
          </S.TabItem>
        </S.TabList>

        <S.Content>
          {selectedTab === "certificates"
            ? renderCertificateItems(CERTIFICATES)
            : renderAwardItems(AWARDS)}
        </S.Content>
      </S.Inner>

      {selectedItem && (
        <S.Modal onClick={() => setSelectedItem(null)}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.CloseButton onClick={() => setSelectedItem(null)}>
              <IoClose />
            </S.CloseButton>
            <S.ModalBody>
              <S.CardHeader>
                <S.CardTitle>
                  {isCertificate(selectedItem) ? (
                    <HiOutlineAcademicCap />
                  ) : (
                    <IoMdTrophy />
                  )}
                  {selectedItem.name}
                </S.CardTitle>
                <S.Period>{selectedItem.date}</S.Period>
              </S.CardHeader>

              <S.Organization>{selectedItem.organization}</S.Organization>
              {isCertificate(selectedItem) && selectedItem.number && (
                <S.CertNumber>{selectedItem.number}</S.CertNumber>
              )}
              {isAward(selectedItem) && selectedItem.rank && (
                <S.Badge>{selectedItem.rank}</S.Badge>
              )}
              <S.CardDescription>{selectedItem.description}</S.CardDescription>
            </S.ModalBody>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
};

export default CertificatesAndAwards;
