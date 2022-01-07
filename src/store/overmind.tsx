import { IContext, rehydrate } from "overmind";
import { namespaced, merge } from "overmind/config";

import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
  createReactionHook,
} from "overmind-react";

import * as app from "./namespaces/app/index";
import * as registerEmail from "./namespaces/registerEmail/index";

export const config = merge(
  {
    actions: {
      changePage({ state }, mutations) {
        rehydrate(state, mutations || []);
      },
      onInitializeOvermind({ actions }) {
        //
      },
    },
  },
  namespaced({
    app,
    registerEmail,
  })
);
export type Context = IContext<{
  state: typeof config.state;
  actions: typeof config.actions;
  effects: typeof config.effects;
}>;

export const useOvermindState = createStateHook<Context>();
export const useOvermindActions = createActionsHook<Context>();
