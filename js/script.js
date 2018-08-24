$(document).ready(function() {

    let toggleAffix = function(affixElement, scrollElement, wrapper) {
  
        let height = affixElement.outerHeight(),
            top = wrapper.offset().top;
                
        if (scrollElement.scrollTop() >= (top - height)){
            wrapper.height(height);
            affixElement.addClass("affix");
            document.getElementById("mylogo").src = "img/Logo_inst_moria.svg";
            document.getElementById("hamb_white").id = "hamb_black";
        }
        else {
            affixElement.removeClass("affix");
            document.getElementById("mylogo").src = "img/Logo_white_moria.svg";
            document.getElementById("hamb_black").id = "hamb_white";
            
        }
      
    };

 $('[data-toggle="affix"]').each(function() {
        let ele = $(this),
            wrapper = $('<div></div>');
        
        ele.before(wrapper);
        $(window).on('scroll resize', function() {
            toggleAffix(ele, $(this), wrapper);
        });
        
        // init
        toggleAffix(ele, $(window), wrapper);
    });
  
});