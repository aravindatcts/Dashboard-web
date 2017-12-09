//Rotating Cards
function rotateCard(btn){
        var $card = $(btn).closest('.card-container1');
        if($card.hasClass('hover')){
            $card.removeClass('hover');
        } else {
            $card.addClass('hover');
        }
    }