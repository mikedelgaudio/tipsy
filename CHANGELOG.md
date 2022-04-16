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

- [x] Event title does not allow whitespaces?
- [x] Save session / state to local storage
- [x] Add warning modal when user is clicks the 'Reset' button
- [x] Fix issue for dialog X icon skewed
- [x] Add ability to use WebShare API (setup localhost https)
- [x] Created dialog component that is reusable for reset and share
- [x] Create copy / paste functionality if no WebShare API
- [x] Create ability to email the WebShare API info 
- [x] Display full button text on footer event actions 
- [x] Fix issue on mobile screens where edit mode is overflowing due to white-space
- [x] Investigate issue when adding in partial decimals rounds down (such as: 6.5, 2.2, etc.)
- [x] Fix issue when resetting app and error classes or toast not clearing (clear all toast too)

 ## v0.2.1-beta 
 - [x] Display WebShareAPI only on viewports with less than 576px
 - [x] Update components to export {default} and rename to naming pattern of .component, .service, .dto
 - [x] Update/Fix SEO

## v0.3.0-beta
- [x] Add Google Analytics Tag
- [x] Add WelcomeView as Hero Banner 
- [x] Setup React Router logic including 404 page
- [x] Add JIT Open Props library 

## v1.0.0
- [x] Remove all of Redux in favor of MobX
- [x] Refactored all components to use MobX observables
- [x] When resetting an app always generate a new uuidv4() to ensure error classes reset.
- [x] Ensure multiple calls to save state subscriber is not taking too many calls
- [x] Investigate how to reduce calls in `math.ts`; this may involve redesigning the store to search by key.
- [x] Refactor CSS into CSS Modules (declining this suggestion for now)
- [x] Determine why some state functions required `undefined` as type safe (used filter instead of map)
