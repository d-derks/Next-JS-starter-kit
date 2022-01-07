import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import TextInput from "./TextInput";

export default {
  title: "Form/TextInput",
  component: TextInput,
  args: {
    label: "My label",
    id: Math.random().toString(),
    placeholder: "My placeholder",
  },
  argTypes: {
    label: { control: { type: "text" } },
    id: { control: { type: "text" } },
    className: { control: { type: "text" } },
    variant: {
      control: { type: "radio" },
      defaultValue: "standard",
      options: ["outlined", "standard"],
    },
    labelFloating: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} as Meta;

export const Template = (args) => {
  return (
    <div style={{ maxWidth: "30rem" }}>
      <TextInput {...args} />
    </div>
  );
};

export const FloatingLabel = Template.bind({});
FloatingLabel.args = {
  labelFloating: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

export const OutlinedWithFloatingLabel = Template.bind({});
OutlinedWithFloatingLabel.args = {
  variant: "outlined",
  labelFloating: true,
};
