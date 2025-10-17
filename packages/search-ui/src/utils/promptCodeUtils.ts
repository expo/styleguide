import { Prism } from 'prism-react-renderer';
import type { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { Children, isValidElement } from 'react';

const globalScope = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : undefined;
if (globalScope) {
  (globalScope as { Prism?: typeof Prism }).Prism = Prism;
}

let prismReady: Promise<void> | null = null;
export function loadPrismLanguages() {
  if (!prismReady) {
    prismReady = (async () => {
      await Promise.all([
        import('prismjs/components/prism-json'),
        import('prismjs/components/prism-yaml'),
        import('prismjs/components/prism-typescript'),
        import('prismjs/components/prism-tsx'),
        import('prismjs/components/prism-jsx'),
        import('prismjs/components/prism-bash'),
        import('prismjs/components/prism-markdown'),
      ]);
    })();
  }
  return prismReady;
}

loadPrismLanguages().catch(() => {});

export function whenPrismReady(): Promise<void> {
  return loadPrismLanguages();
}

export const LANGUAGES_REMAP: Record<string, string> = {
  sh: 'bash',
};

export function parseValue(value: string) {
  return { value } as { value: string };
}

export function findNodeByPropInChildren<T>(
  element: ReactElement,
  propToFind: string
): PropsWithChildren<{ [propToFind: string]: T }> | T | null {
  if (!element || typeof element !== 'object') {
    return null;
  }

  if (isValidElement<PropsWithChildren<{ [prop: string]: T }>>(element)) {
    return element.props;
  }

  if (isValidElement<PropsWithChildren>(element)) {
    const nodeChildren = element.props.children;

    if (Array.isArray(nodeChildren)) {
      for (const child of Children.toArray(nodeChildren)) {
        const allProps = findNodeByPropInChildren<T>(child as ReactElement, propToFind);
        if (allProps) {
          return allProps;
        }
      }
    } else {
      return findNodeByPropInChildren<T>(nodeChildren as ReactElement, propToFind);
    }
  }

  return null;
}

export function toString(node: ReactNode): string {
  if (typeof node === 'string') {
    return node;
  } else if (Array.isArray(node)) {
    return node.map(toString).join('');
  } else if (hasChildren(node)) {
    return toString(node.props.children);
  }

  return '';
}

function hasChildren(node: ReactNode): node is ReactElement<PropsWithChildren<Record<string, unknown>>> {
  return isValidElement<PropsWithChildren>(node);
}

export function getCodeBlockDataFromChildren(children?: ReactNode, className?: string) {
  if (typeof children === 'string') {
    return {
      ...parseValue(children),
      language: className ? className.split('-')[1] : 'jsx',
    };
  }
  const codeNode = findNodeByPropInChildren<PropsWithChildren<{ className: string }>>(
    children as ReactElement,
    'className'
  );
  const code = parseValue(toString(codeNode?.children));
  const codeLanguage = typeof codeNode?.className === 'string' ? codeNode.className.split('-')[1] : 'jsx';

  return { ...code, language: codeLanguage };
}

export function getCodeData(value: string, className?: string) {
  loadPrismLanguages().catch(() => {});
  let lang = className?.split('-').at(-1)?.toLowerCase();
  if (!lang) {
    return value;
  }

  if (lang in LANGUAGES_REMAP) {
    lang = LANGUAGES_REMAP[lang];
  }

  const grammar = Prism.languages[lang as keyof typeof Prism.languages];
  if (!grammar) {
    return value;
  }
  return Prism.highlight(value, grammar, lang);
}
