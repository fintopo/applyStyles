applyStyles
===========

jQuery plug-in to apply class and style in DOM

Sample
======

## Before

```
<div id="demo">
  <img src="picture.jpg" class="picture">
  <div class="body">
    <div class="header">
      header
    </div>
    <div class="memo">
      memo
    </div>
  </div>
</div>
```

## Do

```
$('#demo').applyStyles({
  classes: ['media', 'clearfix']
  ,sections: [{
    'name': '.picture'
    ,'classes': ['pull-right']
    ,'styles': {
      'width': '200px'
    }
  },{
    'name': '.body'
    ,'classes': ['media-body']
    ,'styles': {
      'width': '500px'
    }
    ,'sections': [{
      'name': '.header'
      ,'classes': ['media-heading', 'h4']
      ,'styles': {
        'color': 'white'
        ,'background-color': 'rgb(103, 88, 195)'
        ,'width': '100%'
      }
    }]
  }]
});
```

## After

```
<div id="demo" class="media clearfix">
  <img src="picture.jpg" class="picture pull-right" style="width: 200px;">
	<div class="body media-body" style="width: 500px;">
	  <div class="header media-heading h4" style="color: white; width: 100%; background-color: rgb(103, 88, 195);">
		  header
    </div>
    <div class="memo">
      memo
    </div>
  </div>
</div>
```

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

## css

string of css format, to expand in parse method, to be added to the sections.

The value of a special property '-as-classes' append to the classes of sections.

Methods
=======

## parse

convert a string of css format to sections object.


License
=======

applyStyles is released under the MIT license.