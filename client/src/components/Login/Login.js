import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Redirect } from "react-router-dom";

import Loading from "../UI/Loading";
import Error from "../UI/Error";
import MainContainer from "../Form/MainContainer";
import Form from "../Form/Form";
import Input from "../Form/Input";
import PrimaryButton from "../Form/PrimaryButton";
import { Typography } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username é obrigatório"),
  password: yup.string().required("Password é obrigatória"),
});

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation((obj) =>
    axios({
      method: "post",
      url: "/api/user/login",
      data: JSON.stringify({
        username: obj.username,
        password: obj.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  const onSubmit = (data) => {
    // console.log(data);
    mutation.mutate({ ...data });
  };

  let displaySave = "";
  if (mutation.isLoading) {
    displaySave = <Loading />;
  } else if (mutation.isError) {
    displaySave = (
      <div style={{ color: "red" }}>{mutation.error.response.data.message}</div>
    );
  } else if (mutation.isSuccess) {
    const res = mutation.data.data;
    if (res.token) {
      localStorage.setItem("token", res.token);
      return <Redirect to="/admin/content" />;
    }
    displaySave = <p>{res.message}</p>;
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Login
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username")}
          name="username"
          type="text"
          label="Username"
          error={!!errors.username}
          helperText={errors?.username?.message}
        />
        <Input
          {...register("password")}
          name="password"
          type="password"
          label="Password"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />
        {displaySave}
        <PrimaryButton>Entrar</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default Login;

const Container = styled(MainContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 1rem;
`;
