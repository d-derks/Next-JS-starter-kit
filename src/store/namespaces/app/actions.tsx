import { Context } from "../../overmind";

export const toggleMainMenu = (
  { state }: Context,
  open: boolean | undefined
) => {
  state.app.mainMenuOpen =
    typeof open !== "undefined" ? !!open : !state.app.mainMenuOpen;
};
