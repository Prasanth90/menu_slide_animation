### Menu Drawer Sample

Live Demo at [Menu Drawer](http://demo-menu-slide.staara.ca/)

## Brief Overview

- React is used as view framework
- `transition` is used for animating the `menu`
-  Used `media queries` to set `100%` width for `menu` while rendering in small screens (400px in Big Screens)
-  KeyBoard Navigation
    - `Menu icon` will be focussed by default
    - Clicking `Enter` will open the `Menu`
    - `Tab` can be used to navigate the primary and secondary links
    - `Enter` key can used to `Open` a specific item (For now, links point to https://www.google.com)
    - `Escape` key closes the menu and focuses the `Menu` again.
- No javascript or css libraries used (Other than React)
-  Made Some minor changes to Font Sizes and Icon Widths just to keep the look and feel consistent.
    - Font Size 24px is used for primary links instead of 28px (Suggested in PDF)
    - Icon Width 18*18 is used instead of 40px (Suggested in PDF)
    
 
 ## Code:
 
 - [App.tsx](https://github.com/Prasanth90/menu_slide_animation/blob/main/src/App.tsx) is the root file that hosts both Header and Menu
 - [Header.tsx](https://github.com/Prasanth90/menu_slide_animation/blob/main/src/components/Header.tsx) renders the page Header
 - [Menu.tsx](https://github.com/Prasanth90/menu_slide_animation/blob/main/src/components/Menu.tsx) renders the page menu
 - All the styles are handled in [App.css](https://github.com/Prasanth90/menu_slide_animation/blob/main/src/App.css)


## Available Scripts

- To install the packages and run it locally 
   - `npm install`
   - `npm start`

- To build locally `npm run build`

- Developed and tested using `node v18.15.0` in Mac M1 (Monterey)


Live Demo at [Menu Drawer](http://demo-menu-slide.staara.ca/)

