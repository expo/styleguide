import { Themes, useTheme } from '@expo/styleguide';
import { BuildIcon } from '@expo/styleguide-icons';
import { addHighlight } from '@expo/styleguide-search-ui';
import { Command } from 'cmdk';
import { type ComponentType, HTMLAttributes } from 'react';

type Props = {
  item: QuickActionItemType;
  query: string;
  onSelect?: () => void;
};

export type QuickActionItemType = {
  label: string;
  Icon?: ComponentType<HTMLAttributes<SVGSVGElement>>;
};

export const QuickActionToggleThemeItem = ({ item, query }: Props) => {
  const { themeName, setDarkMode, setLightMode } = useTheme();
  const Icon = item.Icon ?? BuildIcon;

  function toggleTheme() {
    if (themeName === Themes.AUTO || themeName === Themes.LIGHT) {
      setDarkMode();
    } else {
      setLightMode();
    }
  }

  return (
    <Command.Item value={`quick-action-${item.label}`} onSelect={toggleTheme}>
      <div className="inline-flex gap-3 items-center">
        <Icon className="text-icon-secondary" />
        <p className="text-xs font-medium" dangerouslySetInnerHTML={{ __html: addHighlight(item.label, query) }} />
      </div>
    </Command.Item>
  );
};
