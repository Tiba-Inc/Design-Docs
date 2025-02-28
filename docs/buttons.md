# Overview
Buttons communicate actions that users can take all around the UI. They cover the largest portion of the UI making them the most common UI element.

# Principles
- Identifiable <br>
Buttons should indicate that they can trigger an action in the easiest way possible.

- Findable <br>
Buttons should be easy to find among other elements on a page including among other buttons

- Clear <br>
A button's action and state e.g disabled, pressed etc should be as clear as possible

- Motion <br>
All buttons have a bit/form of animation to them (the ripple) to communicate to users a change in state from rest to pressed. Some buttons fill up when loading.

# Types
Buttons have a number of variations and types and the role each plays is based on what it does in a given UI incident/page. 
There are 9 types of buttons namely;

- Elevated <br>
- Filled <br>
- Filled tonal <br>
- Outlined <br>
- Text buttons <br>
- Icon only buttons <br>
- Segmented buttons (commonly called tabs) <br>
- Floating Action Buttons (FAB)<br>
- Extended FAB

!!! note "Note"
    The button types; elevated, filled, tonal (and all its variants), outlined and text only buttons all have the same padding. This is to have a uniform spacing when two buttons are in the same area like in a bottom sheet. Don't treat text only buttons like they are just styled text.

# Interactive button demo
Visual variations for the different button types. 

!!! note "Note"
    For button types not in the demo please refer to the Figma file to see how it looks like

# Button Types

## FABs

| Name                | Example                                                                 |
|---------------------|-------------------------------------------------------------------------|
| **Colored FAB**     | <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored"><i class="material-icons">add</i></button> |
| **Colored FAB with ripple** | <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored"><i class="material-icons">add</i></button> |
| **Plain FAB**       | <button class="mdl-button mdl-js-button mdl-button--fab"><i class="material-icons">add</i></button> |
| **Plain FAB with ripple** | <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect"><i class="material-icons">add</i></button> |
| **Disabled FAB**    | <button class="mdl-button mdl-js-button mdl-button--fab" disabled><i class="material-icons">add</i></button> |
| **Small FAB**       | <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"><i class="material-icons">add</i></button> |
| **Small colored FAB** | <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored"><i class="material-icons">add</i></button> |
| **Mini FAB with ripple** | <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--mini-fab"><i class="material-icons">add</i></button> |

## Elevated, Filled, Filled Tonal
| Name                | Example                                                                 |
|---------------------|-------------------------------------------------------------------------|
| **Colored button (rest)** | <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Button</button> |
| **Colored button (with ripple)** | <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored">Button</button> |
| **Accent-colored button** | <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Button</button> |
| **Accent-colored button (with ripple)** | <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Button</button> |
| **Raised Button**   | <button class="mdl-button mdl-js-button mdl-button--raised">Button</button> |
| **Raised Button with ripple** | <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Button</button> |
| **Flat button**     | <button class="mdl-button mdl-js-button">Button</button> |
| **Flat button with ripple** | <button class="mdl-button mdl-js-button mdl-js-ripple-effect">Button</button> |
| **Disabled flat button** | <button class="mdl-button mdl-js-button" disabled>Button</button> |
| **Primary-colored flat button** | <button class="mdl-button mdl-js-button mdl-button--primary">Button</button> |


## Icon only buttons

| Name                | Example                                                                 |
|---------------------|-------------------------------------------------------------------------|
| **Icon Button**     | <button class="mdl-button mdl-js-button mdl-button--icon"><i class="material-icons">mood</i></button> |
| **Icon Button with ripple** | <button class="mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect"><i class="material-icons">mood</i></button> |


