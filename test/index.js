'use strict';

const Siren = require('../');
const Tap = require('tap');

Tap.test('SirenAction', (t) => {

  const incomplete = Siren.action();
  t.throws(() => {
    incomplete.toJSON();
  });

  incomplete.setName('test');
  t.throws(() => {
    incomplete.toJSON();
  });

  incomplete.setHref('test');
  t.doesNotThrow(() => {
    incomplete.toJSON();
  });

  t.throws(() => {
    incomplete.setMethod('TRACE');
  });

  const action = Siren.action()
    .copy()
    .clone()
    .setName('replace-avatar')
    .addClass('upload')
    .setMethod('PUT')
    .setHref('https://api.example.org/users/joe%40example.org/avatar')
    .setTitle('Avatar')
    .setType('image/jpeg')
    .addField('csrf_token', Siren.field()
      .setType('hidden')
      .setValue('MUyFhg+Ah1I5Iz/jbbHwC2Ip/DqCYZFPncFTp9HnTmU='));
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

  const copy = action.copy();
  t.notEqual(copy, action);
  t.deepEqual(copy.toJSON(), action.toJSON());
  copy.addField('krillin', Siren.field());
  copy.addClass('potatos');
  t.deepEqual(copy.toJSON(), action.toJSON());
  copy.setType('image/png');
  t.deepInequal(copy.toJSON(), action.toJSON());

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
  const incomplete = Siren.entity();
  t.deepEqual(incomplete.toJSON(), {});

  const entity = Siren.entity()
    .copy()
    .clone()
    .addClass('home')
    .setRel('help')
    .addProperty('salutation', 'Greetings!')
    .addProperty('hapiness', '7/10')
    .addEntity('next', Siren.entity().addProperty('salutation', 'Hallo!'))
    .addEntity('prev', Siren.link().setHref('https://api.example.org/yo'))
    .addAction('reply', Siren.action()
      .setMethod('POST')
      .setHref('https://api.example.org/reply?salutation=Greetings!')
      .addField('response', Siren.field()
        .setType('text')))
    .addLink('self', Siren.link()
      .setHref('https://api.example.org/greetings'));

  const expected = {
    class: ['home'],
    rel: ['help'],
    properties: {
      salutation: 'Greetings!',
      hapiness: '7/10'
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

  const copy = entity.copy();
  t.notEqual(copy, entity);
  t.deepEqual(copy.toJSON(), entity.toJSON());
  copy.addAction('logout', Siren.action()
    .setHref('https://api.example.org/sign-out'));
  copy.addLink('home', Siren.link()
    .setHref('https://api.example.org'));
  t.deepEqual(copy.toJSON(), entity.toJSON());
  copy.setRel('spooky');
  t.deepInequal(copy.toJSON(), entity.toJSON());

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
  const incomplete = Siren.field();
  t.throws(() => {
    incomplete.toJSON();
  });

  incomplete.setName('test');
  t.doesNotThrow(() => {
    incomplete.toJSON();
  });

  const field = Siren.field()
    .copy()
    .clone()
    .setName('telephone')
    .addClass('required')
    .setType('tel')
    .setValue('+X (XXX) XXX-XXXX')
    .setTitle('International Phone No.');
  const expected = {
    name: 'telephone',
    class: ['required'],
    type: 'tel',
    value: '+X (XXX) XXX-XXXX',
    title: 'International Phone No.'
  };
  t.deepEqual(field.toJSON(), expected);

  const copy = field.copy();
  t.notEqual(copy, field);
  t.deepEqual(copy.toJSON(), field.toJSON());
  copy.addClass('spooky');
  t.deepEqual(copy.toJSON(), field.toJSON());
  copy.setName('phone_number');
  t.deepInequal(copy.toJSON(), field.toJSON());

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
  const incomplete = Siren.link();
  t.throws(() => {
    incomplete.toJSON();
  });

  incomplete.setRel('about');
  t.throws(() => {
    incomplete.toJSON();
  });

  incomplete.setHref('https://api.example.org/about-us');
  t.doesNotThrow(() => {
    incomplete.toJSON();
  });

  const link = Siren.link()
    .copy()
    .clone()
    .setRel(['next', 'last'])
    .addClass('page')
    .setHref('https://api.example.org/items?page=2')
    .setTitle('Page 2')
    .setType('application/vnd.siren+json');
  const expected = {
    rel: ['next', 'last'],
    class: ['page'],
    href: 'https://api.example.org/items?page=2',
    title: 'Page 2',
    type: 'application/vnd.siren+json'
  };
  t.deepEqual(link.toJSON(), expected);

  const copy = link.copy();
  t.notEqual(copy, link);
  t.deepEqual(copy.toJSON(), link.toJSON());
  copy.addClass('spooky');
  t.deepEqual(copy.toJSON(), link.toJSON());
  copy.setTitle('Page Two');
  t.deepInequal(copy.toJSON(), link.toJSON());

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

Tap.test('readme example', (t) => {
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
