# SASS Architecture & Structure

This is a Template based on the 7-1 architecture and [Sass Guidelines](https://sass-guidelin.es) writing conventions.

Each folder contains a `README.md` file for explanations and informations.

Folders in the `scss/` folder have an `_index.scss` file that allows to load from a single entrypoint all modules if needed with the help of the `@forward` rule, using one single rule `@use 'folder_name' as *;` in our `main.scss` file. Be sure to browse the repository to see how it works.


```
css/                            # Compiled CSS
fonts/                          # Hosted fonts
icons/                          # Icons (svg preferably)
images/                         # Image assets
js/                             # JavaScript (scripts, libraries, modules etc…)
scss/                           # SCSS folder
|
|– abstracts/
|   |– _index.scss              # To import the whole folder if needed
|   |– _functions.scss          # Functions
|   |– _mixins.scss             # Mixins to include
|   |– _placeholders.scss       # Placeholders to extend
|   |– _variables.scss          # Variables, Maps
|   ...                         # Etc…
|
|– base/
|   |– _index.scss              # To import the whole folder if needed
|   |– _font-face.scss          # @font-face rules (if you're hosting your fonts)
|   |– _resets.scss             # Reset/normalize
|   |– _typography.scss         # Typography rules (font-size in each breakpoint etc…)
|   |– _Utilities.scss          # Utility classes
|   ...                         # Etc…
|
|– components/
|   |– _index.scss              # To import the whole folder if needed
|   |– _breadcrumbs.scss        # Breadcrumbs
|   |– _buttons.scss            # Buttons
|   |– _cards.scss              # Cards
|   |– _carousel.scss           # Carousel/Sliders
|   |– _checkbox.scss           # Custom checkboxes
|   |– _forms.scss              # Forms
|   |– _radio.scss              # Custom radio buttons
|   |– _select.scss             # Custom select inputs
|   |– _tables.scss             # Tables
|   ...                         # Etc…
|
|– layout/
|   |– _index.scss              # To import the whole folder if needed
|   |– _footer.scss             # Footer
|   |– _header.scss             # Header
|   |– _navigation.scss         # Navigation
|   |– _sidebar.scss            # Sidebar
|   ...                         # Etc…
|
|– pages/
|   |– home.scss                # Homepage specific stylesheet
|   ...                         # Etc…
|
`– main.scss                  # Main SCSS file to be compiled into CSS and linked accross all pages
```

# Requirements

Since the importing of files is with the [`@use`](https://sass-lang.com/documentation/at-rules/use) and [`@forward`](https://sass-lang.com/documentation/at-rules/forward) rules, [Dart-Sass](https://sass-lang.com/dart-sass) is required, install with your preferred method: [Install Sass](https://sass-lang.com/install).

# Methodology

When writing your HTML and CSS or SASS/SCSS, it is a good practice to follow a certain methodology or class naming convention like the [BEM](http://getbem.com/) methodology. It's purpose is to make your front-end code easier to read, understand, scale and manage.