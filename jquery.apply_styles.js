/*
 * applyStyles Ver.1.0.0(2014/11/18)
 * 
 * by fintopo(http://www.fintopo.jp/)
 */

(function($) {
  var namespace = 'applyStyles';
  var methods = {
    init: function(options){
      options = $.extend({
        classes: null
        ,styles: null
        ,sections: null
      }, options);
      //
      var apply_styles = function($this, section){
        if (!$this) return;
        if (section.classes) {
          $.each(section.classes, function(index, add_class){
            $this.addClass(add_class);
          });
        }
        if (section.styles) {
          $.each(section.styles, function(key, value){
            $this.css(key, value);
          });
        }
        if (section.sections) {
          $.each(section.sections, function(index, section){
            apply_styles($this.find(section.name), section);
          });
        }
      };
      //
      return this.each(function(){
        apply_styles($(this), options);
      }); // end each
    }
  };
  $.fn.applyStyles = function(method){
    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.'+namespace);
    }    
  };
})(jQuery);