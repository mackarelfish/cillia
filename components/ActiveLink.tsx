import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  href: string;
};

// eslint-disable-next-line react/prop-types
const ActiveLink: React.FC<Props> = ({ href, children }) => {
  const router = useRouter();

  let className = (children as any)?.props.className || "";
  if (router.pathname === href) {
    className = `${className} selected`;
  }

  return (
    <Link href={href}>
      {React.cloneElement(children as any, { className })}
    </Link>
  );
};

export default ActiveLink;
