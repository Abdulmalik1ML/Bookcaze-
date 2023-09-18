SR(document).ready(function() {

    SR('.color-choose input').on('click', function() {
        var headphonesColor = SR(this).attr('data-image');
  
        SR('.active').removeClass('active');
        SR('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
        SR(this).addClass('active');
    });
  
  });
  