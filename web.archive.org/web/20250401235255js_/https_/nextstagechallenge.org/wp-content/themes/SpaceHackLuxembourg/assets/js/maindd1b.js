var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(function ($) {
    $(document).ready(function(){
        // var parameter = $('#themeParameter').attr('data-id');
        // if (parameter == 2){
        //     $.ajax({
        //         url: ajaxurl,
        //         method: "POST",
        //         data:{
        //             action: 'isUserLoggedIn'
        //         },
        //     }).done(function (response) {
        //         if(response.success) {
        //         } else {
        //             $('#modalLogin').modal('show');
        //         }
        //
        //         return false;
        //     }).fail(function () {
        //         return false;
        //     });
        // }

        var arrowleft = $('.arrowleftslick').attr('imgurl');
        var arrowright = $('.arrowrightslick').attr('imgurl');
        $('.slick-jury, .slick-coach, .slick-author').slick({
            infinite: true,
            dots: true,
            arrow: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ],
            arrows: true,
            dots: true,
            // prevArrow: '<img class="slick-img slick-prev" src="'+ arrowleft +'">',
            // nextArrow: '<img class="slick-img slick-next" src="'+ arrowright +'">',
        });
    });

    $(document).ready(function(){
        var arrowleft = $('.arrowleftslick').attr('imgurl');
        var arrowright = $('.arrowrightslick').attr('imgurl');
        $('.my-carousel').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            prevArrow: '<img class="slick-img slick-prev" src="'+ arrowleft +'">',
            nextArrow: '<img class="slick-img slick-next" src="'+ arrowright +'">',
            variableWidth: true
        });

        $('.winnersContainer').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows : false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows : false,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows : true,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows : true,
                    }
                }
            ],
            prevArrow: '<img class="slick-img slick-prev" src="'+ arrowleft +'">',
            nextArrow: '<img class="slick-img slick-next" src="'+ arrowright +'">',
        });

        $('.slick-setup-team').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1690,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ],
            prevArrow: '<img class="slick-img slick-prev" src="'+ arrowleft +'">',
            nextArrow: '<img class="slick-img slick-next" src="'+ arrowright +'">',
        });
    });

    $(document).ready(function(){
        var arrowleft = $('.arrowleftslick').attr('imgurl');
        var arrowright = $('.arrowrightslick').attr('imgurl');
        $('.slick-jury-modal ').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<img class="slick-img slick-prev" src="'+ arrowleft +'">',
            nextArrow: '<img class="slick-img slick-next" src="'+ arrowright +'">',
            setPosition: 0
        });
        $('.slick-coach-modal').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<img class="slick-img slick-prev" src="'+ arrowleft +'">',
            nextArrow: '<img class="slick-img slick-next" src="'+ arrowright +'">',
            setPosition: 0
        });
        $(document).on('shown.bs.modal','#ProfileJuryModal', function (e) {
            $('.slick-jury-modal').resize();
            setTimeout(function(){  $('.slick-jury-modal').css('visibility', 'visible'); }, 200);
            $('.slick-jury-modal').slick("setPosition", 0);
            var user_id = $(this).attr('data-id');
            var selector = $('.item-slick-jury-modal[data-id="'+ user_id +'"]');
            var slide = selector.parent().parent().attr('data-slick-index');
            // console.log(slide);
            $('.slick-jury-modal').slick('slickGoTo', slide);
        });

        $(document).on('shown.bs.modal','#ProfileCoachModal', function (e) {
            $('.slick-coach-modal').resize();
            setTimeout(function(){  $('.slick-coach-modal').css('visibility', 'visible'); }, 200);
            $('.slick-coach-modal').slick("setPosition", 0);
            var user_id = $(this).attr('data-id');
            var selector = $('.item-slick-coach-modal[data-id="'+ user_id +'"]');
            var slide = selector.parent().parent().attr('data-slick-index');
            // console.log(slide);
            $('.slick-coach-modal').slick('slickGoTo', slide);
        });

    });

    $(".slick-jury").on("init", function (event, slick){
        $(this).find('.slick-slide[data-slick-index="1"]').find('.item-slick-jury').find('img').css('margin-bottom', '5px');
        if ($(window).width() > 576){
            $(this).find('.slick-slide[data-slick-index="1"]').find('.item-slick-jury').find('img').css('border-bottom', '2px solid #FF0080');
            // var user_id= $(this).find('.slick-slide[data-slick-index="1"]').find('.item-slick-jury').attr('data-id');
            var user_id= $(this).find('.slick-slide[data-slick-index="0"]').find('.item-slick-jury').attr('data-id');
        } else{
            $(this).find('.slick-slide[data-slick-index="0"]').find('.item-slick-jury').find('img').css('border-bottom', '2px solid #FF0080');
            var user_id= $(this).find('.slick-slide[data-slick-index="0"]').find('.item-slick-jury').attr('data-id');
        }
        if (user_id != undefined){
            $.ajax({
                url: ajaxurl,
                method: "POST",
                data:{
                    id: user_id,
                    action: 'getUserById'
                },
            }).done(function (response) {
                if(response.success) {
                    $('.infos-jury-index').empty();
                    var displayname = response.user.data['display_name'];
                    if(typeof response.meta['name_to_display'] !== 'undefined'){
                        var name_to_display = response.meta['name_to_display'][0];
                        $('.infos-jury-index').append('<p class="font-weight-bold mb-2 text-center">'+name_to_display+'</p>');
                    }
                    if (typeof response.meta['title_to_display'] !== 'undefined') {
                        var title_to_display = response.meta['title_to_display'][0];
                        $('.infos-jury-index').append('<p class="text-tech-color mb-2 text-center">'+title_to_display+'</p>');
                    }
                    if (typeof response.meta['company_to_display'] !== 'undefined' && typeof response.meta['company_to_display_url'] !== 'undefined') {
                        var company_to_display = response.meta['company_to_display'][0];
                        var company_to_display_url = response.meta['company_to_display_url'][0];
                        $('.infos-jury-index').append('<p class="mb-2 text-center"><a class="text-white" href="'+company_to_display_url+'">'+company_to_display+'</a></p>');
                    }
                    // var nickname = response.nickname;
                    var bio = response.bio;

                    $('.infos-jury-index').append('<p>'+shorten_text(bio, 300, '...',false)+'</p>');
                    if (bio){
                        $('.infos-jury-index').append('<p class="container-button-read-more-index text-right"><button id="buttonModalJury"  class="buttonRose" data-id="'+user_id+'">Read more...</button></p>');
                    }
                } else {
                    console.log('erreur');
                }

                return false;
            }).fail(function () {
                return false;
            });
        }
    })

    $(".slick-jury").on("beforeChange", function (event, slick ,currentSlide, nextSlide){
        $(this).find('.slick-slide').find('.item-slick-jury').find('img').css('margin-bottom', '0px');
        $(this).find('.slick-slide').find('.item-slick-jury').find('img').css('border-bottom', '0px solid #FF0080');

        if ($(window).width() > 576){
            $(this).find('.slick-slide[data-slick-index="'+(nextSlide+1)+'"]').find('.item-slick-jury').find('img').css('margin-bottom', '5px');
            $(this).find('.slick-slide[data-slick-index="'+(nextSlide+1)+'"]').find('.item-slick-jury').find('img').css('border-bottom', '2px solid #FF0080');
            // var user_id= $(this).find('.slick-slide[data-slick-index="'+(nextSlide+1)+'"]').find('.item-slick-jury').attr('data-id');
            var user_id= $(this).find('.slick-slide[data-slick-index="'+(nextSlide)+'"]').find('.item-slick-jury').attr('data-id');
        } else{
            $(this).find('.slick-slide[data-slick-index="'+(nextSlide)+'"]').find('.item-slick-jury').find('img').css('margin-bottom', '5px');
            $(this).find('.slick-slide[data-slick-index="'+(nextSlide)+'"]').find('.item-slick-jury').find('img').css('border-bottom', '2px solid #FF0080');
            var user_id= $(this).find('.slick-slide[data-slick-index="'+(nextSlide)+'"]').find('.item-slick-jury').attr('data-id');
        }


        if (user_id != undefined){
            $.ajax({
                url: ajaxurl,
                method: "POST",
                data:{
                    id: user_id,
                    action: 'getUserById'
                },
            }).done(function (response) {
                if(response.success) {
                    $('.infos-jury-index').empty();
                    var displayname = response.user.data['display_name'];
                    if(typeof response.meta['name_to_display'] !== 'undefined'){
                        var name_to_display = response.meta['name_to_display'][0];
                        $('.infos-jury-index').append('<p class="font-weight-bold mb-2 text-center">'+name_to_display+'</p>');
                    }
                    if (typeof response.meta['title_to_display'] !== 'undefined') {
                        var title_to_display = response.meta['title_to_display'][0];
                        $('.infos-jury-index').append('<p class="text-tech-color mb-2 text-center">'+title_to_display+'</p>');
                    }
                    if (typeof response.meta['company_to_display'] !== 'undefined'  && typeof response.meta['company_to_display_url'] !== 'undefined') {
                        var company_to_display = response.meta['company_to_display'][0];
                        var company_to_display_url = response.meta['company_to_display_url'][0];
                        $('.infos-jury-index').append('<p class="mb-2 text-center"><a class="text-white" href="'+company_to_display_url+'">'+company_to_display+'</a></p>');
                    }
                    // var nickname = response.nickname;
                    var bio = response.bio;
                    $('.infos-jury-index').append('<p>'+shorten_text(bio, 300, '...',false)+'</p>');
                    if (bio){
                        $('.infos-jury-index').append('<p class="text-right"><button id="buttonModalJury"  class="buttonRose" data-id="'+user_id+'">Read more...</button></p>');
                    }
                } else {
                    console.log('erreur');
                }

                return false;
            }).fail(function () {
                return false;
            });
        }
    })


    $(".slick-coach").on("init", function (event, slick){
        $(this).find('.slick-slide[data-slick-index="1"]').find('.item-slick-coach').find('img').css('margin-bottom', '5px');

        if ($(window).width() > 576){
            $(this).find('.slick-slide[data-slick-index="1"]').find('.item-slick-coach').find('img').css('border-bottom', '2px solid #FF0080');
            // var user_id= $(this).find('.slick-slide[data-slick-index="1"]').find('.item-slick-coach').attr('data-id');
            var user_id= $(this).find('.slick-slide[data-slick-index="0"]').find('.item-slick-coach').attr('data-id');
        } else{
            $(this).find('.slick-slide[data-slick-index="0"]').find('.item-slick-coach').find('img').css('border-bottom', '2px solid #FF0080');
            var user_id= $(this).find('.slick-slide[data-slick-index="0"]').find('.item-slick-coach').attr('data-id');
        }
        if (user_id != undefined){
            $.ajax({
                url: ajaxurl,
                method: "POST",
                data:{
                    id: user_id,
                    action: 'getUserById'
                },
            }).done(function (response) {
                if(response.success) {
                    $('.infos-coach-index').empty();
                    console.log(response.meta);
                    var displayname = response.user.data['display_name'];
                    if(typeof response.meta['name_to_display'] !== 'undefined'){
                        var name_to_display = response.meta['name_to_display'][0];
                        $('.infos-coach-index').append('<p class="font-weight-bold mb-2 text-center">'+name_to_display+'</p>');
                    }
                    if (typeof response.meta['title_to_display'] !== 'undefined') {
                        var title_to_display = response.meta['title_to_display'][0];
                        $('.infos-coach-index').append('<p class="text-tech-color mb-2 text-center">'+title_to_display+'</p>');
                    }
                    if (typeof response.meta['company_to_display'] !== 'undefined' && typeof response.meta['company_to_display_url'] !== 'undefined') {
                        var company_to_display = response.meta['company_to_display'][0];
                        var company_to_display_url = response.meta['company_to_display_url'][0];
                        $('.infos-coach-index').append('<p class="mb-2 text-center"><a class="text-white" href="'+company_to_display_url+'">'+company_to_display+'</a></p>');
                    }
                    var nickname = response.nickname;
                    var bio = response.bio;
                    $('.infos-coach-index').append('<p>'+shorten_text(bio, 300, '...',false)+'</p>');
                    if (bio){
                        $('.infos-coach-index').append('<p class="text-right"><button id="buttonModalCoach"  class="buttonRose" data-id="'+user_id+'">Read more...</button></p>');
                    }
                } else {
                    console.log('erreur');
                }

                return false;
            }).fail(function () {
                return false;
            });
        }
    })

    $(".slick-coach").on("beforeChange", function (event, slick ,currentSlide, nextSlide){
        $(this).find('.slick-slide').find('.item-slick-coach').find('img').css('margin-bottom', '0px');
        $(this).find('.slick-slide').find('.item-slick-coach').find('img').css('border-bottom', '0px solid #FF0080');

        if ($(window).width() > 576){
            $(this).find('.slick-slide[data-slick-index="'+(nextSlide+1)+'"]').find('.item-slick-coach').find('img').css('margin-bottom', '5px');
            $(this).find('.slick-slide[data-slick-index="'+(nextSlide+1)+'"]').find('.item-slick-coach').find('img').css('border-bottom', '2px solid #FF0080');
            // var user_id= $(this).find('.slick-slide[data-slick-index="'+(nextSlide+1)+'"]').find('.item-slick-coach').attr('data-id');
            var user_id= $(this).find('.slick-slide[data-slick-index="'+(nextSlide)+'"]').find('.item-slick-coach').attr('data-id');
        } else{
            $(this).find('.slick-slide[data-slick-index="'+(nextSlide)+'"]').find('.item-slick-coach').find('img').css('margin-bottom', '5px');
            $(this).find('.slick-slide[data-slick-index="'+(nextSlide)+'"]').find('.item-slick-coach').find('img').css('border-bottom', '2px solid #FF0080');
            var user_id= $(this).find('.slick-slide[data-slick-index="'+(nextSlide)+'"]').find('.item-slick-coach').attr('data-id');
        }


        if (user_id != undefined){
            $.ajax({
                url: ajaxurl,
                method: "POST",
                data:{
                    id: user_id,
                    action: 'getUserById'
                },
            }).done(function (response) {
                if(response.success) {
                    $('.infos-coach-index').empty();
                    var displayname = response.user.data['display_name'];
                    if(typeof response.meta['name_to_display'] !== 'undefined'){
                        var name_to_display = response.meta['name_to_display'][0];
                        $('.infos-coach-index').append('<p class="font-weight-bold mb-2 text-center">'+name_to_display+'</p>');
                    }
                    if (typeof response.meta['title_to_display'] !== 'undefined') {
                        var title_to_display = response.meta['title_to_display'][0];
                        $('.infos-coach-index').append('<p class="text-tech-color mb-2 text-center">'+title_to_display+'</p>');
                    }
                    if (typeof response.meta['company_to_display'] !== 'undefined' && typeof response.meta['company_to_display_url'] !== 'undefined') {
                        var company_to_display = response.meta['company_to_display'][0];
                        var company_to_display_url = response.meta['company_to_display_url'][0];
                        $('.infos-coach-index').append('<p class="mb-2 text-center"><a class="text-white" href="'+company_to_display_url+'">'+company_to_display+'</a></p>');
                    }
                    var nickname = response.nickname;
                    var bio = response.bio;
                    $('.infos-coach-index').append('<p>'+shorten_text(bio, 300, '...',false)+'</p>');
                    if (bio){
                        $('.infos-coach-index').append('<p class="text-right"><button id="buttonModalCoach"  class="buttonRose" data-id="'+user_id+'">Read more...</button></p>');
                    }
                } else {
                    console.log('erreur');
                }

                return false;
            }).fail(function () {
                return false;
            });
        }
    });


    function shadow_text(text, max_length = 100, cut_off = '...')
    {
        if(text.length <= max_length) {
            return text;
        }

        if(text.length > max_length) {
            var textClear = text.substr(0, max_length);
            var textShadow = "<span class='shadow-text'>" + text.substr(max_length, 250) + "</span>";
            text = textClear + textShadow + " " + "<span class='shadow-text-cutoff'>" + cut_off + "</span>";
        }

        return text;
    }
    function shadow_text_all(text, max_length = 100, cut_off = '...')
    {
        if(text.length <= max_length) {
            return text;
        }

        if(text.length > max_length) {
            // var textClear = text.substr(0, max_length);
            var textShadow = "<span class='shadow-text'>" + text.substr(0, max_length) + "</span>";
            text = textShadow + " " + "<span class='shadow-text-cutoff'>" + cut_off + "</span>";
        }

        return text;
    }


    function shorten_text(text, max_length = 100, cut_off = '...', keep_word = false)
    {
        if(text.length <= max_length) {
            return text;
        }

        if(text.length > max_length) {
            if(keep_word) {
                text = text.substr(0, max_length + 1);
                var last_space = text.indexOf(' ');
                if(last_space == text.indexOf(' ')) {
                    text = text.substr( 0, last_space);
                    text = text.trimEnd();
                    text +=  cut_off;
                }
            } else {
                text = text.substr( 0, max_length);
                text = text.trimEnd();
                text +=  cut_off;
            }
        }

        return text;
    }

    // if($('.project-description.project-description-challenge').length>0 && $('.container-participant-corner').length < 1){
    //     $.ajax({
    //         url: ajaxurl,
    //         method: "POST",
    //         data:{
    //             action: 'isUserLoggedIn'
    //         },
    //     }).done(function (response) {
    //         if(response.success) {
    //         } else {
    //             var textBeforeShadow = $('.project-description.project-description-challenge').find('h2').eq(1).nextAll('p').first().html();
    //             var textAfterShadow = shadow_text_all(textBeforeShadow, 200, '...');
    //             $('.project-description.project-description-challenge').find('h2').eq(1).nextAll('p').first().html(textAfterShadow);
    //             $('.project-description.project-description-challenge').find('h2').eq(1).css('user-select', 'none');
    //             $('.project-description.project-description-challenge').find('h2').eq(1).nextAll().css('user-select', 'none');
    //             var topP = $('.project-description.project-description-challenge').find('h2').eq(1).nextAll('p').first().position().top;
    //             var heightP = $('.project-description.project-description-challenge').find('h2').eq(1).nextAll('p').first().height();
    //             var button_height = $('div.button-notLogged').height();
    //             var topButton = topP + (heightP/2) - (button_height/2);
    //             $('div.button-notLogged').css('position','absolute');
    //             $('div.button-notLogged').css('top', topButton);
    //             $('.project-description.project-description-challenge').find('h2').eq(1).nextAll('*:not(:first, .button-notLogged)').remove();
    //         }
    //
    //         return false;
    //     }).fail(function () {
    //         return false;
    //     });
    //
    //     $(window).on("load resize scroll",function(e){
    //         if ($('.project-description.project-description-challenge').length > 0){
    //             var topP = $('.project-description.project-description-challenge').find('h2').eq(1).nextAll('p').first().position().top;
    //             var heightP = $('.project-description.project-description-challenge').find('h2').eq(1).nextAll('p').first().height();
    //             var button_height = $('div.button-notLogged').height();
    //             var topButton = topP + (heightP/2) - (button_height/2);
    //             $('div.button-notLogged').css('position','absolute');
    //             $('div.button-notLogged').css('top', topButton);
    //         }
    //     });
    //
    // }




    $(".slick-jury-modal").on("init", function (event, slick){

        var user_id= $(this).find('.slick-slide.slick-current').find('.item-slick-jury-modal').attr('data-id');
        // console.log(user_id);
        if (user_id != undefined){
            $.ajax({
                url: ajaxurl,
                method: "POST",
                data:{
                    id: user_id,
                    action: 'getUserById'
                },
            }).done(function (response) {
                if(response.success) {
                    var displayname = response.user.data['display_name'];
                    var nickname = response.nickname;
                    var bio = response.bio;
                    // console.log(displayname);
                    // console.log(nickname);
                    // console.log(bio);
                    $('.infos-jury-index-modal').empty();
                    $('.infos-jury-index-modal').append('<p>'+bio+'</p>');
                } else {
                    console.log('erreur');
                }

                return false;
            }).fail(function () {
                return false;
            });
        }
    })

    $(".slick-jury-modal").on("afterChange", function (event, slick ,currentSlide, nextSlide){
        var user_id= $(this).find('.slick-slide.slick-current').find('.item-slick-jury-modal').attr('data-id');
        // console.log(nextSlide);
        // console.log(user_id);
        if (user_id != undefined){
            $.ajax({
                url: ajaxurl,
                method: "POST",
                data:{
                    id: user_id,
                    action: 'getUserById'
                },
            }).done(function (response) {
                if(response.success) {
                    var displayname = response.user.data['display_name'];
                    var nickname = response.nickname;
                    var bio = response.bio;
                    // console.log(displayname);
                    // console.log(nickname);
                    // console.log(bio);
                    $('.infos-jury-index-modal').empty();
                    $('.infos-jury-index-modal').append('<p>'+bio+'</p>');
                } else {
                    console.log('erreur');
                }

                return false;
            }).fail(function () {
                return false;
            });
        }
    })

    $(".slick-coach-modal").on("init", function (event, slick){

        var user_id= $(this).find('.slick-slide.slick-current').find('.item-slick-coach-modal').attr('data-id');
        // console.log(user_id);
        if (user_id != undefined){
            $.ajax({
                url: ajaxurl,
                method: "POST",
                data:{
                    id: user_id,
                    action: 'getUserById'
                },
            }).done(function (response) {
                if(response.success) {
                    var displayname = response.user.data['display_name'];
                    var nickname = response.nickname;
                    var bio = response.bio;
                    // console.log(displayname);
                    // console.log(nickname);
                    // console.log(bio);
                    $('.infos-coach-index-modal').empty();
                    $('.infos-coach-index-modal').append('<p>'+bio+'</p>');
                } else {
                    console.log('erreur');
                }

                return false;
            }).fail(function () {
                return false;
            });
        }
    });

    $(".slick-coach-modal").on("afterChange", function (event, slick ,currentSlide, nextSlide){
        var user_id= $(this).find('.slick-slide.slick-current').find('.item-slick-coach-modal').attr('data-id');
        // console.log(nextSlide);
        // console.log(user_id);
        if (user_id != undefined){
            $.ajax({
                url: ajaxurl,
                method: "POST",
                data:{
                    id: user_id,
                    action: 'getUserById'
                },
            }).done(function (response) {
                if(response.success) {
                    var displayname = response.user.data['display_name'];
                    var nickname = response.nickname;
                    var bio = response.bio;
                    // console.log(displayname);
                    // console.log(nickname);
                    console.log(bio);
                    $('.infos-coach-index-modal').empty();
                    $('.infos-coach-index-modal').append('<p>'+bio+'</p>');
                } else {
                    console.log('erreur');
                }

                return false;
            }).fail(function () {
                return false;
            });
        }
    });

    if($('#connexionModalLogin').length>0){
        $('#connexionModalLogin').on('click', function (e) {
            e.preventDefault();
            var error = false;
            var errorInput = "";
            var errorMessages = $('.errorMessages');
            errorMessages.empty();
            var password = $('#passwordLoginModal').val();
            var email = $('#emailLoginModal').val();

            if ( (password.trim().length < 1) ){
                errorInput += '<p>Mail or password incorrect.</p>';
                error = true;
            }
            if ( (email.trim().length == "") ){
                errorInput += '<p>Mail or password incorrect.</p>';
                error = true;
            }

            if (!error){
                var data = $('#loginFormModal').serialize();
                console.log(window.location.href);

                if(window.location.href.includes('finish')){
                    console.log('here');
                    data += '&url=finish-your-registration';
                    console.log(data);
                }
                $.ajax({
                    type: "POST",
                    url: ajaxurl,
                    data: data,
                    dataType: "json",
                    success: function(data) {
                        //var obj = jQuery.parseJSON(data); if the dataType is not specified as json uncomment this
                        // do what ever you want with the server response
                        if(data == 'errorUser')
                        {
                            errorInput = '<p>Mail or password incorrect.</p>';
                            errorMessages.append(errorInput);
                            errorMessages.removeClass('d-none');
                        }
                        else if(data == false)
                        {
                            errorInput = '<p>Please complete all fields</p>';
                            errorMessages.append(errorInput);
                            errorMessages.removeClass('d-none');
                        }else{
                            window.location.replace(data);
                        }
                    },
                    error: function() {
                        // console.log('error handling here');
                    }
                });
            }else{
                errorMessages.append(errorInput);
                errorMessages.removeClass('d-none');
            }
        });
    }


    if($('#inscriptionModalInscriptionPostEvent').length>0){
        $('#inscriptionModalInscriptionPostEvent').on('click', function (e) {
            e.preventDefault();
            var error = false;
            var errorInput = "";
            var errorMessages = $('.errorMessagesInscriptionPostEvent');
            errorMessages.empty();
            var name = $('#nameInscriptionPostEventModal').val();
            var surname = $('#surnameInscriptionPostEventModal').val();
            var password = $('#passwordInscriptionPostEventModal').val();
            var confirmPassword = $('#confirmPasswordInscriptionPostEventModal').val();
            var email = $('#emailInscriptionPostEventModal').val();

            if ( (password.trim().length < 1) || (confirmPassword.trim().length < 1) || (password != confirmPassword)  ){
                errorInput += '<p>Mail or password incorrect.</p>';
                error = true;
            }
            if ( (email.trim().length == "") ){
                errorInput += '<p>Mail or password incorrect.</p>';
                error = true;
            }
            if ( (name.trim().length == "") ){
                errorInput += '<p>Please enter a name.</p>';
                error = true;
            }
            if ( (surname.trim().length == "") ){
                errorInput += '<p>Please enter a surname.</p>';
                error = true;
            }

            if (!error){
                var data = $('#inscriptionPostEventFormModal').serialize();
                $.ajax({
                    type: "POST",
                    url: ajaxurl,
                    data: data,
                    dataType: "json",
                    success: function(data) {
                        if(data == false)
                        {
                            errorInput = '<p>Please complete all fields.</p>';
                            errorMessages.append(errorInput);
                            errorMessages.removeClass('d-none');
                        }else{
                            window.location.reload(true);
                        }
                    },
                    error: function() {
                        // console.log('error handling here');
                    }
                });
            }else{
                errorMessages.append(errorInput);
                errorMessages.removeClass('d-none');
            }
        });
    }


    tinymce.init({
        selector: '#project_description',
        plugins: [
            'autolink lists link charmap preview hr',
            'searchreplace wordcount visualblocks fullscreen',
            'insertdatetime nonbreaking save',
            'paste'
        ],
        toolbar1: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview',
        image_advtab: true,
        menubar: false,
        branding: false,
        style_formats: [
            {title: 'Headers', items: [
                    {title: 'Header 1', format: 'h1'},
                    {title: 'Header 2', format: 'h2'},
                    {title: 'Header 3', format: 'h3'},
                    {title: 'Header 4', format: 'h4'},
                    {title: 'Header 5', format: 'h5'},
                    {title: 'Header 6', format: 'h6'}
                ]},
            {title: 'Inline', items: [
                    {title: 'Bold', icon: 'bold', format: 'bold'},
                    {title: 'Italic', icon: 'italic', format: 'italic'},
                    {title: 'Underline', icon: 'underline', format: 'underline'},
                    {title: 'Strikethrough', icon: 'strikethrough', format: 'strikethrough'},
                    {title: 'Superscript', icon: 'superscript', format: 'superscript'},
                    {title: 'Subscript', icon: 'subscript', format: 'subscript'}
                ]},
            {title: 'Blocks', items: [
                    {title: 'Paragraph', format: 'p'},
                    {title: 'Blockquote', format: 'blockquote'}
                ]},
            {title: 'Alignment', items: [
                    {title: 'Left', icon: 'alignleft', format: 'alignleft'},
                    {title: 'Center', icon: 'aligncenter', format: 'aligncenter'},
                    {title: 'Right', icon: 'alignright', format: 'alignright'},
                    {title: 'Justify', icon: 'alignjustify', format: 'alignjustify'}
                ]}
        ]
    });

    $(document).ready(function(){
        submitASolution();
        $('body').on('click', '#buttonModalCoach',function (e) {
            e.preventDefault();
            var user_id = $(this).attr('data-id');
            $(".ProfileCoachModal").attr('data-id', user_id);
            $(".ProfileCoachModal").modal('toggle');
        });
        $('body').on('click','#buttonModalJury',function (e) {
            e.preventDefault();
            var user_id = $(this).attr('data-id');
            $(".ProfileJuryModal").attr('data-id', user_id);
            $(".ProfileJuryModal").modal('toggle');
        });
        if ($('.modalConfirmInscription#modalConfirmInscription').length>0){
            $('#modalConfirmInscription').modal('show');
        }
    });

    /**********************
     * *******************
     * Submit a solution
     * ******************
     * *****************
     */
    tinymce.init({
        selector: '#solution_description',
        plugins: [
            'autolink lists link charmap preview hr',
            'searchreplace wordcount visualblocks fullscreen',
            'insertdatetime nonbreaking save',
            'paste'
        ],
        toolbar1: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview',
        image_advtab: true,
        menubar: false,
        branding: false,
        style_formats: [
            {title: 'Headers', items: [
                    {title: 'Header 1', format: 'h1'},
                    {title: 'Header 2', format: 'h2'},
                    {title: 'Header 3', format: 'h3'},
                    {title: 'Header 4', format: 'h4'},
                    {title: 'Header 5', format: 'h5'},
                    {title: 'Header 6', format: 'h6'}
                ]},
            {title: 'Inline', items: [
                    {title: 'Bold', icon: 'bold', format: 'bold'},
                    {title: 'Italic', icon: 'italic', format: 'italic'},
                    {title: 'Underline', icon: 'underline', format: 'underline'},
                    {title: 'Strikethrough', icon: 'strikethrough', format: 'strikethrough'},
                    {title: 'Superscript', icon: 'superscript', format: 'superscript'},
                    {title: 'Subscript', icon: 'subscript', format: 'subscript'}
                ]},
            {title: 'Blocks', items: [
                    {title: 'Paragraph', format: 'p'},
                    {title: 'Blockquote', format: 'blockquote'}
                ]},
            {title: 'Alignment', items: [
                    {title: 'Left', icon: 'alignleft', format: 'alignleft'},
                    {title: 'Center', icon: 'aligncenter', format: 'aligncenter'},
                    {title: 'Right', icon: 'alignright', format: 'alignright'},
                    {title: 'Justify', icon: 'alignjustify', format: 'alignjustify'}
                ]}
        ]
    });

    tinymce.init({
        selector: '#available_ressource',
        plugins: [
            'autolink lists link charmap preview hr',
            'searchreplace wordcount visualblocks fullscreen',
            'insertdatetime nonbreaking save',
            'paste'
        ],
        toolbar1: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview',
        image_advtab: true,
        menubar: false,
        branding: false,
        style_formats: [
            {title: 'Headers', items: [
                    {title: 'Header 1', format: 'h1'},
                    {title: 'Header 2', format: 'h2'},
                    {title: 'Header 3', format: 'h3'},
                    {title: 'Header 4', format: 'h4'},
                    {title: 'Header 5', format: 'h5'},
                    {title: 'Header 6', format: 'h6'}
                ]},
            {title: 'Inline', items: [
                    {title: 'Bold', icon: 'bold', format: 'bold'},
                    {title: 'Italic', icon: 'italic', format: 'italic'},
                    {title: 'Underline', icon: 'underline', format: 'underline'},
                    {title: 'Strikethrough', icon: 'strikethrough', format: 'strikethrough'},
                    {title: 'Superscript', icon: 'superscript', format: 'superscript'},
                    {title: 'Subscript', icon: 'subscript', format: 'subscript'}
                ]},
            {title: 'Blocks', items: [
                    {title: 'Paragraph', format: 'p'},
                    {title: 'Blockquote', format: 'blockquote'}
                ]},
            {title: 'Alignment', items: [
                    {title: 'Left', icon: 'alignleft', format: 'alignleft'},
                    {title: 'Center', icon: 'aligncenter', format: 'aligncenter'},
                    {title: 'Right', icon: 'alignright', format: 'alignright'},
                    {title: 'Justify', icon: 'alignjustify', format: 'alignjustify'}
                ]}
        ]
    });

    function submitASolution(){
        $("#formSubmitASolution").submit(function (e) {
            e.preventDefault();
            var success = true;
            $('.error-form').addClass('d-none');


            $('#' + 'solution_description').html( tinymce.get('solution_description').getContent() );
            $('#' + 'available_ressource').html( tinymce.get('available_ressource').getContent() );
            if ($('input[name="user_name"]').val() == ""){
                $('.error-form#error-form-user-name').removeClass('d-none');
                success = false;
            }
            if ($('input[name="user_mail"]').val() == ""){
                $('.error-form#error-form-user-mail').removeClass('d-none');
                success = false;
            }
            if ($('input[name="company_name"]').val() == ""){
                $('.error-form#error-form-company-name').removeClass('d-none');
                success = false;
            }
            if (tinymce.get('solution_description').getContent() == ""){
                $('.error-form#error-form-solution-description').removeClass('d-none');
                success = false;
            }
            if (tinymce.get('available_ressource').getContent() == ""){
                $('.error-form#error-form-available-ressource').removeClass('d-none');
                success = false;
            }
            if (success){
                var form_data = new FormData();
                form_data.append('formData', $("#formSubmitASolution").serialize());
                form_data.append('action', 'SubmitASolution');
                var files = [];
                $('input[name="solution_logo"]').each(function (key, value) {
                    form_data.append(0, $('input[name="solution_logo"]')[key].files[0]);
                });
                $.ajax({
                    url: ajaxurl,
                    method: "POST",
                    dataType:'json',
                    data:form_data,
                    contentType: false,
                    processData: false,
                }).done(function (response) {
                    if (response.success){
                        $('#modal-success-submit-solution').modal({
                            backdrop: 'static',
                            keyboard: true,
                            show: true
                        });
                    } else {
                        // console.log('erreur');
                    }
                    return false;
                }).fail(function () {
                    return false;
                });
            }
            return false;
        })
    }

    /****************
     *****************
     * **************
     * END SUBMIT SOLUTION
     * **********
     * ***********
     * *********
     */

    $('#RepresentCompany').on('click', function(e){
        if($(this).attr('checked')){
            $('#companyWebAddressRow').removeClass('d-none');
        }
    });

    $('#btnRegister').on('click', function(event){
        event.preventDefault();

        $.ajax({
                    url: ajaxurl,
                    method: "POST",
                    data:{
                        action: $('#action').val(),
                        projectDescription: $('#projectDescription').val(),
                        projectVideo: $('#projectVideo').val(),
                        projectSupport: $('#projectSupport').val(),
                        projectMotivation: $('#projectMotivation').val(),
                        projectHear: $('#projectHeard').val()
                    },
                }).done(function (response) {
                    // $('form').addClass('d-none');
                    $('#messageStep').removeClass('d-none');
                    $('#btnRegister').addClass('d-none');
                }).fail(function () {
                    return false;
                });
    })

});


}
/*
     FILE ARCHIVED ON 23:52:55 Apr 01, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:47 Sep 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.936
  exclusion.robots: 0.037
  exclusion.robots.policy: 0.018
  esindex: 0.016
  cdx.remote: 45.541
  LoadShardBlock: 214.518 (3)
  PetaboxLoader3.datanode: 261.727 (5)
  load_resource: 210.21 (2)
*/