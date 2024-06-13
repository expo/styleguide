import { Themes, useTheme } from '@expo/styleguide';
import { BuildIcon } from '@expo/styleguide-icons/dist/custom/BuildIcon';
import { addHighlight, CommandItemBase } from '@expo/styleguide-search-ui';
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
    <CommandItemBase value={`quick-action-${item.label}`} onSelect={toggleTheme}>
      <div className="inline-flex gap-3 items-center">
        <Icon className="text-icon-secondary" />
        <p className="text-xs font-medium" dangerouslySetInnerHTML={{ __html: addHighlight(item.label, query) }} />
      </div>
    </CommandItemBase>
  );
};
