import styled from "styled-components";

export const Container = styled.div``;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  margin: 30px 0;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  max-height: 300px;
  margin-bottom: 30px;
`;
export const CategoryImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const VideosWrapper = styled.div`
  background: #1e3c72;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, max-content));
  justify-content: center;
`;
