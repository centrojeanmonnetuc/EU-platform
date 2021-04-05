import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 1rem;
  margin: 0.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1rem;
  margin: 0.5rem;
`;

const Upload = (props) => {
  const { setProcessing, setUploaded } = props;
  const [file, setFile] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const formData = new FormData();
    formData.append("image", file);
    // formData.append("game", gameRef);

    const config = {
      headers: { "content-Type": "multipart/form-data" },
    };
    await axios
      .post("/api/upload/gameImage", formData, config)
      .then((res) => {
        setUploaded(res.data.img);
        setProcessing(false);
      })
      .catch((err) => console.log(err));
  };
  const onChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Input type="file" name="image" onChange={onChange} />
      <ButtonWrapper>
        <Button variant="contained" color="primary" type="submit">
          Upload Imagem
        </Button>
      </ButtonWrapper>
    </form>
  );
};

export default Upload;