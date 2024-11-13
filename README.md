# Pycon APAC 2024 FE Static
Pycon APAC 2024 website in static mode.

## Requirement
- Node 20
- pnpm 9

## Installation
- install depedencies `pnpm install`
- change vite.config.ts key base to `/{github repository name}`
- change ./src/settings.ts PREFIX = `/{github repository name}` (must be same with vite.config.ts)
- run in development mode `pnpm run dev`
- Open http://localhost:5173/{github repository name}

## Deployment
- build project to docs folder `pnpm run build`
- push changes to github repository branch main
- open on github pages url https://bimaadi.github.io/Pycon-APAC-2024-Static/
