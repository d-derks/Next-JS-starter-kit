import React from "react";
import Link from "next/link";
import Typography from "#components/common/typography/Typography";
import Mediabox from "#components/common/mediabox/Mediabox";
import styles from "./card.module.scss";
import { getRatioImage } from "../../../utils/getRatio";

type cardProps = {
  title: string;
  leadin?: string;
  href?: string;
  images: {
    ratios: string[];
  };
};

const Card = ({ title, leadin, href, images }: cardProps) => {
  const ratio = "3_2";
  const image = getRatioImage(ratio, images);

  return (
    <article>
      <Link href={href}>
        <a>
          <Mediabox
            className={styles.media}
            media={{ src: image, ratio: ratio }}
          />
          <div className={styles.textbox}>
            <Typography text={title} variant="h4" />
            <Typography text={leadin} variant="p" />
          </div>
        </a>
      </Link>
    </article>
  );
};

export default Card;
