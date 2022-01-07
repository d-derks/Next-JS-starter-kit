import { GetStaticProps } from "next";
import Head from "next/head";
import BasePageLayout from "src/components/layout/basePageLayout/BasePageLayout";
import PageSection from "../components/layout/pageSection/PageSection";
import { getAllStandardNews } from "../../helpers/api-utils";
import Intro from "#components/blocks/intro/Intro";
import Card from "#components/common/card/Card";
import { newsFeed } from "#types";
import fetch from "node-fetch";
import Grid from "#components/layout/grid/Grid";
import Form from "#components/form/Form";
import TextInput from "#components/form/textInput/TextInput";
import FormRow from "#components/form/formRow/FormRow";
import Button from "#components/common/button/Button";
import { useRef } from "react";
import EmailInput from "#components/form/emailInput/EmailInput";
import { useOvermindActions, useOvermindState } from "../store/overmind";
import { saveFormDetails } from "../helpers/saveFormDetails";

const registerFormProps = {
  name: {
    label: "name",
    placeholder: "input placeholder",
  },
  email: {
    label: "e-mail address",
    placeholder: "input placeholder",
  },
};

const Home = ({ data, news }) => {
  const emailRef = useRef(null);
  const nameRef = useRef(null);

  const {
    registerEmail: { name, email },
  } = useOvermindState();
  const {
    registerEmail: {
      toggleEmailError,
      toggleNameError,
      handleFormErrorMessage,
    },
  } = useOvermindActions();

  const register = () => {
    const enteredName = nameRef.current.value;
    const enteredEmail = emailRef.current.value;

    saveFormDetails(event, enteredEmail, enteredName);
    validateEmail(enteredEmail);
    validateName(enteredName);
    handleFormErrorMessage();
  };
  const validateName = (enteredName) => {
    if (!enteredName || enteredName.trim() === "") {
      toggleNameError(true);
      return true;
    } else {
      toggleNameError(false);
      return false;
    }
  };

  const validateEmail = (enteredEmail) => {
    if (!enteredEmail || !enteredEmail.includes("@")) {
      toggleEmailError(true);
      return true;
    } else {
      toggleNameError(false);
      return false;
    }
  };

  return (
    <BasePageLayout home>
      <Head>
        <title>Starter kit</title>
      </Head>
      <PageSection>
        <Intro {...data} />
        <Grid>
          {news?.map((feed: newsFeed) => (
            <Card key={feed.id} href={`/examples/news/${feed.id}`} {...feed} />
          ))}
        </Grid>
      </PageSection>
      <PageSection>
        <Form title="Register email" onSubmit={register}>
          <FormRow>
            <EmailInput
              labelFloating
              variant="outlined"
              id={Math.random().toString()}
              {...registerFormProps.email}
              inputRef={emailRef}
              type="email"
              error={email.message}
            />
            <TextInput
              labelFloating
              variant="outlined"
              id={Math.random().toString()}
              {...registerFormProps.name}
              inputRef={nameRef}
              type="text"
              error={name.message}
            />
          </FormRow>
          <Button text="Save emailaddress" type="submit" />
        </Form>
      </PageSection>
    </BasePageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allNews = await getAllStandardNews();
  const response = await fetch(
    "https://starterkit-next-js-default-rtdb.firebaseio.com/.json"
  );
  const data = await response.json();

  return {
    props: {
      data: data,
      news: allNews,
    },
  };
};

export default Home;
