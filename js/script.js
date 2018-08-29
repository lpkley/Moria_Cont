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

let div = document.getElementById('escso');
let texto = 'A Contabilidade que sua Empresa Precisa !';

function escrever(str, el) {
  let char = str.split('').reverse();
  let typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    let next = char.pop();
    el.innerHTML += next;
  }, 100);
}

escrever(texto, div);