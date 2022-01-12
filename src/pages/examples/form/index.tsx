import Head from "next/head";
import BasePageLayout from "src/components/layout/basePageLayout/BasePageLayout";
import PageSection from "src/components/layout/pageSection/PageSection";
import Form from "#components/form/Form";
import TextInput from "#components/form/textInput/TextInput";
import FormRow from "#components/form/formRow/FormRow";
import Button from "#components/common/button/Button";
import EmailInput from "#components/form/emailInput/EmailInput";
import { useForm } from "react-hook-form";
import React from "react";
import FormMessage from "#components/form/formMessage/FormMessage";

const formProps = {
  name: {
    label: "name",
    placeholder: "input placeholder",
  },
  email: {
    label: "e-mail address",
    placeholder: "input placeholder",
  },
};

const FormExamplePage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data, "[ON SUBMIT]");
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <BasePageLayout>
      <Head>
        <title>Form example page</title>
      </Head>
      <PageSection>
        <Form title="Register" onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <TextInput
              labelFloating
              variant="outlined"
              id={Math.random().toString()}
              {...formProps.name}
              name="name"
              required
              register={register}
            >
              {errors.name && <FormMessage error="This field is required" />}
            </TextInput>
            <EmailInput
              labelFloating
              variant="outlined"
              id={Math.random().toString()}
              {...formProps.email}
              name="email"
              required
              register={register}
            >
              {errors.email && <FormMessage error="This field is required" />}
            </EmailInput>
          </FormRow>
          <Button text="Save emailaddress" type="submit" />
        </Form>
      </PageSection>
    </BasePageLayout>
  );
};

export default FormExamplePage;
