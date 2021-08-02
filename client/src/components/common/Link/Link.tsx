import cn from "classnames";
import { useRouter } from "next/dist/client/router";
import { FC, ReactNode } from "react";
import { default as BaseLink } from "next/link";

type Props = {
  children: ReactNode;
  href: string;
  className?: string;
  activeClassName?: string;
  locale?: string;
};
export const Link: FC<Props> = ({
  children,
  href,
  className,
  activeClassName = "",
  locale,
}) => {
  const router = useRouter();
  console.log("router", router.asPath === href);

  return (
    <BaseLink href={href} locale={locale}>
      <a
        className={cn(className, {
          [activeClassName]: router.asPath === href,
        })}
      >
        {children}
      </a>
    </BaseLink>
  );
};
