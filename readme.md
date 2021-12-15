# Hugo Starter Kit

## Pre-request
- Nodejs
- NPM
- Hugo

## Installation

```bash
hugo new site site
```

This bash script will be generate your hugo blog and named as "site". 
If you want to use another name instead site, you must change path of webpack output at webpack.config.js and path of css purge at tailwind.css

```bash
npm install
```

This bash script will be download npm dependecies that needed in development.

## Important directories

### ./src

This directories is place to put your js and css files and will be bundle by webpack.

### ./site/layouts/partials/assets

This directories is html tag that linked with your bundle js and css file from webpack. Be careful in here, cause this file will be generate everytime you change the style that linked with tailwindcss purge, so will trigger infinite loop bundle. 

To solve this issues, you must pay attention in tailwind.config.js especially at purge.

You must to call this file in your main page html. Example {{ partial "assets/style.html" }} at head and {{ partial "assets/script.html" }} at bottom before closing body tag.

## Important files

### tailwind.config.js

You must pay attention in tailwind.config.js especially at purge. More specific the file or directory, more better.

#### Dont

```js
purge: {
    enabled: true,
    content: [
      './site/layouts/*.html',
      './site/layouts/partials/*.html',
    ]
  }
```

#### Do

```js
purge: {
    enabled: true,
    content: [
      './site/layouts/list.html',
      './site/layouts/articles/*.html',
      './site/layouts/categories/*.html',
      './site/layouts/partials/components/*.html',
      './site/layouts/partials/illustrations/*.html',
      './src/js/*.js',
      './src/css/*.css',
    ]
  }
```

## Production build

First run build for your js and css file, then go to site directories and build your hugo project

```bash
npm run build

cd ./site

hugo --minify
```

## Development mode

First run dev for watch your js and css file.

```bash
npm run dev
```

Open your second terminal, then go to site directories and run hugo development server.

```bash
cd ./site

hugo server -D
```
