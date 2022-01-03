import { Meta } from "@storybook/react/types-6-0";
import React from "react";
import Typography from "./Typography";

export default {
  title: "Components/Typograhpy",
  component: Typography,
  args: {
    text: "My default text",
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["h1", "h2", "h3", "h4", "p", "span", "a", "legend", "label"],
    },
    gutterBottm: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    color: {
      control: { type: "radio" },
      defaultValue: "dark",
      options: ["dark", "light"],
    },
    size: {
      control: { type: "radio" },
      options: ["s", "m", "l"],
    },
    extraClass: { control: { type: "text" } },
  },
} as Meta;

export const Template = (args) => {
  return <Typography variant="p" {...args} />;
};

export const ColorLight = Template.bind({});
ColorLight.args = {
  color: "light",
};

export const Link = Template.bind({});
Link.args = {
  variant: "a",
  href: "/",
};
