# Base

The `scss/base/` folder holds the basic code for the project. Defining some standard styles and rules (Fonts, Typography, Resets, Utility classes).

## Font-face

`scss/base/_font-face.scss` contains all your font-face rules with the help of a font-face mixin that takes care of all fonts extentions.

## Resets

`scss/base/_resets.scss` contains all your reseting/normalize rules.

## Typography

`scss/base/_typography.scss` contains any rules for typography (responsive font-sizes etc…).

## Utilities

`scss/base/_utilities.scss` contains classes that have pre-defined properties. Any utility class comes with a prefix (`.#{$prefix}class`) to avoid conflicts with other frameworks or personal named classes. The prefix can be modified from `scss/abstracts/_variables.scss` if needed.