$(document).ready(function() {
    $('#mobile_btn').on('click',function() {
        $('.mobile_menu').toggleLeClass('active');
        $('.mobile_btn').find('i').toggleClass('fa-x');
        })
})