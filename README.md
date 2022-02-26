# Tipsy App

Your best night out partner calculator web app

The best friend group payment calculator web app.

## Development Frontend

- `cd frontend`
- `npm install`
- `npm run dev`

## Roadmap

### Completed

- [x] EDIT_START Event Title
- [x] EDIT_SAVE Event Title
- [x] EDIT_STOP Event Title
- [x] RESET Form
- [x] ADD New Person
- [x] DELETE Person (only allowed when more than 1 persons)
- [x] EDIT_START Person
- [x] EDIT_SAVE Person
- [x] EDIT_STOP Person
- [x] Rename all dispatch functions with new naming scheme for clarity (Redux Hooks useDispatch/useSelector)
- [x] Fix component re-render when only updating the total value, all item rows must render new values
- [x] State to only be modified on save (not per char) however this could maybe be refactored
- [x] Regardless of price errors, allow name changes to dispatch state
- [x] Notify user $ and , not allowed or somehow display it to them and clean after
- [x] when error trigger a CSS class to highlight the line item rather than toast
- [x] Remove UI State for local useState to save dispatch steps
- [x] Migrate all icons to React SVG components and use new CSS classes to colorize

### Next steps

- [ ] Handle scenario where adding food items triggers toast too many times
- [ ] Ensure input fields are a11y safe and in a form

### Future ideas

- [ ] Add undo functionality
- [ ] Refactor CSS into CSS Modules
- [ ] Icons need various colors / new color scheme
- [ ] Add About or Walkthrough Section
- [ ] Add https://reactjs.org/docs/error-boundaries.html
- [ ] Save session / state to local storage
- [ ] Ability to split an item with a person
- [ ] Ability to share a link for 1 week
- [ ] Ensure wording between delete/remove is consistent UX
- [ ] Refactor how state is updated?
- [ ] Create docker build and push GitHub Action to deploy alpha site
