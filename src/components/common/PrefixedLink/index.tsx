import Link from 'next/link';
import React from 'react';

type AdviceProps = {
  href: string;
  as?: string;
  children: any;
};

const PrefixedLink: React.FC<AdviceProps> = ({
  href,
  as = href,
  children,
  ...props
}) => {
  return (
    <Link
      href={href}
      style={{ textDecoration: 'none' }}
      as={`${process.env.pathPrefix}${as}`}
      {...props}>
      {children}
    </Link>
  );
};

export default PrefixedLink;
