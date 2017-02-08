<a name="module_SirenBuilder"></a>

## SirenBuilder
A fluent Siren hypermedia representation builder.


* [SirenBuilder](#module_SirenBuilder)
    * _static_
        * [.action()](#module_SirenBuilder.action) ⇒ <code>SirenAction</code>
        * [.entity()](#module_SirenBuilder.entity) ⇒ <code>SirenEntity</code>
        * [.field()](#module_SirenBuilder.field) ⇒ <code>SirenField</code>
        * [.link()](#module_SirenBuilder.link) ⇒ <code>SirenLink</code>
    * _inner_
        * [~SirenAction](#module_SirenBuilder..SirenAction)
            * [new SirenAction()](#new_module_SirenBuilder..SirenAction_new)
            * [.setName(name)](#module_SirenBuilder..SirenAction+setName) ⇒ <code>SirenAction</code>
            * [.addClass(className)](#module_SirenBuilder..SirenAction+addClass) ⇒ <code>SirenAction</code>
            * [.setMethod(method)](#module_SirenBuilder..SirenAction+setMethod) ⇒ <code>SirenAction</code>
            * [.setHref(href)](#module_SirenBuilder..SirenAction+setHref) ⇒ <code>SirenLink</code>
            * [.setTitle(title)](#module_SirenBuilder..SirenAction+setTitle) ⇒ <code>SirenLink</code>
            * [.setType(type)](#module_SirenBuilder..SirenAction+setType) ⇒ <code>SirenAction</code>
            * [.addField(name, field)](#module_SirenBuilder..SirenAction+addField) ⇒ <code>SirenAction</code>
            * [.copy()](#module_SirenBuilder..SirenAction+copy) ⇒ <code>SirenAction</code>
            * [.clone()](#module_SirenBuilder..SirenAction+clone) ⇒ <code>SirenAction</code>
            * [.toJSON()](#module_SirenBuilder..SirenAction+toJSON) ⇒ <code>object</code>
        * [~SirenEntity](#module_SirenBuilder..SirenEntity)
            * [new SirenEntity()](#new_module_SirenBuilder..SirenEntity_new)
            * [.addClass(className)](#module_SirenBuilder..SirenEntity+addClass) ⇒ <code>SirenEntity</code>
            * [.setRel(rel)](#module_SirenBuilder..SirenEntity+setRel) ⇒ <code>SirenEntity</code>
            * [.addProperty(key, value)](#module_SirenBuilder..SirenEntity+addProperty) ⇒ <code>SirenEntity</code>
            * [.addEntity(rel, entity)](#module_SirenBuilder..SirenEntity+addEntity) ⇒ <code>SirenEntity</code>
            * [.addAction(name, action)](#module_SirenBuilder..SirenEntity+addAction) ⇒ <code>SirenEntity</code>
            * [.addLink(rel, link)](#module_SirenBuilder..SirenEntity+addLink) ⇒ <code>SirenEntity</code>
            * [.copy()](#module_SirenBuilder..SirenEntity+copy) ⇒ <code>SirenEntity</code>
            * [.clone()](#module_SirenBuilder..SirenEntity+clone) ⇒ <code>SirenEntity</code>
            * [.toJSON()](#module_SirenBuilder..SirenEntity+toJSON) ⇒ <code>object</code>
        * [~SirenField](#module_SirenBuilder..SirenField)
            * [new SirenField()](#new_module_SirenBuilder..SirenField_new)
            * [.setName(name)](#module_SirenBuilder..SirenField+setName) ⇒ <code>SirenField</code>
            * [.addClass(className)](#module_SirenBuilder..SirenField+addClass) ⇒ <code>SirenField</code>
            * [.setType(type)](#module_SirenBuilder..SirenField+setType) ⇒ <code>SirenField</code>
            * [.setValue(value)](#module_SirenBuilder..SirenField+setValue) ⇒ <code>SirenField</code>
            * [.setTitle(title)](#module_SirenBuilder..SirenField+setTitle) ⇒ <code>SirenField</code>
            * [.copy()](#module_SirenBuilder..SirenField+copy) ⇒ <code>SirenField</code>
            * [.clone()](#module_SirenBuilder..SirenField+clone) ⇒ <code>SirenField</code>
            * [.toJSON()](#module_SirenBuilder..SirenField+toJSON) ⇒ <code>object</code>
        * [~SirenLink](#module_SirenBuilder..SirenLink)
            * [new SirenLink()](#new_module_SirenBuilder..SirenLink_new)
            * [.setRel(rel)](#module_SirenBuilder..SirenLink+setRel) ⇒ <code>SirenLink</code>
            * [.addClass(className)](#module_SirenBuilder..SirenLink+addClass) ⇒ <code>SirenLink</code>
            * [.setHref(href)](#module_SirenBuilder..SirenLink+setHref) ⇒ <code>SirenLink</code>
            * [.setTitle(title)](#module_SirenBuilder..SirenLink+setTitle) ⇒ <code>SirenLink</code>
            * [.setType(type)](#module_SirenBuilder..SirenLink+setType) ⇒ <code>SirenLink</code>
            * [.copy()](#module_SirenBuilder..SirenLink+copy) ⇒ <code>SirenLink</code>
            * [.clone()](#module_SirenBuilder..SirenLink+clone) ⇒ <code>SirenLink</code>
            * [.toJSON()](#module_SirenBuilder..SirenLink+toJSON) ⇒ <code>object</code>

<a name="module_SirenBuilder.action"></a>

### SirenBuilder.action() ⇒ <code>SirenAction</code>
Constructs an empty Siren action builder.

**Kind**: static method of <code>[SirenBuilder](#module_SirenBuilder)</code>  
<a name="module_SirenBuilder.entity"></a>

### SirenBuilder.entity() ⇒ <code>SirenEntity</code>
Constructs an empty Siren entity builder.

**Kind**: static method of <code>[SirenBuilder](#module_SirenBuilder)</code>  
<a name="module_SirenBuilder.field"></a>

### SirenBuilder.field() ⇒ <code>SirenField</code>
Constructs an empty Siren field builder.

**Kind**: static method of <code>[SirenBuilder](#module_SirenBuilder)</code>  
<a name="module_SirenBuilder.link"></a>

### SirenBuilder.link() ⇒ <code>SirenLink</code>
Constructs an empty Siren link builder.

**Kind**: static method of <code>[SirenBuilder](#module_SirenBuilder)</code>  
<a name="module_SirenBuilder..SirenAction"></a>

### SirenBuilder~SirenAction
Siren action builder.

**Kind**: inner class of <code>[SirenBuilder](#module_SirenBuilder)</code>  

* [~SirenAction](#module_SirenBuilder..SirenAction)
    * [new SirenAction()](#new_module_SirenBuilder..SirenAction_new)
    * [.setName(name)](#module_SirenBuilder..SirenAction+setName) ⇒ <code>SirenAction</code>
    * [.addClass(className)](#module_SirenBuilder..SirenAction+addClass) ⇒ <code>SirenAction</code>
    * [.setMethod(method)](#module_SirenBuilder..SirenAction+setMethod) ⇒ <code>SirenAction</code>
    * [.setHref(href)](#module_SirenBuilder..SirenAction+setHref) ⇒ <code>SirenLink</code>
    * [.setTitle(title)](#module_SirenBuilder..SirenAction+setTitle) ⇒ <code>SirenLink</code>
    * [.setType(type)](#module_SirenBuilder..SirenAction+setType) ⇒ <code>SirenAction</code>
    * [.addField(name, field)](#module_SirenBuilder..SirenAction+addField) ⇒ <code>SirenAction</code>
    * [.copy()](#module_SirenBuilder..SirenAction+copy) ⇒ <code>SirenAction</code>
    * [.clone()](#module_SirenBuilder..SirenAction+clone) ⇒ <code>SirenAction</code>
    * [.toJSON()](#module_SirenBuilder..SirenAction+toJSON) ⇒ <code>object</code>

<a name="new_module_SirenBuilder..SirenAction_new"></a>

#### new SirenAction()
Constructs a new Siren action builder.

<a name="module_SirenBuilder..SirenAction+setName"></a>

#### sirenAction.setName(name) ⇒ <code>SirenAction</code>
Sets the name.

**Kind**: instance method of <code>[SirenAction](#module_SirenBuilder..SirenAction)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="module_SirenBuilder..SirenAction+addClass"></a>

#### sirenAction.addClass(className) ⇒ <code>SirenAction</code>
Adds a class.

**Kind**: instance method of <code>[SirenAction](#module_SirenBuilder..SirenAction)</code>  

| Param | Type |
| --- | --- |
| className | <code>String</code> | 

<a name="module_SirenBuilder..SirenAction+setMethod"></a>

#### sirenAction.setMethod(method) ⇒ <code>SirenAction</code>
Sets the method.

**Kind**: instance method of <code>[SirenAction](#module_SirenBuilder..SirenAction)</code>  

| Param | Type |
| --- | --- |
| method | <code>String</code> | 

<a name="module_SirenBuilder..SirenAction+setHref"></a>

#### sirenAction.setHref(href) ⇒ <code>SirenLink</code>
Sets the href.

**Kind**: instance method of <code>[SirenAction](#module_SirenBuilder..SirenAction)</code>  

| Param | Type |
| --- | --- |
| href | <code>String</code> | 

<a name="module_SirenBuilder..SirenAction+setTitle"></a>

#### sirenAction.setTitle(title) ⇒ <code>SirenLink</code>
Sets the title.

**Kind**: instance method of <code>[SirenAction](#module_SirenBuilder..SirenAction)</code>  

| Param | Type |
| --- | --- |
| title | <code>String</code> | 

<a name="module_SirenBuilder..SirenAction+setType"></a>

#### sirenAction.setType(type) ⇒ <code>SirenAction</code>
Sets the type.

**Kind**: instance method of <code>[SirenAction](#module_SirenBuilder..SirenAction)</code>  

| Param | Type |
| --- | --- |
| type | <code>String</code> | 

<a name="module_SirenBuilder..SirenAction+addField"></a>

#### sirenAction.addField(name, field) ⇒ <code>SirenAction</code>
Adds a field.

**Kind**: instance method of <code>[SirenAction](#module_SirenBuilder..SirenAction)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 
| field | <code>SirenField</code> | 

<a name="module_SirenBuilder..SirenAction+copy"></a>

#### sirenAction.copy() ⇒ <code>SirenAction</code>
Constructs a shallow copy.

**Kind**: instance method of <code>[SirenAction](#module_SirenBuilder..SirenAction)</code>  
<a name="module_SirenBuilder..SirenAction+clone"></a>

#### sirenAction.clone() ⇒ <code>SirenAction</code>
Constructs a deep copy.

**Kind**: instance method of <code>[SirenAction](#module_SirenBuilder..SirenAction)</code>  
<a name="module_SirenBuilder..SirenAction+toJSON"></a>

#### sirenAction.toJSON() ⇒ <code>object</code>
Builds the Siren action.

**Kind**: instance method of <code>[SirenAction](#module_SirenBuilder..SirenAction)</code>  
<a name="module_SirenBuilder..SirenEntity"></a>

### SirenBuilder~SirenEntity
Siren entity builder.

**Kind**: inner class of <code>[SirenBuilder](#module_SirenBuilder)</code>  

* [~SirenEntity](#module_SirenBuilder..SirenEntity)
    * [new SirenEntity()](#new_module_SirenBuilder..SirenEntity_new)
    * [.addClass(className)](#module_SirenBuilder..SirenEntity+addClass) ⇒ <code>SirenEntity</code>
    * [.setRel(rel)](#module_SirenBuilder..SirenEntity+setRel) ⇒ <code>SirenEntity</code>
    * [.addProperty(key, value)](#module_SirenBuilder..SirenEntity+addProperty) ⇒ <code>SirenEntity</code>
    * [.addEntity(rel, entity)](#module_SirenBuilder..SirenEntity+addEntity) ⇒ <code>SirenEntity</code>
    * [.addAction(name, action)](#module_SirenBuilder..SirenEntity+addAction) ⇒ <code>SirenEntity</code>
    * [.addLink(rel, link)](#module_SirenBuilder..SirenEntity+addLink) ⇒ <code>SirenEntity</code>
    * [.copy()](#module_SirenBuilder..SirenEntity+copy) ⇒ <code>SirenEntity</code>
    * [.clone()](#module_SirenBuilder..SirenEntity+clone) ⇒ <code>SirenEntity</code>
    * [.toJSON()](#module_SirenBuilder..SirenEntity+toJSON) ⇒ <code>object</code>

<a name="new_module_SirenBuilder..SirenEntity_new"></a>

#### new SirenEntity()
Constructs a new Siren entity builder.

<a name="module_SirenBuilder..SirenEntity+addClass"></a>

#### sirenEntity.addClass(className) ⇒ <code>SirenEntity</code>
Adds a class.

**Kind**: instance method of <code>[SirenEntity](#module_SirenBuilder..SirenEntity)</code>  

| Param | Type |
| --- | --- |
| className | <code>String</code> | 

<a name="module_SirenBuilder..SirenEntity+setRel"></a>

#### sirenEntity.setRel(rel) ⇒ <code>SirenEntity</code>
Sets the rel.

**Kind**: instance method of <code>[SirenEntity](#module_SirenBuilder..SirenEntity)</code>  

| Param | Type |
| --- | --- |
| rel | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> | 

<a name="module_SirenBuilder..SirenEntity+addProperty"></a>

#### sirenEntity.addProperty(key, value) ⇒ <code>SirenEntity</code>
Adds a property key-value pair.

**Kind**: instance method of <code>[SirenEntity](#module_SirenBuilder..SirenEntity)</code>  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>Any</code> | 

<a name="module_SirenBuilder..SirenEntity+addEntity"></a>

#### sirenEntity.addEntity(rel, entity) ⇒ <code>SirenEntity</code>
Adds an entity as either an embedded representation or link.

**Kind**: instance method of <code>[SirenEntity](#module_SirenBuilder..SirenEntity)</code>  

| Param | Type |
| --- | --- |
| rel | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> | 
| entity | <code>SirenEntity</code> &#124; <code>SirenLink</code> | 

<a name="module_SirenBuilder..SirenEntity+addAction"></a>

#### sirenEntity.addAction(name, action) ⇒ <code>SirenEntity</code>
Adds an action.

**Kind**: instance method of <code>[SirenEntity](#module_SirenBuilder..SirenEntity)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 
| action | <code>SirenAction</code> | 

<a name="module_SirenBuilder..SirenEntity+addLink"></a>

#### sirenEntity.addLink(rel, link) ⇒ <code>SirenEntity</code>
Adds a link.

**Kind**: instance method of <code>[SirenEntity](#module_SirenBuilder..SirenEntity)</code>  

| Param | Type |
| --- | --- |
| rel | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> | 
| link | <code>SirenLink</code> | 

<a name="module_SirenBuilder..SirenEntity+copy"></a>

#### sirenEntity.copy() ⇒ <code>SirenEntity</code>
Constructs a shallow copy.

**Kind**: instance method of <code>[SirenEntity](#module_SirenBuilder..SirenEntity)</code>  
<a name="module_SirenBuilder..SirenEntity+clone"></a>

#### sirenEntity.clone() ⇒ <code>SirenEntity</code>
Constructs a deep copy.

**Kind**: instance method of <code>[SirenEntity](#module_SirenBuilder..SirenEntity)</code>  
<a name="module_SirenBuilder..SirenEntity+toJSON"></a>

#### sirenEntity.toJSON() ⇒ <code>object</code>
Builds the Siren entity.

**Kind**: instance method of <code>[SirenEntity](#module_SirenBuilder..SirenEntity)</code>  
<a name="module_SirenBuilder..SirenField"></a>

### SirenBuilder~SirenField
Siren field builder.

**Kind**: inner class of <code>[SirenBuilder](#module_SirenBuilder)</code>  

* [~SirenField](#module_SirenBuilder..SirenField)
    * [new SirenField()](#new_module_SirenBuilder..SirenField_new)
    * [.setName(name)](#module_SirenBuilder..SirenField+setName) ⇒ <code>SirenField</code>
    * [.addClass(className)](#module_SirenBuilder..SirenField+addClass) ⇒ <code>SirenField</code>
    * [.setType(type)](#module_SirenBuilder..SirenField+setType) ⇒ <code>SirenField</code>
    * [.setValue(value)](#module_SirenBuilder..SirenField+setValue) ⇒ <code>SirenField</code>
    * [.setTitle(title)](#module_SirenBuilder..SirenField+setTitle) ⇒ <code>SirenField</code>
    * [.copy()](#module_SirenBuilder..SirenField+copy) ⇒ <code>SirenField</code>
    * [.clone()](#module_SirenBuilder..SirenField+clone) ⇒ <code>SirenField</code>
    * [.toJSON()](#module_SirenBuilder..SirenField+toJSON) ⇒ <code>object</code>

<a name="new_module_SirenBuilder..SirenField_new"></a>

#### new SirenField()
Constructs a new Siren field builder.

<a name="module_SirenBuilder..SirenField+setName"></a>

#### sirenField.setName(name) ⇒ <code>SirenField</code>
Sets the name.

**Kind**: instance method of <code>[SirenField](#module_SirenBuilder..SirenField)</code>  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 

<a name="module_SirenBuilder..SirenField+addClass"></a>

#### sirenField.addClass(className) ⇒ <code>SirenField</code>
Adds a class.

**Kind**: instance method of <code>[SirenField](#module_SirenBuilder..SirenField)</code>  

| Param | Type |
| --- | --- |
| className | <code>String</code> | 

<a name="module_SirenBuilder..SirenField+setType"></a>

#### sirenField.setType(type) ⇒ <code>SirenField</code>
Sets the type.

**Kind**: instance method of <code>[SirenField](#module_SirenBuilder..SirenField)</code>  

| Param | Type |
| --- | --- |
| type | <code>String</code> | 

<a name="module_SirenBuilder..SirenField+setValue"></a>

#### sirenField.setValue(value) ⇒ <code>SirenField</code>
Sets the value.

**Kind**: instance method of <code>[SirenField](#module_SirenBuilder..SirenField)</code>  

| Param | Type |
| --- | --- |
| value | <code>Any</code> | 

<a name="module_SirenBuilder..SirenField+setTitle"></a>

#### sirenField.setTitle(title) ⇒ <code>SirenField</code>
Sets the title.

**Kind**: instance method of <code>[SirenField](#module_SirenBuilder..SirenField)</code>  

| Param | Type |
| --- | --- |
| title | <code>String</code> | 

<a name="module_SirenBuilder..SirenField+copy"></a>

#### sirenField.copy() ⇒ <code>SirenField</code>
Constructs a shallow copy.

**Kind**: instance method of <code>[SirenField](#module_SirenBuilder..SirenField)</code>  
<a name="module_SirenBuilder..SirenField+clone"></a>

#### sirenField.clone() ⇒ <code>SirenField</code>
Constructs a deep copy.

**Kind**: instance method of <code>[SirenField](#module_SirenBuilder..SirenField)</code>  
<a name="module_SirenBuilder..SirenField+toJSON"></a>

#### sirenField.toJSON() ⇒ <code>object</code>
Builds the Siren field.

**Kind**: instance method of <code>[SirenField](#module_SirenBuilder..SirenField)</code>  
<a name="module_SirenBuilder..SirenLink"></a>

### SirenBuilder~SirenLink
Siren link builder.

**Kind**: inner class of <code>[SirenBuilder](#module_SirenBuilder)</code>  

* [~SirenLink](#module_SirenBuilder..SirenLink)
    * [new SirenLink()](#new_module_SirenBuilder..SirenLink_new)
    * [.setRel(rel)](#module_SirenBuilder..SirenLink+setRel) ⇒ <code>SirenLink</code>
    * [.addClass(className)](#module_SirenBuilder..SirenLink+addClass) ⇒ <code>SirenLink</code>
    * [.setHref(href)](#module_SirenBuilder..SirenLink+setHref) ⇒ <code>SirenLink</code>
    * [.setTitle(title)](#module_SirenBuilder..SirenLink+setTitle) ⇒ <code>SirenLink</code>
    * [.setType(type)](#module_SirenBuilder..SirenLink+setType) ⇒ <code>SirenLink</code>
    * [.copy()](#module_SirenBuilder..SirenLink+copy) ⇒ <code>SirenLink</code>
    * [.clone()](#module_SirenBuilder..SirenLink+clone) ⇒ <code>SirenLink</code>
    * [.toJSON()](#module_SirenBuilder..SirenLink+toJSON) ⇒ <code>object</code>

<a name="new_module_SirenBuilder..SirenLink_new"></a>

#### new SirenLink()
Constructs a new Siren link builder.

<a name="module_SirenBuilder..SirenLink+setRel"></a>

#### sirenLink.setRel(rel) ⇒ <code>SirenLink</code>
Sets the rel.

**Kind**: instance method of <code>[SirenLink](#module_SirenBuilder..SirenLink)</code>  

| Param | Type |
| --- | --- |
| rel | <code>String</code> &#124; <code>Array.&lt;String&gt;</code> | 

<a name="module_SirenBuilder..SirenLink+addClass"></a>

#### sirenLink.addClass(className) ⇒ <code>SirenLink</code>
Adds a class.

**Kind**: instance method of <code>[SirenLink](#module_SirenBuilder..SirenLink)</code>  

| Param | Type |
| --- | --- |
| className | <code>String</code> | 

<a name="module_SirenBuilder..SirenLink+setHref"></a>

#### sirenLink.setHref(href) ⇒ <code>SirenLink</code>
Sets the href.

**Kind**: instance method of <code>[SirenLink](#module_SirenBuilder..SirenLink)</code>  

| Param | Type |
| --- | --- |
| href | <code>String</code> | 

<a name="module_SirenBuilder..SirenLink+setTitle"></a>

#### sirenLink.setTitle(title) ⇒ <code>SirenLink</code>
Sets the title.

**Kind**: instance method of <code>[SirenLink](#module_SirenBuilder..SirenLink)</code>  

| Param | Type |
| --- | --- |
| title | <code>String</code> | 

<a name="module_SirenBuilder..SirenLink+setType"></a>

#### sirenLink.setType(type) ⇒ <code>SirenLink</code>
Sets the type.

**Kind**: instance method of <code>[SirenLink](#module_SirenBuilder..SirenLink)</code>  

| Param | Type |
| --- | --- |
| type | <code>String</code> | 

<a name="module_SirenBuilder..SirenLink+copy"></a>

#### sirenLink.copy() ⇒ <code>SirenLink</code>
Constructs a shallow copy.

**Kind**: instance method of <code>[SirenLink](#module_SirenBuilder..SirenLink)</code>  
<a name="module_SirenBuilder..SirenLink+clone"></a>

#### sirenLink.clone() ⇒ <code>SirenLink</code>
Constructs a deep copy.

**Kind**: instance method of <code>[SirenLink](#module_SirenBuilder..SirenLink)</code>  
<a name="module_SirenBuilder..SirenLink+toJSON"></a>

#### sirenLink.toJSON() ⇒ <code>object</code>
Builds the Siren link.

**Kind**: instance method of <code>[SirenLink](#module_SirenBuilder..SirenLink)</code>  
