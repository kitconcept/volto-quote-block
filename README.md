# Volto Quote Block

[![NPM](https://img.shields.io/npm/v/@kitconcept/volto-quote-block.svg)](https://www.npmjs.com/package/@kitconcept/volto-quote-block)
[![Build Status](https://github.com/kitconcept/volto-quote-block/actions/workflows/code.yml/badge.svg)](https://github.com/kitconcept/volto-quote-block/actions)
[![Build Status](https://github.com/kitconcept/volto-quote-block/actions/workflows/unit.yml/badge.svg)](https://github.com/kitconcept/volto-quote-block/actions)
[![Build Status](https://github.com/kitconcept/volto-quote-block/actions/workflows/acceptance.yml/badge.svg)](https://github.com/kitconcept/volto-quote-block/actions)

<img alt="kitconcept GmbH" width="200px" src="https://kitconcept.com/logo.svg">

The Volto Quote Block allows editors to add a quote to a Volto page.

## Installation

Create a new Volto project (you can skip this step if you already have one):

```
npm install -g yo @plone/generator-volto
yo @plone/volto my-volto-project --addon @kitconcept/volto-quote-block
cd my-volto-project
```

Add `@kitconcept/volto-quote-block`to your package.json:

```
"addons": [
    "@kitconcept/volto-quote-block"
],

"dependencies": {
    "@kitconcept/volto-quote-block": "*"
}
```

Download and install the new add-on by running:

```
yarn install
```

Start Volto with:

```
yarn start
```

Go to http://localhost:3000, login, create a new page. The quote block will show up in the Volto blocks chooser.

## Block configuration

#### `showImageField`

This option will enable an image and an alignment widget in the block settings, allowing you to add an image to your quote block and align it, left, right and centered to the quote. By default this option is set to `true`.

```js
config.blocks.blocksConfig.heading.showImageField = true;
```

## Credits

<img alt="Deutsches Zentrum für Luft- und Raumfahrt (DLR)" width="200px" src="https://www.dlr.de/static/media/Logo-de.697a8e1f.svg" style="background-color:white">

The development of this plugin has been kindly sponsored by [Deutsches Zentrum für Luft- und Raumfahrt (DLR)](https://dlr.de/de).

# License

The project is licensed under the MIT license.
