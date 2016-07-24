
function filterItemsByVal(filterVal) {
    if(filterVal == 'all') {
        $('.item.hidden').fadeIn('fast').removeClass('hidden');
    } else {
        $('.item').each(function() {
            console.log(this);
            
            if(!$(this).hasClass('group-' + filterVal)) {
                $(this).fadeOut('fast').addClass('hidden');
                console.log('hiding');
            } else {
                $(this).fadeIn('fast').removeClass('hidden');
                console.log('showing');
            }
        });
    }
}

function filterItems() {
    $('.nav a.active').removeClass('active');
    $(this).addClass('active');
    
    // only works for one space, I think
    var filterVal = $(this).text().toLowerCase().replace(' ','-');
    filterItemsByVal(filterVal);
}

function filterItemsFromHash() {
    filterVal = window.location.hash.substring(1);
    $('.nav a.active').removeClass('active');
    cur = $('.nav a:contains("' + filterVal + '")');
    cur.addClass('active');
    filterItemsByVal(filterVal);
}

function init() {
    $('.nav a').click(filterItems);
    if(window.location.hash) {
        filterItemsFromHash();
    }
}

$(document).ready(init);
