'use strict';

/**
 * A fluent Siren hypermedia representation builder.
 * @module SirenBuilder
 */

function ensureArray(value) {
  if (!Array.isArray(value)) {
    return [value];
  } else {
    return value;
  }
}

function copyMapAndCloneValuesCallback(value, key) {
  this.set(key, value.clone());
}

function copyMapAndCloneValues(source) {
  const clone = new Map();
  source.forEach(copyMapAndCloneValuesCallback, clone);
  return clone;
}

function mapToJsonWithMutatorCallback(value, key) {
  const json = value.toJSON();
  this.mutator(json, key);
  this.array.push(json);
}

function mapToJsonWithMutator(source, mutator) {
  const array = [];
  const context = { array, mutator };
  source.forEach(mapToJsonWithMutatorCallback, context);
  return array;
}

function mutateWithName(json, name) {
  if (name != null) {
    json.name = name;
  }
}

function toClone(value) {
  return value.clone();
}

function toJSON(value) {
  return value.toJSON();
}

/**
 * Siren action builder.
 */
class SirenAction {

  /**
   * Constructs a new Siren action builder.
   */
  constructor() {
    this._name = undefined;
    this._class = undefined;
    this._method = undefined;
    this._href = undefined;
    this._title = undefined;
    this._type = undefined;
    this._fields = undefined;
  }

  /**
    * Sets the name.
    * @param {string} name
    * @return {SirenAction}
    */
  setName(name) {
    this._name = name;
    return this;
  }

  /**
   * Adds a class.
   * @param {string} className
   * @return {SirenAction}
   */
  addClass(className) {
    if (this._class == null) {
      this._class = [];
    }
    this._class.push(className);
    return this;
  }

  /**
   * Sets the method.
   * @param {string} method
   * @return {SirenAction}
   */
  setMethod(method) {
    this._method = method;
    return this;
  }

  /**
   * Sets the href.
   * @param {string} href
   * @return {SirenLink}
   */
  setHref(href) {
    this._href = href;
    return this;
  }

  /**
   * Sets the title.
   * @param {string} title
   * @return {SirenLink}
   */
  setTitle(title) {
    this._title = title;
    return this;
  }

  /**
   * Sets the type.
   * @param {string} type
   * @return {SirenAction}
   */
  setType(type) {
    this._type = type;
    return this;
  }

  /**
   * Adds a field.
   * @param {string} name
   * @param {SirenField} field
   * @return {SirenAction}
   */
  addField(name, field) {
    if (this._fields == null) {
      this._fields = new Map();
    }
    this._fields.set(name, field);
    return this;
  }

  /**
   * Constructs a deep copy.
   * @return {SirenAction}
   */
  clone() {
    const clone = new SirenAction();
    if (this._name != null) {
      clone._name = this._name;
    }
    if (this._class != null) {
      clone._class = this._class.slice();
    }
    if (this._method != null) {
      clone._method = this._method;
    }
    if (this._href != null) {
      clone._href = this._href;
    }
    if (this._title != null) {
      clone._title = this._title;
    }
    if (this._type != null) {
      clone._type = this._type;
    }
    if (this._fields != null) {
      clone._fields = copyMapAndCloneValues(this._fields);
    }
    return clone;
  }

  /**
   * Builds the Siren action.
   * @return {object}
   */
  toJSON() {
    const json = {};
    if (this._name != null) {
      json.name = this._name;
    }
    if (this._class != null) {
      json.class = this._class;
    }
    if (this._method != null) {
      json.method = this._method;
    }
    if (this._href != null) {
      json.href = this._href;
    }
    if (this._title != null) {
      json.title = this._title;
    }
    if (this._type != null) {
      json.type = this._type;
    }
    if (this._fields != null) {
      json.fields = mapToJsonWithMutator(this._fields, mutateWithName);
    }
    return json;
  }

  /**
   * Constructs an empty Siren action builder.
   * @return {SirenAction}
   * @alias module:SirenBuilder.action
   */
  static create() {
    return new SirenAction();
  }

}

/**
 * An entity attached to a Siren entity via a link relation.
 * @private
 */
class SirenEntityAttachment {

  /**
   * Constructs a new sub-entity.
   * @param {string[]} rel
   * @param {(SirenEntity|SirenLink)} entity
   */
  constructor(rel, entity) {
    this._rel = rel;
    this._entity = entity;
  }

  /**
   * Constructs a deep copy.
   * @return {SirenEntityAttachment}
   */
  clone() {
    const clone = new SirenEntityAttachment(
      this._rel.slice(),
      this._entity.clone()
    );
    return clone;
  }

  /**
   * Builds the Siren sub-entity.
   * @return {object}
   */
  toJSON() {
    const json = this._entity.toJSON();
    json.rel = this._rel;
    return json;
  }
}

/**
 * Siren entity builder.
 */
class SirenEntity {

  /**
   * Constructs a new Siren entity builder.
   */
  constructor() {
    this._class = undefined;
    this._rel = undefined;
    this._properties = undefined;
    this._entities = undefined;
    this._actions = undefined;
    this._links = undefined;
  }

  /**
   * Adds a class.
   * @param {string} className
   * @return {SirenEntity}
   */
  addClass(className) {
    if (this._class == null) {
      this._class = [];
    }
    this._class.push(className);
    return this;
  }

  /**
   * Sets the rel.
   * @param {(String|String[])} rel
   * @return {SirenEntity}
   */
  setRel(rel) {
    this._rel = ensureArray(rel);
    return this;
  }

  /**
   * Adds a property key-value pair.
   * @param {string} key
   * @param {*} value
   * @return {SirenEntity}
   */
  addProperty(key, value) {
    if (this._properties == null) {
      this._properties = {};
    }
    this._properties[key] = value;
    return this;
  }

  /**
   * Adds a property key-value pair for own enumerable property in `obj`.
   *
   * @param {object} obj
   * @return {SirenEntity}
   */
  addProperties(obj) {
    if (this._properties == null) {
      this._properties = {};
    }
    Object.assign(this._properties, obj);
    return this;
  }

  /**
   * Adds a sub-entity as either an embedded representation or link.
   * @param {(string|string[])} rel
   * @param {(SirenEntity|SirenLink)} entity
   * @return {SirenEntity}
   */
  addEntity(rel, entity) {
    if (this._entities == null) {
      this._entities = [];
    }
    this._entities.push(new SirenEntityAttachment(ensureArray(rel), entity));
    return this;
  }

  /**
   * Adds an action.
   * @param {string} name
   * @param {SirenAction} action
   * @return {SirenEntity}
   */
  addAction(name, action) {
    if (this._actions == null) {
      this._actions = new Map();
    }
    this._actions.set(name, action);
    return this;
  }

  /**
   * Adds a link.
   * @param {(string|string[])} rel
   * @param {SirenLink} link
   * @return {SirenEntity}
   */
  addLink(rel, link) {
    if (this._links == null) {
      this._links = [];
    }
    this._links.push(new SirenEntityAttachment(ensureArray(rel), link));
    return this;
  }

  /**
   * Constructs a deep copy.
   * @return {SirenEntity}
   */
  clone() {
    const clone = new SirenEntity();
    if (this._class != null) {
      clone._class = this._class.slice();
    }
    if (this._rel != null) {
      clone._rel = this._rel.slice();
    }
    if (this._properties != null) {
      clone._properties = Object.assign({}, this._properties);
    }
    if (this._entities != null) {
      clone._entities = this._entities.map(toClone);
    }
    if (this._actions != null) {
      clone._actions = copyMapAndCloneValues(this._actions);
    }
    if (this._links != null) {
      clone._links = this._links.map(toClone);
    }
    return clone;
  }

  /**
   * Builds the Siren entity.
   * @return {object}
   */
  toJSON() {
    const json = {};
    if (this._class != null) {
      json.class = this._class;
    }
    if (this._rel != null) {
      json.rel = this._rel;
    }
    if (this._properties != null) {
      json.properties = this._properties;
    }
    if (this._entities != null) {
      json.entities = this._entities.map(toJSON);
    }
    if (this._actions != null) {
      json.actions = mapToJsonWithMutator(this._actions, mutateWithName);
    }
    if (this._links != null) {
      json.links = this._links.map(toJSON);
    }
    return json;
  }

  /**
   * Constructs an empty Siren entity builder.
   * @return {SirenEntity}
   * @alias module:SirenBuilder.entity
   */
  static create() {
    return new SirenEntity();
  }

}

/**
 * Siren field builder.
 */
class SirenField {

  /**
   * Constructs a new Siren field builder.
   */
  constructor() {
    this._name = undefined;
    this._class = undefined;
    this._type = undefined;
    this._value = undefined;
    this._title = undefined;
  }

  /**
   * Sets the name.
   * @param {String} name
   * @return {SirenField}
   */
  setName(name) {
    this._name = name;
    return this;
  }

  /**
   * Adds a class.
   * @param {string} className
   * @return {SirenField}
   */
  addClass(className) {
    if (this._class == null) {
      this._class = [];
    }
    this._class.push(className);
    return this;
  }

  /**
   * Sets the type.
   * @param {string} type
   * @return {SirenField}
   */
  setType(type) {
    this._type = type;
    return this;
  }

  /**
   * Sets the value.
   * @param {*} value
   * @return {SirenField}
   */
  setValue(value) {
    this._value = value;
    return this;
  }


  /**
   * Sets the title.
   * @param {string} title
   * @return {SirenField}
   */
  setTitle(title) {
    this._title = title;
    return this;
  }

  /**
   * Constructs a deep copy.
   * @return {SirenField}
   */
  clone() {
    const clone = new SirenField();
    if (this._name != null) {
      clone._name = this._name;
    }
    if (this._class != null) {
      clone._class = this._class.slice();
    }
    if (this._type != null) {
      clone._type = this._type;
    }
    if (this._value != null) {
      clone._value = this._value;
    }
    if (this._title != null) {
      clone._title = this._title;
    }
    return clone;
  }

  /**
   * Builds the Siren field.
   * @return {object}
   */
  toJSON() {
    const json = {};
    if (this._name != null) {
      json.name = this._name;
    }
    if (this._class != null) {
      json.class = this._class;
    }
    if (this._type != null) {
      json.type = this._type;
    }
    if (this._value != null) {
      json.value = this._value;
    }
    if (this._title != null) {
      json.title = this._title;
    }
    return json;
  }

  /**
   * Constructs an empty Siren field builder.
   * @return {SirenField}
   * @alias module:SirenBuilder.field
   */
  static create() {
    return new SirenField();
  }

}

/**
 * Siren link builder.
 */
class SirenLink {

  /**
   * Constructs a new Siren link builder.
   */
  constructor() {
    this._rel = undefined;
    this._class = undefined;
    this._href = undefined;
    this._title = undefined;
    this._type = undefined;
  }

  /**
   * Sets the rel.
   * @param {(String|String[])} rel
   * @return {SirenLink}
   */
  setRel(rel) {
    this._rel = ensureArray(rel);
    return this;
  }

  /**
   * Adds a class.
   * @param {string} className
   * @return {SirenLink}
   */
  addClass(className) {
    if (this._class == null) {
      this._class = [];
    }
    this._class.push(className);
    return this;
  }

  /**
   * Sets the href.
   * @param {string} href
   * @return {SirenLink}
   */
  setHref(href) {
    this._href = href;
    return this;
  }

  /**
   * Sets the title.
   * @param {string} title
   * @return {SirenLink}
   */
  setTitle(title) {
    this._title = title;
    return this;
  }

  /**
   * Sets the type.
   * @param {string} type
   * @return {SirenLink}
   */
  setType(type) {
    this._type = type;
    return this;
  }

  /**
   * Constructs a deep copy.
   * @return {SirenLink}
   */
  clone() {
    const clone = new SirenLink();
    if (this._rel != null) {
      clone._rel = this._rel.slice();
    }
    if (this._class != null) {
      clone._class = this._class.slice();
    }
    if (this._href != null) {
      clone._href = this._href;
    }
    if (this._title != null) {
      clone._title = this._title;
    }
    if (this._type != null) {
      clone._type = this._type;
    }
    return clone;
  }

  /**
   * Builds the Siren link.
   * @return {object}
   */
  toJSON() {
    const json = {};
    if (this._rel != null) {
      json.rel = this._rel;
    }
    if (this._class != null) {
      json.class = this._class;
    }
    if (this._href != null) {
      json.href = this._href;
    }
    if (this._title != null) {
      json.title = this._title;
    }
    if (this._type != null) {
      json.type = this._type;
    }
    return json;
  }

  /**
   * Constructs an empty Siren link builder.
   * @return {SirenLink}
   * @alias module:SirenBuilder.link
   */
  static create() {
    return new SirenLink();
  }

}

exports.action = SirenAction.create;
exports.entity = SirenEntity.create;
exports.field = SirenField.create;
exports.link = SirenLink.create;
