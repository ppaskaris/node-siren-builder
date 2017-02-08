node-siren-builder
==================

A fluent Siren hypermedia object builder.

```js
const Siren = require('siren-builder');

const entity = Siren.entity()
  .addClass('order')
  .addProperty('orderNumber', 42)
  .addProperty('itemCount', 3)
  .addProperty('status', 'pending')
  .addEntity('http://x.io/rels/order-items', Siren.link()
    .addClass('items')
    .addClass('collection')
    .setHref('http://api.x.io/orders/42/items'))
  .addEntity('http://x.io/rels/customer', Siren.entity()
    .addClass('info')
    .addClass('customer')
    .addProperty('customerId', 'pj123')
    .addProperty('name', 'Peter Joseph')
    .addLink('self', Siren.link()
      .setHref('http://api.x.io/customers/pj123')))
  .addAction('add-item', Siren.action()
    .setTitle('Add Item')
    .setMethod('POST')
    .setHref('http://api.x.io/orders/42/items')
    .setType('application/x-www-form-urlencoded')
    .addField('orderNumber', Siren.field()
      .setType('hidden')
      .setValue('42'))
    .addField('productCode', Siren.field()
      .setType('text'))
    .addField('quantity', Siren.field()
      .setType('number')))
  .addLink('self', Siren.link()
    .setHref('http://api.x.io/orders/42'))
  .addLink('previous', Siren.link()
    .setHref('http://api.x.io/orders/41'))
  .addLink('next', Siren.link()
    .setHref('http://api.x.io/orders/43'));

const siren = entity.toJSON();

// siren = {
//   "class": [ "order" ],
//   "properties": {
//       "orderNumber": 42,
//       "itemCount": 3,
//       "status": "pending"
//   },
//   "entities": [
//     {
//       "class": [ "items", "collection" ],
//       "rel": [ "http://x.io/rels/order-items" ],
//       "href": "http://api.x.io/orders/42/items"
//     },
//     {
//       "class": [ "info", "customer" ],
//       "rel": [ "http://x.io/rels/customer" ],
//       "properties": {
//         "customerId": "pj123",
//         "name": "Peter Joseph"
//       },
//       "links": [
//         { "rel": [ "self" ], "href": "http://api.x.io/customers/pj123" }
//       ]
//     }
//   ],
//   "actions": [
//     {
//       "name": "add-item",
//       "title": "Add Item",
//       "method": "POST",
//       "href": "http://api.x.io/orders/42/items",
//       "type": "application/x-www-form-urlencoded",
//       "fields": [
//         { "name": "orderNumber", "type": "hidden", "value": "42" },
//         { "name": "productCode", "type": "text" },
//         { "name": "quantity", "type": "number" }
//       ]
//     }
//   ],
//   "links": [
//     { "rel": [ "self" ], "href": "http://api.x.io/orders/42" },
//     { "rel": [ "previous" ], "href": "http://api.x.io/orders/41" },
//     { "rel": [ "next" ], "href": "http://api.x.io/orders/43" }
//   ]
// }
```
