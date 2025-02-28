# Overview
Text fields are one of the most common features of UI elements and appear almost everywhere throughout the UI. A text field consists of a horizontal line indicating where keyboard input can occur and, typically, text that clearly communicates the intended contents of the text field. The Material design text field component provides various types of text fields, and allows you to add both display and click effects.

## Interactive text field demo
Visual variations for the different types of text fields.

# Input types

## Text input
<!-- Simple Textfield -->
<form action="#">
  <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" id="sample1">
    <label class="mdl-textfield__label" for="sample1">Text...</label>
  </div>
</form>


## Numeric input
<!-- Numeric Textfield -->
<form action="#">
  <div class="mdl-textfield mdl-js-textfield">
    <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample2">
    <label class="mdl-textfield__label" for="sample2">Number...</label>
    <span class="mdl-textfield__error">Input is not a number!</span>
  </div>
</form>


## Text with floating label
<!-- Textfield with Floating Label -->
<form action="#">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="sample3">
    <label class="mdl-textfield__label" for="sample3">Text...</label>
  </div>
</form>


## Numeric with floating label
<!-- Numeric Textfield with Floating Label -->
<form action="#">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="sample4">
    <label class="mdl-textfield__label" for="sample4">Number...</label>
    <span class="mdl-textfield__error">Input is not a number!</span>
  </div>
</form>


## Multiple line input
<!-- Floating Multiline Textfield -->
<form action="#">
  <div class="mdl-textfield mdl-js-textfield">
    <textarea class="mdl-textfield__input" type="text" rows= "3" id="sample5" ></textarea>
    <label class="mdl-textfield__label" for="sample5">Text lines...</label>
  </div>
</form>



## Expanding input field (expands on tap)
<!-- Expandable Textfield -->
<form action="#">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
    <label class="mdl-button mdl-js-button mdl-button--icon" for="sample6">
      <i class="material-icons">search</i>
    </label>
    <div class="mdl-textfield__expandable-holder">
      <input class="mdl-textfield__input" type="text" id="sample6">
      <label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
    </div>
  </div>
</form>

