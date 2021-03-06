import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  filter: brightness(100%);
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
`;

export const CardTopInfo = styled.div`
  border-radius: 0px 0px 10px 10px;
  position: absolute;
  top: -3rem;
  left: 0;
  height: 3rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;
`;

export const CardBottomInfo = styled.div`
  border-radius: 10px 10px 0px 0px;
  position: absolute;
  bottom: -3.5rem;
  left: 0;
  height: 3.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;
`;

export const CardWrapper = styled.div`
  width: 330px;
  height: 330px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);

  display: flex;
  flex-direction: column;
  position: relative;

  &:hover ${Card} {
    filter: brightness(60%);
    transform: scale(1.15);
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }

  &:hover ${CardBottomInfo} {
    bottom: 0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }

  &:hover ${CardTopInfo} {
    top: 0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }

  font-size: 1.4rem;
`;

export const Author = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 1rem;
`;

export const Votes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
  margin-right: 1rem;
`;

export const VoteIcon = styled.div`
  color: #ffcc00;
  margin-left: 0.5rem;
`;

export const Title = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-left: 1rem;
`;

export const VoteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25%;
  height: 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
  text-align: center;

  margin-right: 1rem;

  &:active {
    background: #fff;
  }

  &:hover {
    background: #ffcc00;
  }
  &:focus {
    outline: 0;
  }
`;
