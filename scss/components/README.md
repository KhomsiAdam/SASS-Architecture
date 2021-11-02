# Components

The `scss/components/` folder is for reusable elements like widgets. It contains all kind of specific modules like a buttons, cards, sliders... The application should be mostly composed of tiny modules.

When creating a new file/component be sure to import the abstracts using `@use '../abstracts/' as *;`, add the new component in the `_index.scss` using `@forward 'component_name';` and use the prefix `.#{$prefix}class` to avoid conflicts with other frameworks or personal classes.