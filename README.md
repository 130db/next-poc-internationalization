# Internationalization starter kit

## Documentation

[Documentation of **next-intl**](https://next-intl-docs.vercel.app/docs/getting-started)

This project serves as a starter kit for implementing a NextJS internationalization

## For testing / trying out

```shell
git clone https://github.com/130db/next-poc-internationalization.git
cd next-poc-internationalization
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

This project uses [next-intl](https://github.com/amannn/next-intl) library.

### Support

Follow me on X (Twitter)

Latviski: [X/Aigars Sukurs](https://twitter.com/AigarsSukurs)<br>
English: [X/130db](https://twitter.com/130db)

or support with a [Tip](https://revolut.me/130dbs) if you found it useful for your project

For POCes I use my own NextJS project template. Some files my be redudant
