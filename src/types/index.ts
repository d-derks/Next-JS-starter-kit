export type newsFeed = {
  id: string;
  title: string;
  leadin: string;
  text: string;
  media: {
    src: string;
    ratios: string[];
    width: string;
    height: string;
  };
};
