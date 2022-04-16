# Tipsy - Weighted Tip and Tax Calculator

Paid for a night out with friends or a large dinner party? Add the items from your receipt and determine how much each person owes you with a weighted average of tip and taxes included.

## Development Frontend

Tipsy runs with `https` on localhost to support the WebShareAPI.

- `cd frontend`
- `npm install`
- `npm run cert`
- `npm run dev`

## Roadmap

The roadmap provides a high level storyboard of future for the Tipsy project.

### Currently: v1.0.0

Migrate Redux to MobX:
- [ ] Debounce inputs to prevent numerous state calls
- [ ] Disallow the removal of all products for a person
- [ ] Determine why some state functions required `undefined` as type safe
- [ ] Add functionality to restore error toasts from previous session
- [ ] Remove a11y-dialog in favor of native dialog element

### Backlog

- [ ] Add undo functionality
- [ ] Create docker build and push GitHub Action to deploy
- [ ] Add About or Walkthrough Section
- [ ] Ability to split an item with a person
- [ ] Ability to share a link for 1 week
- [ ] Add gtag events
- [ ] Investigate issue when clearing item name or person name where the input field auto fills the defaults but error message remains
- [ ] Investigate if all error toast clear screen when navigating away from /calculate (what happens if an error existed; user left and comes back?)



## Docker build

```
docker buildx build --platform linux/arm64 -t mikedelgaudio/tipsy:arm64 .
docker buildx build --platform linux/amd64 -t mikedelgaudio/tipsy:amd64 .

docker push mikedelgaudio/tipsy:arm64
docker push mikedelgaudio/tipsy:amd64
```
