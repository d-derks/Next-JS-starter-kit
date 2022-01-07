import { Context } from "../../overmind";

export const toggleNameError = (
  { state }: Context,
  hasError: boolean | undefined
) => {
  state.registerEmail.name.hasError =
    typeof hasError !== "undefined" ? !!hasError : !hasError;
};

export const toggleEmailError = (
  { state }: Context,
  hasError: boolean | undefined
) => {
  state.registerEmail.email.hasError =
    typeof hasError !== "undefined" ? !!hasError : !hasError;
};

export const handleFormErrorMessage = ({ state }: Context) => {
  state.registerEmail.name.message =
    state.registerEmail.name.hasError === true
      ? "This field can't be blank"
      : (state.registerEmail.name.message = null);
  state.registerEmail.email.message =
    state.registerEmail.email.hasError === true
      ? "Please enter a valid emailaddress "
      : (state.registerEmail.email.message = null);
};
