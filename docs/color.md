# Color Documentation

As stated, we follow **Material 3 (M3)** and **Material 2 (M2)** color guidelines to ensure consistency and accessibility in the color system for the application.

## Overview
The color system defines key palettes that create harmony across the app. It includes **primary**, **secondary**, and **tertiary** colors, alongside background, surface, and error colors.

Colors give users context within their workflow and create a hierarchy of actions within the UI. Items in a selected or keyboard focus state are given visual importance since they relate to a user’s immediate actions.


## **Color Schemes**

### **Primary Colors**
- **Primary** (`#8a4a65`): Main color for branding.
- **On Primary** (`#ffffff`): Used for text/icons on primary color.
- **Primary Container** (`#ffd9e5`): Elevated surfaces using primary.
- **On Primary Container** (`#390721`): Text/icons on primary container.

### **Secondary Colors**
- **Secondary** (`#705d0d`): Complementary color for primary.
- **On Secondary** (`#ffffff`): Text/icons on secondary color.
- **Secondary Container** (`#fce186`): Surface container for secondary.
- **On Secondary Container** (`#231b00`): Text/icons on secondary container.

### **Tertiary Colors**
- **Tertiary** (`#595892`): Alternative accent color.
- **On Tertiary** (`#ffffff`): Text/icons on tertiary color.
- **Tertiary Container** (`#e2dfff`): Surface container for tertiary.
- **On Tertiary Container** (`#15134a`): Text/icons on tertiary container.


# **Demo**

## Color picker

<div class="color-picker-container">
  <div class="color-picker">
    <label for="primary-color">Pick a Primary Color:</label>
    <input type="color" id="primary-color" value="#6200ea">
  </div>

  <div class="color-picker">
    <label for="secondary-color">Pick a Secondary Color:</label>
    <input type="color" id="secondary-color" value="#03dac6">
  </div>
</div>

## Button with Ripple Effect
<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect" id="demo-button">
  Click Me
</button>

## Card Component
<!-- Square card -->
<style>
.demo-card-square.mdl-card {
  width: 320px;
  height: 320px;
}
.demo-card-square > .mdl-card__title {
  color: #fff;
  background:
    url('https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') bottom right 15% no-repeat #46B6AC;
}
</style>

<div class="demo-card-square mdl-card mdl-shadow--2dp" id="demo-card">
  <div class="mdl-card__title mdl-card--expand">
    <h2 class="mdl-card__title-text">Update</h2>
  </div>
  <div class="mdl-card__supporting-text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Aenan convallis.
  </div>
  <div class="mdl-card__actions mdl-card--border">
    <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      View Updates
    </a>
  </div>
</div>



## Slider Component
<input class="mdl-slider mdl-js-slider" type="range" min="0" max="100" value="50" id="demo-slider">


## **Error & Background Colors**
We use color to assign generic meanings to a subset of colors in order to set consistent expectations for users. These meanings are codified in design tokens and used throughout components.

Semantics can be used in a variety of ways to communicate meaning. Semantic meanings include informative, accent, negative, notice, and positive. Use semantic colors to clearly and predictably communicate with a component’s appearance. When using color with semantic meaning, you must also display text or an icon in order to ensure the meaning is not lost for users who are unable to see or differentiate colors.
<br>
- **Error** (`#ba1a1a`): Used for errors and warnings.
- **On Error** (`#ffffff`): Text/icons on error color.
- **Error Container** (`#ffdad6`): Surface for error alerts.
- **On Error Container** (`#410002`): Text/icons on error container.
- **Background** (`#fff8f8`): Main app background.
- **On Background** (`#21191c`): Text/icons on background.

# Error
Use error roles to communicate error states, such as an incorrect password entered into a text field.

There are four error roles:
- Error – Attention-grabbing color against surface for fills, icons, and text, indicating urgency
- On error – Text and icons against error
- Error container – Attention-grabbing fill color against surface
- On error container – Text and icons against error container


!!! tip

    Error is an example of a static color (it doesn't change even in dynamic color schemes). Error color roles are made static by default with any dynamic color scheme.


# **Material 3 Adaptations**
- Uses **Surface Containers** (`Surface Container`, `Surface Container High`, `Surface Container Highest`) to provide depth.
- **Primary, Secondary, and Tertiary Fixed** colors for better adaptability.
- **Surface Tint** and **Inverse Primary** for advanced theming.
- **Outline Variant** provides an alternative for outlines in dark mode.

## **Material 2 Adaptations**
- Primary/Secondary color pairs remain consistent for **light** and **dark themes**.
- Uses **Scrim** (`#000000`) for overlays and modals.
- Adapts **Typography Colors** (`On Surface`, `On Surface Variant`) to maintain readability.


## **Accessibility Considerations**
- All foreground colors meet **WCAG contrast ratio** standards.
- Uses **contrast pairs** (e.g., `On Primary` and `Primary`) for text legibility.
- **Error colors** are distinguishable from other states to reduce confusion.



!!! tip

    For further customization, refer to the **Material Design color guidelines**: [Material 3](https://m3.material.io/) and [Material 2](https://m3.material.io/styles/color/system/how-the-system-works).
