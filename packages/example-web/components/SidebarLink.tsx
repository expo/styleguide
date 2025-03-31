import { mergeClasses } from '@expo/styleguide';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  href: string;
  text: string;
  size?: 'sm' | 'md';
};

export function SidebarLink({ href, text, size = 'md' }: Props) {
  const { pathname } = useRouter();
  return (
    <Link
      href={href}
      className={mergeClasses(
        'flex items-center gap-2 font-medium transition-colors hover:underline',
        pathname === href && 'text-link',
        size === 'sm' && 'pl-2 heading-base',
        size === 'md' && 'heading-xl',
        'max-sm-gutters:mr-2 max-sm-gutters:inline-flex max-sm-gutters:pl-0'
      )}>
      <span>{text}</span>
    </Link>
  );
}
