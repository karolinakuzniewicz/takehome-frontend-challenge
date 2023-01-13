import { SVGProps } from "react";

import HeartIcon from "../public/icons/heart.svg";
import HeartOutlineIcon from "../public/icons/heart-outline.svg";
import LinkIcon from "../public/icons/link.svg";

export const Icons = {
  heart: HeartIcon,
  "heart-outline": HeartOutlineIcon,
  link: LinkIcon,
};

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: keyof typeof Icons;
}

export const Icon = ({ color, name, ...props }: IconProps) => {
  const Icon = Icons[name] as unknown as (
    props: SVGProps<SVGSVGElement>
  ) => JSX.Element;

  return (
    <Icon
      {...props}
      aria-label={name || props["aria-label"]}
      fill={color || "none"}
    />
  );
};
