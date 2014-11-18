applyStyles
===========

jQuery plug-in to apply class and style in DOM

Demo
====

[demo](http://fintopo.github.io/applyStyles/)

Usage
=====

Include jQuery and the plugin on a page.

```
<script src="jquery.apply_styles.js" type="text/javascript"></script>
```

then in your code do:

```
$('#element').applyStyles({
  'classes': ['pull-right']
	,'styles': {
    'width': '200px'
	}
});
```

Options
=======

## classes

array of class to be applied.

## styles

array of style to be applied.

## sections

array of option to apply to subdom.

## name

Name parameter is the selector when find for subdom.


License
=======

applyStyles is released under the MIT license.