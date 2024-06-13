import { BuildIcon } from '@expo/styleguide-icons/dist/custom/BuildIcon';
import { addHighlight } from '@expo/styleguide-search-ui';
import { Command } from 'cmdk';
import Link from 'next/link';
import { useRef, type ComponentType, HTMLAttributes } from 'react';

type Props = {
  item: StyleguideItemType;
  query: string;
  onSelect?: () => void;
};

export type StyleguideItemType = {
  label: string;
  url: string;
  Icon?: ComponentType<HTMLAttributes<SVGSVGElement>>;
};

export const StyleguideItem = ({ item, onSelect, query }: Props) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const Icon = item.Icon ?? BuildIcon;

  return (
    <Link href={item.url} ref={linkRef}>
      <Command.Item
        value={`expo-styleguide-${item.url}`}
        onSelect={() => {
          linkRef?.current?.click();
          onSelect?.();
        }}>
        <div className="inline-flex gap-3 items-center">
          <Icon className="text-icon-secondary" />
          <p className="text-xs font-medium" dangerouslySetInnerHTML={{ __html: addHighlight(item.label, query) }} />
        </div>
      </Command.Item>
    </Link>
  );
};
