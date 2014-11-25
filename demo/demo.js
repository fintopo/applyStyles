$(function() {
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

	$('#demo2').applyStyles({
    'classes': ['media', 'clearfix']
    ,'css': '.picture {'
            + '  -as-classes: pull-right;'
            + '  width: 200px;'
            + '}'
            + '.body {'
            + '  -as-classes: media-body;'
            + '  width: 500px;'
            + '}'
            + '.header {'
            + '  -as-classes: media-heading h4;'
            + '  color: white;'
            + '  background-color: rgb(103, 88, 195);'
            + '  width: 100%;'
            + '}'
  });
});
