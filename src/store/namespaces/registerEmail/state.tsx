export type State = {
  name: {
    hasError: boolean;
    message: string;
  };
  email: {
    hasError: boolean;
    message: string;
  };
};

export const state: State = {
  name: {
    hasError: false,
    message: null,
  },
  email: {
    hasError: false,
    message: null,
  },
};
