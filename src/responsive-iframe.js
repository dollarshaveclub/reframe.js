(function( window, factory ) {

  ResponsiveIframe = window.ResponsiveIframe || {};
  if ( 'undefined' === typeof ResponsiveIframe ) return console.log('Unmet Dependencies');
  factory( ResponsiveIframe );

})( this, function( utils ) {

  window.ResponsiveIframe = function( 
    responsiveIframe, 
    excludedIframe
  ) {
  
    var exclusionSelector = typeof( excludedIframe ) !== 'undefined' ? excludedIframe : null;
    if ( typeof( excludedIframe ) !== 'undefined' || ( ! document.querySelectorAll( excludedIframe ).length ) ) {
      responsiveIframe = document.querySelectorAll(responsiveIframe+':not('+excludedIframe+')');
    } else {
      responsiveIframe = document.querySelectorAll(responsiveIframe);
    }
    for (i = 0; i < responsiveIframe.length; ++i) {
      var wrapper = document.createElement("div"),
          divAdded = false;
      wrapper.className += 'js-responsive-iframe';
      responsiveIframe[i].removeAttribute('height');
      responsiveIframe[i].removeAttribute('width');
      responsiveIframe[i].removeAttribute('style');
      if ( ! divAdded ) {
        responsiveIframe[i].parentNode.insertBefore(wrapper, responsiveIframe[i]);
        divAdded = true;
      }
      responsiveIframe[i].parentNode.removeChild(responsiveIframe[i]);
      wrapper.appendChild(responsiveIframe[i]); 
    }

    return this;
  }; 

});