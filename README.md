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

### Currently: v0.1.1-beta

- nil

### v0.2.0-beta Roadmap

- TBD

### Backlog

- [ ] Add warning modal when user is clicks the 'Reset' button
- [ ] Add undo functionality
- [ ] Disallow the removal of all products for a person (look into Redux entities instead of looping through array)
- [ ] Create docker build and push GitHub Action to deploy
- [ ] Update components to export {default} rather than duplicate name imports
- [ ] Refactor CSS into CSS Modules
- [ ] Add About or Walkthrough Section
- [ ] Save session / state to local storage
- [ ] Ability to split an item with a person
- [ ] Ability to share a link for 1 week
- [ ] Determine why some state functions required `undefined` as type safe
- [ ] Refactor how state is updated, is recalculate a side effect use thunks?
