# Internationalization starter kit

## Documentation

[Documentation of **next-intl**](https://next-intl-docs.vercel.app/docs/getting-started)

For POCes I use my NextJS project template. Some files may be redundant

## For testing / trying out

```shell
git clone https://github.com/130db/next-poc-internationalization.git
cd next-poc-internationalization.git
yarn install
yarn dev
```

## Integrate into existing project

```
├── src
│   ├── locales
│   │   ├── config.ts (1)
│   │   ├── en.json (2)
│   │   └── ...
│   ├── i18n.ts (3)
│   ├── middleware.ts (4)
│   └── app
│       └── [locale]
│           ├── layout.tsx (5)
│           └── page.tsx (6)
└── next.config.mjs (7)
```

Shell commands. You can create files manually in your IDE

```shell
cd /path/to/project
yarn add next-intl
mkdir -p src/locales
mkdir -p src/app/\[locale\]
touch src/i18n.ts
touch src/middleware.ts
touch src/locales/config.ts
touch src/locales/en.json
# touch src/locales/lv.json
```

Check this project's source code for file contents
