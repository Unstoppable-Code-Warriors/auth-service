import { Link } from "./link";

type LogoProps = {
  full?: boolean;
  href?: string;
  noLink?: boolean;
  className?: string;
};

export function Logo(props: LogoProps) {
  const { full, noLink, href, className = "" } = props;
  
  const Component = noLink ? "span" : Link;
  const logoText = "BDGAD";

  return (
    <Component 
      href={noLink ? undefined as any : href || "/"} 
      className={`font-bold text-xl text-gray-900 dark:text-white ${className}`}
    >
      {logoText}
    </Component>
  );
}
