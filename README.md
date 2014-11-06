# ember-cli-i18next

> Wrap i18next for Ember apps

## Installation

From within your [Ember CLI][1] application, run:

```shell
npm install --save-dev ember-cli-i18next
```

## Usage

Create your i18next locales files in your project and add them to the build in your ```Brocfile.js```:

```javascript

var locales = pickFiles('locales', {
  srcDir: '/'
, destDir: '/locales'
});

module.exports = mergeTrees([ locales, app.toTree() ]);

```

In a template, use the ```t``` helper to :

```handlebars
{{t 'my.key'}}
```

In your controllers and routes, access the i18n object:

```javascript
// /controllers/test.js

export default Ember.Controller.extend({
  actions: {
    test: function() {
      var i18n = this.get('i18n');
      var test = i18n.t('my.key');
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

## Maintainers

- Johnny Hall (johnny@recipher.co.uk)

[1]: http://ember-cli.com "Ember CLI"