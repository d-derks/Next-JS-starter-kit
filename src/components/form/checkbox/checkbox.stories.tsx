import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {
    label: "My checkbox",
  },
  argTypes: {
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    labelHidden: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    className: { control: { type: "text" } },
  },
} as Meta;

export const Template = (args) => {
  return <Checkbox {...args} />;
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
