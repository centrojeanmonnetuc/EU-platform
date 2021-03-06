import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import styled from "styled-components";

import Loading from "../../UI/Loading";
import Error from "../../UI/Error";
import OldImage from "./OldImage";

const OldImages = (props) => {
  const { linkedObj, inputRef, fetchQuery, setImage } = props;

  const { isLoading, isError, error, data } = useQuery(
    fetchQuery,
    () => axios(`/api/upload/images/${linkedObj}`),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} />;

  const inputRefImagesArr = [];
  data.data.forEach((image) => {
    if (image.input_ref === inputRef) {
      inputRefImagesArr.unshift(image);
    }
  });

  return (
    <Container>
      <p>Imagens antigas</p>
      <OldImagesList>
        {inputRefImagesArr.map((obj, index) => {
          return (
            <OldImage
              key={index}
              linkedImgObj={obj}
              fetchQuery={fetchQuery}
              setImage={setImage}
            />
          );
        })}
      </OldImagesList>
    </Container>
  );
};

export default OldImages;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const OldImagesList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 30vh;
  overflow-y: auto;
  margin: 0.5rem;
  background-color: #d6e8ff;
  border-radius: 0.5rem;
  width: 60%;
`;
