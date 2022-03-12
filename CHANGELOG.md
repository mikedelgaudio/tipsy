# Completed

## v0.1.0-beta

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
- [x] Ensure math for irrational decimals rounds up (RESOLVED BY num.toFixed())
- [x] Icons need various colors / new color scheme
- [x] Ensure input fields are a11y safe and in a form
- [x] Auto save from edit mode when user clicks out or away from focused box 
- [x] Handle scenario where recalculate is called twice when total is updated *NOT REPRODUCIBLE*
- [x] Ensure wording between delete/remove is consistent UX

## v0.1.1-beta

- [x] Add https://reactjs.org/docs/error-boundaries.html
- [x] Protect names from bad string input
- [x] Debug why iOS physical device is showing icons as blue (Due to path css selector)
- [x] Updated favicon to support dark / light modes
- [x] Modified CSS theme color

## v0.2.0-beta 

- nil