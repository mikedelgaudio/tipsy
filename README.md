# Tipsy App

Your best night out partner calculator web app

The best friend group payment calculator web app.

## Development Frontend

- `cd frontend`
- `npm install`
- `npm run husky:prepare`
- `npm run dev`

## Roadmap

The roadmap provides a high level storyboard of future for the Tipsy project.

### Currently: v0.2.0-beta 

- [ ] Add modal to share on iOS WebShare API or fallback to copy paste (share button should default to web)
- [ ] Fix issue when resetting app and error classes or toast not clearing
- [ ] Fix issue for dialog X icon skewed

### Backlog

- [ ] Add undo functionality
- [ ] Create docker build and push GitHub Action to deploy
- [ ] Update components to export {default} rather than duplicate name imports
- [ ] Disallow the removal of all products for a person (look into Redux entities instead of looping through array)
- [ ] Refactor CSS into CSS Modules
- [ ] Add About or Walkthrough Section
- [ ] Ability to split an item with a person
- [ ] Ability to share a link for 1 week
- [ ] Determine why some state functions required `undefined` as type safe
- [ ] Refactor how state is updated, is recalculate a side effect use thunks?
- [ ] Ensure multiple calls to save state subscriber is not taking too many calls

## Docker build

```
docker buildx build --platform linux/arm64 -t mikedelgaudio/tipsy:arm64 .
docker buildx build --platform linux/amd64 -t mikedelgaudio/tipsy:amd64 .

docker push mikedelgaudio/tipsy:arm64
docker push mikedelgaudio/tipsy:amd64
```