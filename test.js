'use strict';

const Tap = require('tap');
const Siren = require('./index');

Tap.test('SirenAction', (t) => {
  const action = Siren.action()
    .clone()
    .setName('replace-avatar')
    .addClass('upload')
    .setMethod('PUT')
    .setHref('https://api.example.org/users/joe%40example.org/avatar')
    .setTitle('Avatar')
    .setType('image/jpeg')
    .addField('csrf_token', Siren.field()
      .setType('hidden')
      .setValue('MUyFhg+Ah1I5Iz/jbbHwC2Ip/DqCYZFPncFTp9HnTmU='))
    .clone();
  const expected = {
    name: 'replace-avatar',
    class: ['upload'],
    method: 'PUT',
    href: 'https://api.example.org/users/joe%40example.org/avatar',
    title: 'Avatar',
    type: 'image/jpeg',
    fields: [
      {
        name: 'csrf_token',
        type: 'hidden',
        value: 'MUyFhg+Ah1I5Iz/jbbHwC2Ip/DqCYZFPncFTp9HnTmU='
      }
    ]
  };
  t.deepEqual(action.toJSON(), expected);

  const clone = action.clone();
  t.notEqual(clone, action);
  t.deepEqual(clone.toJSON(), action.toJSON());
  clone.addField('dog', Siren.field());
  clone.addClass('spaghetti');
  t.deepInequal(clone.toJSON(), action.toJSON());
  action.addField('dog', Siren.field());
  action.addClass('spaghetti');
  t.deepEqual(clone.toJSON(), action.toJSON());
  clone.setType('image/svg+xml');
  t.deepInequal(clone.toJSON(), action.toJSON());

  t.done();
});

Tap.test('SirenEntity', (t) => {
  const entity = Siren.entity()
    .clone()
    .addClass('home')
    .setRel('help')
    .addProperty('salutation', 'Greetings!')
    .addProperty('happiness', '7/10')
    .addEntity('next', Siren.entity().addProperty('salutation', 'Hallo!'))
    .addEntity('prev', Siren.link().setHref('https://api.example.org/yo'))
    .addAction('reply', Siren.action()
      .setMethod('POST')
      .setHref('https://api.example.org/reply?salutation=Greetings!')
      .addField('response', Siren.field()
        .setType('text')))
    .addLink('self', Siren.link()
      .setHref('https://api.example.org/greetings'))
    .clone();

  const expected = {
    class: ['home'],
    rel: ['help'],
    properties: {
      salutation: 'Greetings!',
      happiness: '7/10'
    },
    entities: [
      {
        rel: ['next'],
        properties: {
          salutation: 'Hallo!'
        }
      },
      {
        rel: ['prev'],
        href: 'https://api.example.org/yo'
      }
    ],
    actions: [
      {
        name: 'reply',
        method: 'POST',
        href: 'https://api.example.org/reply?salutation=Greetings!',
        fields: [
          {
            name: 'response',
            type: 'text'
          }
        ]
      }
    ],
    links: [
      {
        rel: ['self'],
        href: 'https://api.example.org/greetings'
      }
    ]
  };
  t.deepEqual(entity.toJSON(), expected);

  const clone = entity.clone();
  t.notEqual(clone, entity);
  t.deepEqual(clone.toJSON(), entity.toJSON());
  clone.addAction('sign-out', Siren.action()
    .setHref('https://api.example.org/logout'));
  clone.addLink('raditz', Siren.link()
    .setHref('https://api.example.org'));
  t.deepInequal(clone.toJSON(), entity.toJSON());
  entity.addAction('sign-out', Siren.action()
    .setHref('https://api.example.org/logout'));
  entity.addLink('raditz', Siren.link()
    .setHref('https://api.example.org'));
  t.deepEqual(clone.toJSON(), entity.toJSON());
  clone.setRel('skunk');
  t.deepInequal(clone.toJSON(), entity.toJSON());

  t.done();
});

Tap.test('SirenField', (t) => {
  const field = Siren.field()
    .clone()
    .setName('telephone')
    .addClass('required')
    .setType('tel')
    .setValue('+X (XXX) XXX-XXXX')
    .setTitle('International Phone No.')
    .clone();
  const expected = {
    name: 'telephone',
    class: ['required'],
    type: 'tel',
    value: '+X (XXX) XXX-XXXX',
    title: 'International Phone No.'
  };
  t.deepEqual(field.toJSON(), expected);

  const clone = field.clone();
  t.notEqual(clone, field);
  t.deepEqual(clone.toJSON(), field.toJSON());
  clone.addClass('vegeta');
  t.deepInequal(clone.toJSON(), field.toJSON());
  field.addClass('vegeta');
  t.deepEqual(clone.toJSON(), field.toJSON());
  clone.setName('cell');
  t.deepInequal(clone.toJSON(), field.toJSON());

  t.done();
});

Tap.test('SirenLink', (t) => {
  const link = Siren.link()
    .clone()
    .setRel(['next', 'last'])
    .addClass('page')
    .setHref('https://api.example.org/items?page=2')
    .setTitle('Page 2')
    .setType('application/vnd.siren+json')
    .clone();
  const expected = {
    rel: ['next', 'last'],
    class: ['page'],
    href: 'https://api.example.org/items?page=2',
    title: 'Page 2',
    type: 'application/vnd.siren+json'
  };
  t.deepEqual(link.toJSON(), expected);

  const clone = link.clone();
  t.notEqual(clone, link);
  t.deepEqual(clone.toJSON(), link.toJSON());
  clone.addClass('goku');
  t.deepInequal(clone.toJSON(), link.toJSON());
  link.addClass('goku');
  clone.setTitle('Page II');
  t.deepInequal(clone.toJSON(), link.toJSON());

  t.done();
});

Tap.test('siren example', (t) => {
  const actual = Siren.entity()
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
      .setHref('http://api.x.io/orders/43'))
    .toJSON();
  const expected = {
    'class': ['order'],
    'properties': {
      'orderNumber': 42,
      'itemCount': 3,
      'status': 'pending'
    },
    'entities': [
      {
        'class': ['items', 'collection'],
        'rel': ['http://x.io/rels/order-items'],
        'href': 'http://api.x.io/orders/42/items'
      },
      {
        'class': ['info', 'customer'],
        'rel': ['http://x.io/rels/customer'],
        'properties': {
          'customerId': 'pj123',
          'name': 'Peter Joseph'
        },
        'links': [
          { 'rel': ['self'], 'href': 'http://api.x.io/customers/pj123' }
        ]
      }
    ],
    'actions': [
      {
        'name': 'add-item',
        'title': 'Add Item',
        'method': 'POST',
        'href': 'http://api.x.io/orders/42/items',
        'type': 'application/x-www-form-urlencoded',
        'fields': [
          { 'name': 'orderNumber', 'type': 'hidden', 'value': '42' },
          { 'name': 'productCode', 'type': 'text' },
          { 'name': 'quantity', 'type': 'number' }
        ]
      }
    ],
    'links': [
      { 'rel': ['self'], 'href': 'http://api.x.io/orders/42' },
      { 'rel': ['previous'], 'href': 'http://api.x.io/orders/41' },
      { 'rel': ['next'], 'href': 'http://api.x.io/orders/43' }
    ]
  };
  t.deepEqual(actual, expected);
  t.done();
});

Tap.test('addProperties', (t) => {
  const actual = Siren.entity()
    .addProperty('beforeProp', 'should be kept')
    .addProperty('name', 'will be overridden')
    .addProperties({
      'name': 'overrides previous prop',
      'orderNumber': 42,
      'itemCount': 3,
      'status': 'pending'
    })
    .addProperty('afterProp', 'should be kept')
    .addProperty('status', 'overrides pending')
    .toJSON();
  const expected = {
    'properties': {
      'orderNumber': 42,
      'itemCount': 3,
      'status': 'overrides pending',
      'name': 'overrides previous prop',
      'beforeProp': 'should be kept',
      'afterProp': 'should be kept'
    }
  };
  t.deepEqual(actual, expected);
  t.done();
});

Tap.test('readme example', (t) => {
  const actual = Siren.entity()
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
      .setHref('https://api.example.org/'))
    .toJSON();
  const expected = {
    class: ['home'],
    properties: {
      version: '2.4.1',
      health: 'green'
    },
    actions: [
      {
        name: 'find-widget',
        method: 'GET',
        href: 'https://api.example.org/widgets/search',
        title: 'Find Widget',
        type: 'application/x-www-form-urlencoded',
        fields: [
          {
            name: 'q',
            type: 'text'
          }
        ]
      }
    ],
    links: [
      {
        rel: ['self'],
        href: 'https://api.example.org/'
      }
    ]
  };
  t.deepEqual(actual, expected);
  t.done();
});
