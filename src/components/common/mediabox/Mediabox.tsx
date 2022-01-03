import Image from "next/image";
import classNames from "classnames";
import styles from "./mediabox.module.scss";
import { getDimenstionsFromRatio } from "../../../utils/getRatio";

type mediaProps = {
  media: {
    src: string;
    alt?: string;
    ratio?: string;
  };
  className?: string;
};

const Mediabox = ({ media, className }: mediaProps) => {
  const blockClass = classNames(styles.host, className);
  const { width, height } = getDimenstionsFromRatio(media.ratio);

  return (
    <Image
      className={blockClass}
      src={media.src}
      height={height}
      width={width}
      alt={media.alt}
      layout="responsive"
      objectFit="cover"
    />
  );
};

export default Mediabox;
