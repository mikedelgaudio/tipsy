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

### Next steps

- [ ] Fix error toast dismissed too early, need to useRef to specify which toast to remove from screen
- [ ] Add error handling for invalid currency strings, this requires state to only be modified on save (not per char)

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
