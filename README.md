# Tipsy App

Your best night out partner calculator web app

The best friend group payment calculator web app.

## Development Frontend

Tipsy runs with `https` on localhost to support the WebShareAPI.

- `cd frontend`
- `npm install`
- `npm run cert`
- `npm run dev`

## Roadmap

The roadmap provides a high level storyboard of future for the Tipsy project.

### Currently: v0.2.1-beta 

- [ ] Update/Fix SEO
- [ ] Update components to export {default} and rename to naming pattern of .component, .service, .dto

### Backlog

- [ ] Add undo functionality
- [ ] Create docker build and push GitHub Action to deploy
- [ ] Refactor CSS into CSS Modules
- [ ] Add About or Walkthrough Section
- [ ] Ability to split an item with a person
- [ ] Ability to share a link for 1 week

Migrate Redux to MobX:
- [ ] When resetting an app always generate a new uuidv4() to ensure error classes reset.
- [ ] Ensure multiple calls to save state subscriber is not taking too many calls
- [ ] Disallow the removal of all products for a person (look into Redux entities instead of looping through array)
- [ ] Determine why some state functions required `undefined` as type safe
- [ ] Investigate how to reduce calls in `math.ts`; this may involve redesigning the store to search by key.

## Docker build

```
docker buildx build --platform linux/arm64 -t mikedelgaudio/tipsy:arm64 .
docker buildx build --platform linux/amd64 -t mikedelgaudio/tipsy:amd64 .

docker push mikedelgaudio/tipsy:arm64
docker push mikedelgaudio/tipsy:amd64
```