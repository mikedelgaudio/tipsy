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

- [ ] Homepage primary button does not have hover effect

### Backlog

- [ ] Add undo functionality
- [ ] Create docker build and push GitHub Action to deploy
- [ ] Add About or Walkthrough Section
- [ ] Ability to split an item with a person
- [ ] Ability to share a link for 1 week
- [ ] Add gtag events
- [ ] Investigate issue when clearing item name or person name where the input field auto fills the defaults but error message remains
- [ ] Investigate if all error toast clear screen when navigating away from /calculate (what happens if an error existed; user left and comes back?)
- [ ] Debounce inputs to prevent numerous state calls
- [ ] Remove a11y-dialog in favor of native dialog element
- [ ] Consider breaking functions outside of calculation class

## Docker build

```
docker buildx build --platform linux/arm64 -t mikedelgaudio/tipsy:arm64 .
docker buildx build --platform linux/amd64 -t mikedelgaudio/tipsy:amd64 .

docker push mikedelgaudio/tipsy:arm64
docker push mikedelgaudio/tipsy:amd64
```
