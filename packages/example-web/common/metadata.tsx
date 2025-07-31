import Head from 'next/head';

type MetadataProps = {
  title: string;
  description?: string;
};

const DEFAULT_TITLE = '@expo/styleguide';

export function Metadata({ title, description }: MetadataProps) {
  const pageTile = title !== DEFAULT_TITLE ? `${title} - ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  const ogImage = getOGImageURL({ title, description });

  return (
    <Head>
      <title>{pageTile}</title>
      <meta name="twitter:title" content={pageTile} />
      <meta property="og:title" content={pageTile} />
      {description && (
        <>
          <meta name="description" content={description} />
          <meta name="twitter:description" content={description} />
          <meta property="og:description" content={description} />
        </>
      )}
      <meta property="og:image" content={ogImage} />,
      <meta property="og:image:url" content={ogImage} />,
      <meta property="og:image:secure_url" content={ogImage} />,
      <meta name="twitter:image" content={ogImage} />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon.png" />
    </Head>
  );
}

export function getOGImageURL({ title, description }: MetadataProps) {
  const paramsObject = {
    title: title ?? DEFAULT_TITLE,
    description,
    iconName: 'Brush01Icon',
  };

  const cleanParamsObject = Object.fromEntries(
    Object.entries(paramsObject).filter(([_, value]) => value !== undefined)
  ) as Record<string, string>;

  return `https://og.expo.dev/?theme=marketing&${new URLSearchParams(cleanParamsObject).toString()}`;
}
