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
});
