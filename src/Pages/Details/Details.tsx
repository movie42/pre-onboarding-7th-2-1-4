import { Image, Loading, Meta } from "@/Components";

import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useGetCar } from "./hooks";
import useChangeDetailData from "./hooks/useChangeDetailData";

const Details = () => {
  const { carId } = useParams();

  const { data, isLoading, isSuccess } = useGetCar({
    querykey: ["car", carId ? carId : ""],
    carId: carId ? carId : ""
  });

  const {
    id,
    imageUrl,
    name,
    brand,
    insurance,
    amount: amountLocalString,
    carInfoList,
    additionalProducts: newAdditionalProducts
  } = useChangeDetailData(data);

  if (isLoading) {
    return <Loading />;
  }

  if (!isSuccess) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <>
      <Meta
        title={`${brand}${name} | 차량 상세`}
        description={`월 ${amountLocalString} 원`}
        imageUrl={imageUrl}
      />
      <Container data-id={id}>
        <HeaderSection>
          <ImageContainer>
            <Image src={imageUrl} alt={name} />
          </ImageContainer>
          <HeaderInfoContainer>
            <div className="head-info-title">
              <h3>{brand}</h3>
              <h2>{name}</h2>
            </div>
            <div className="head-info-amount">
              <span>월 {amountLocalString} 원</span>
            </div>
          </HeaderInfoContainer>
        </HeaderSection>
        <Section>
          <StatusBar>차량 정보</StatusBar>
          {carInfoList.map((value) => (
            <SectionItem key={value.name}>
              <span className="info-title">{value.name}</span>
              <span className="info-description">{value.description}</span>
            </SectionItem>
          ))}
        </Section>
        <Section>
          <StatusBar>보험</StatusBar>
          {insurance.map((value) => (
            <SectionItem key={value.name}>
              <span className="info-title">{value.name}</span>
              <span className="info-description">{value.description}</span>
            </SectionItem>
          ))}
        </Section>
        <Section>
          <StatusBar>추가상품</StatusBar>
          {newAdditionalProducts.map((value) => (
            <SectionItem key={value.name}>
              <span className="info-title">{value.name}</span>
              <span className="info-description">{value.amount}</span>
            </SectionItem>
          ))}
        </Section>
      </Container>
    </>
  );
};

export default Details;

const Container = styled.div``;

const HeaderSection = styled.section``;
const Section = styled.section``;

const HeaderInfoContainer = styled.div`
  padding: 2rem 2.2rem 1.4rem 2rem;
  .head-info-title {
    h2 {
      font-size: 2.4rem;
      font-weight: 700;
    }
    h3 {
      font-size: 2rem;
    }
    padding-bottom: 3.4rem;
  }

  .head-info-amount {
    text-align: right;
    span {
      font-size: 1.7rem;
    }
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const StatusBar = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${(props) => props.theme.color.fontWhite};
  padding: 1.3rem 0 1.401rem 2rem;
  background-color: ${(props) => props.theme.color.primary100};
`;

const SectionItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.3rem 2.1rem 1.4rem 1.9rem;
  .info-title {
    font-size: 1.7rem;
    font-weight: 700;
  }
  .info-description {
    font-size: 1.7rem;
    font-weight: 400;
  }
`;
