# Expo styleguide

A collection of packages use to share styles and icons across Expo websites and projects.

## Get started

Install dependencies with

```bash
yarn
```

Then build the packages with

```bash
yarn build
```

Then develop with

```bash
yarn dev
```

## Releasing new versions

This repo uses [changesets](https://github.com/changesets/changesets). To start a release, run:

```bash
yarn create:release
```

This will create a changeset file. Once created, run

```bash
yarn version
```

Then commit the changes and run

```bash
yarn publish
```
