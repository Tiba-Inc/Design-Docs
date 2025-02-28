# Overview
Controls are a set of UI elements that allow the user to input a certain type of content with a boolean type of setup. Controls consist of; <br>
- Checkboxes <br>
- Radio buttons <br>
- Icon switch (me control) <br>
- Toggles

# Checkbox
A checkbox consists of a small square and, typically, text that clearly communicates a binary condition that will be set or unset when the user clicks or touches it. Checkboxes typically, but not necessarily, appear in groups, and can be selected and deselected individually. 

## Interactive checkbox demo
<!-- Example -->
<label for="chkbox1" class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect">
  <input type="checkbox" id="chkbox1" class="mdl-checkbox__input">
  <span class="mdl-checkbox__label">Enable AutoSave</span>
</label>

!!! info
    In some cases a checkbox can be disabled by default. This is common in settings sections where a user is not allowed to make changes to a certain setting.

# Radio button
A radio button consists of a small circle and, typically, text that clearly communicates a condition that will be set when the user clicks or touches it. Radio buttons always appear in groups of two or more and, while they can be individually selected, can only be deselected by selecting a different radio button in the same group (which deselects all other radio buttons in the group).

## Interactive radio button demo
<!-- A group of radio buttons to control a camera's flash settings. -->
<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="flash1">
  <input checked class="mdl-radio__button" id="flash1" name="flash" type="radio"
   value="on">
  <span class="mdl-radio__label">Always on</span>
</label>
<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="flash2">
  <input class="mdl-radio__button" id="flash2" name="flash" type="radio" value="off">
  <span class="mdl-radio__label">Always off</span>
</label>
<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="flash3">
  <input class="mdl-radio__button" id="flash3" name="flash" type="radio" value="auto">
  <span class="mdl-radio__label">Automatic</span>
</label>

!!! info
    Like other controls, radio buttons have a disabled state and can be disabled by default in certain UI setups.


# Icon toggle (me control)
An icon-toggle consists of a user defined icon that indicates, by visual highlighting, a binary condition that will be set or unset when the user clicks or touches it. Like checkboxes, icon-toggles may appear individually or in groups, and can be selected and deselected individually.

Icon toggles are mostly common in scenarios when a user is editing text for instance chosing between bold and Italics. 

## Interactive icon toggle demo
<label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" for="icon-toggle-1">
  <input type="checkbox" id="icon-toggle-1" class="mdl-icon-toggle__input" checked>
  <i class="mdl-icon-toggle__label material-icons">format_bold</i>
</label>
<label class="mdl-icon-toggle mdl-js-icon-toggle mdl-js-ripple-effect" for="icon-toggle-2">
  <input type="checkbox" id="icon-toggle-2" class="mdl-icon-toggle__input">
  <i class="mdl-icon-toggle__label material-icons">format_italic</i>
</label>


# Switch/toggle
A switch consists of a short horizontal "track" with a prominent circular state indicator and, typically, text that clearly communicates a binary condition that will be set or unset when the user clicks or touches it. Like checkboxes, switches may appear individually or in groups, and can be selected and deselected individually. However, switches provide a more intuitive visual representation of their state: left/gray for off, right/colored for on. 

## Interactive switch/toggle demo
<label for="switch1" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">
  <input type="checkbox" id="switch1" class="mdl-switch__input">
  <span class="mdl-switch__label">Sound off/on</span>
</label>
