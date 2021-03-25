import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";
import ImageUtils from "../ImageUtils";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(32),
      height: theme.spacing(22),
    },
  },
  button: {
    margin: theme.spacing(2),
    padding: theme.spacing(1.5),
  },
  deleteButton: {
    marginTop: theme.spacing(5),
    padding: theme.spacing(0.8),
  },
  backButton: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
}));

const Container = styled.div`
  width: 100%;
  min-height: 60vh;
  display: flex;
  align-items: center;

  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextFieldCustom = styled(TextField)`
  && {
    margin: 0.7rem;
    width: 80%;
  }
`;

const ChangeImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  margin: 1rem;
`;

const ImgContainer = styled.div`
  width: 250px;
  height: 250px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const UtilsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 2rem 0;
`;

const GamesCRUD = ({ gamesInfo }) => {
  const classes = useStyles();
  const { gameRef } = useParams();
  const { search } = useLocation();

  const query = new URLSearchParams(search);
  const idField = query.get("id");

  const [gameParams, setGameParms] = useState(null);
  const [uploadedImg, setUploadedImg] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/games/${gameRef}/${idField}`)
      .then(function (response) {
        setGameParms(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [gameRef || idField]);

  return (
    <Container>
      {gameParams && (
        <Wrapper>
          <Button variant="contained" className={classes.backButton}>
            Voltar
          </Button>
          <Typography variant="h6" gutterBottom>
            Editar Jogo
          </Typography>
          {gamesInfo.map((info, index) => {
            if (info.type === "text") {
              return (
                <TextFieldCustom
                  key={index}
                  required
                  id="outlined-required"
                  label={info.name}
                  defaultValue={gameParams[info.ref]}
                  variant="outlined"
                />
              );
            } else if (info.type === "img") {
              return (
                <ChangeImgContainer key={index}>
                  <p>Imagem do Jogo</p>
                  <ImgContainer>
                    <Img
                      src={
                        uploadedImg
                          ? uploadedImg.img_path
                          : gameParams[info.ref]
                      }
                      alt={index}
                    />
                  </ImgContainer>
                  <ImageUtils setUploadedImg={setUploadedImg} />
                </ChangeImgContainer>
              );
            }
          })}
          <UtilsWrapper>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Guardar
            </Button>
            {/* <Button
              variant="contained"
              color="secondary"
              className={classes.deleteButton}
            >
              Eliminar
            </Button> */}
          </UtilsWrapper>
        </Wrapper>
      )}
    </Container>
  );
};

export default GamesCRUD;
