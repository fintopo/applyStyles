/*
 * applyStyles Ver.1.1.0(2014/11/25)
 * 
 * by fintopo(http://www.fintopo.jp/)
 */

(function($) {
  'use strict';

  var namespace = 'applyStyles';
  var methods = {
    init: function(options){
      options = $.extend({
        classes: null
        ,styles: null
        ,sections: null
      }, options);
      if (options.css) {
        var parsed = methods.parse.call(this, options);
        options.sections = [].concat(options.sections || [], parsed);
      }
      //
      var apply_styles = function($this, section){
        if (!$this) return;
        if (section.classes) {
          var classes = section.classes;
          if ($.type(classes) != 'string') {
            classes = section.classes.join(' ');
          }
          $this.addClass(classes);
        }
        if (section.styles) {
          $this.css(section.styles);
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
    ,parse: function(options){
      if ($.type(options.css) == 'string') {
        return $.map(options.css.match(/(.+?\{.*?\})+?/mg), function(section, index){
          var params = section.match(/(.+?)\{(.*;)*?\}/m);
          var classes = [];
          var styles = {};
          $.each(params[2].match(/(.+?:.+?;)+?/mg), function(index, param){
            var params = param.match(/(.+)?:(.+)?;/m);
            var name = params[1].trim();
            if (name == '-as-classes') {
              classes.push(params[2].trim());
            } else {
              styles[name] = params[2].trim();
            }
          });
          return {
            'name': params[1].trim()
            ,'classes': classes
            ,'styles': styles
          };
        });
      }
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