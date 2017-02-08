# node-siren-builder

A fluent [Siren hypermedia](https://github.com/kevinswiber/siren) representation
builder.

```js
const Siren = require('siren-builder');

const entity = Siren.entity()
  .addClass('home')
  .addProperty('version', '2.4.1')
  .addProperty('health', 'green')
  .addAction('find-widget', Siren.action()
    .setTitle('Find Widget')
    .setMethod('GET')
    .setHref('https://api.example.org/widgets/search')
    .setType('application/x-www-form-urlencoded')
    .addField('q', Siren.field()
      .setType('text')))
  .addLink('self', Siren.link()
    .setHref('https://api.example.org/'));

const siren = entity.toJSON();

// siren = {
//   class: ['home'],
//   properties: {
//     version: '2.4.1',
//     health: 'green'
//   },
//   actions: [
//     {
//       name: 'find-widget',
//       method: 'GET',
//       href: 'https://api.example.org/widgets/search',
//       title: 'Find Widget',
//       type: 'application/x-www-form-urlencoded',
//       fields: [
//         {
//           name: 'q',
//           type: 'text'
//         }
//       ]
//     }
//   ],
//   links: [
//     {
//       rel: ['self'],
//       href: 'https://api.example.org/'
//     }
//   ]
// }
```

## Installation

```sh
$ npm install siren-builder
```

## API

[API Documentation](API.md)

## Alternatives

If you are not building Siren representations imperatively and are able to
specify them in one expression, you may prefer to use [node-siren-writer][1] for
syntatic brevity.


[1]: https://github.com/dominicbarnes/node-siren-writer
