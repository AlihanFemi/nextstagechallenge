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
    
    $(document).ready(function () {
        $(document).on('change  paste keyup', '#teamName' ,function (e) {
            e.preventDefault();
            var value = $(this).val();
            console.log(value);
            if (value != undefined && value.trim() != ""){
                $('.nextStepSetupTeam').removeClass('disabled');
            }else{
                $('.nextStepSetupTeam').addClass('disabled');
            }
        })

        if($('#teamName').val() != undefined && $('#teamName').val().trim() != "") {
            $('.nextStepSetupTeam').removeClass('disabled');
        }else{
            $('.nextStepSetupTeam').addClass('disabled');
        }

        // if ($('.teamid').length>0){
        //     if ($('.teamid').attr('team-id') != undefined && $('.teamid').attr('team-id') !=false && $('.teamid').attr('team-id') > 1)
        //         $('.nextStepSetupTeam').attr('teamid', $('.teamid').attr('team-id'));
        // }
        //nav next different step
        $('.nextStepSetupTeam').on('click', function (e) {
            e.preventDefault();
            if ($('.active').hasClass('row-resume-team')){
                $('.row-resume-team').removeClass('active');
                $('.row-choose-cat').addClass('active');
                $('.row-resume-team').fadeOut(function () {
                    $('.backStepSetupTeam').removeClass('d-none');
                    if ($('.nextStepSetupTeam').attr('cat-id') == undefined || $('.nextStepSetupTeam').attr('cat-id') == false || $('.nextStepSetupTeam').attr('cat-id') < 1){
                        $('.nextStepSetupTeam').addClass('disabled');
                    }
                    $('.nextStepSetupTeam').attr('step','choose-cat');
                    $('.hr-line-step-setup-team').eq(0).addClass('activated').delay(500).queue(function (next) {
                        $('.container-circle-step').eq(1).addClass('activated');
                        next();
                    });
                    $('.row-choose-cat').fadeIn(function () {
                        $('.slick-setup-team').resize();
                        $('.slick-setup-team').css('visibility', 'visible');
                        $('.slick-setup-team').slick("setPosition", 0);
                    });
                });
            } else if ($('.active').hasClass('row-choose-cat')){

                $('.row-choose-cat').removeClass('active');
                $('.row-choose-challenges').addClass('active');
                $('.row-choose-cat').fadeOut(function () {
                    $('.slick-setup-team').css('visibility', 'hidden');
                    if ($('.nextStepSetupTeam').attr('post-id') == undefined || $('.nextStepSetupTeam').attr('post-id') == false || $('.nextStepSetupTeam').attr('post-id') < 1){
                        $('.nextStepSetupTeam').addClass('disabled');
                    }
                    if ($('.nextStepSetupTeam').hasClass("createChallengeTeam")) {
                        $('.nextStepSetupTeam').text('ACCESS YOUR CORNER');
                    }else if($('.nextStepSetupTeam').hasClass("updateChallengeTeam")){
                        $('.nextStepSetupTeam').text('UPDATE AND ACCESS YOUR CORNER');
                    }
                    $('.nextStepSetupTeam').attr('step','start-hacking');
                    $('.hr-line-step-setup-team').eq(1).addClass('activated').delay(500).queue(function (next) {
                        $('.container-circle-step').eq(2).addClass('activated');
                        next();
                    });
                    $('.row-choose-challenges').fadeIn(function () {
                    });
                });
            }
        });

        //nav back different step
        $('.backStepSetupTeam').on('click', function (e) {
            e.preventDefault();
            if ($('.active').hasClass('row-choose-challenges')){
                $('.row-choose-challenges').removeClass('active');
                $('.row-choose-cat').addClass('active');
                $('.row-choose-challenges').fadeOut(function () {
                    if ($('.nextStepSetupTeam').attr('cat-id') != undefined && $('.nextStepSetupTeam').attr('cat-id') != false && $('.nextStepSetupTeam').attr('cat-id') > 0){
                        $('.nextStepSetupTeam').removeClass('disabled');
                    }
                    $('.nextStepSetupTeam').text('NEXT');
                    $('.nextStepSetupTeam').attr('step','choose-cat');
                    $('.container-circle-step').eq(2).removeClass('activated').addClass('desactived').delay(500).queue(function (next) {
                        $('.hr-line-step-setup-team').eq(1).removeClass('activated');
                        $('.hr-line-step-setup-team').eq(1).addClass('desactived');
                        next();
                    });
                    $('.row-choose-cat').fadeIn(function () {
                        $('.slick-setup-team').resize();
                        $('.slick-setup-team').css('visibility', 'visible');
                        $('.slick-setup-team').slick("setPosition", 0);
                    });
                });
            } else if ($('.active').hasClass('row-choose-cat')){
                $('.row-choose-cat').removeClass('active');
                $('.row-resume-team').addClass('active');
                $('.row-choose-cat').fadeOut(function () {
                    $('.nextStepSetupTeam').removeClass('disabled');
                    $('.slick-setup-team').css('visibility', 'hidden');
                    $('.backStepSetupTeam').removeClass('d-none');
                    $('.nextStepSetupTeam').attr('step','resume-team');
                    $('.container-circle-step').eq(1).removeClass('activated').addClass('desactived').delay(500).queue(function (next) {
                        $('.hr-line-step-setup-team').eq(0).removeClass('activated');
                        $('.hr-line-step-setup-team').eq(0).addClass('desactived');
                        next();
                    });
                    $('.row-resume-team').fadeIn(function () {
                    });
                });
            }
        });
    });

    //category choose by user
    $(document).on('click', '.linkCatCarousel', function (e) {
        if ($('.container-setup-team').length > 0){
            e.preventDefault();
            var element = $(this);
            var id_cat = element.parent().attr('data-id');

            $('.carousel-item').each(function() {
                $(this).removeClass('selected');
            });
            if (id_cat>0){
                // console.log(id_cat);
                // element.find('.carousel-details').css('background','linear-gradient(rgb(22, 18, 63, 0.67), rgb(106, 0, 128, 0.67)) !important');
                element.parent().addClass('selected');
                element.parent().css('border-bottom','2px solid #FF0080');

                // $('.carousel-item').each(function() {
                // if($(this).hasClass('selected')){
                //     var id_cat = $(this).attr('data-id');
                // console.log(id_cat);
                if (id_cat != undefined && id_cat > 0 && id_cat != ""){
                    $.ajax({
                        url: ajaxurl,
                        method: "POST",
                        data:{
                            id: id_cat,
                            action: 'getPostByCatId'
                        },
                    }).done(function (response) {
                        if(response.success) {
                            $('.container-challenges-setup-team').empty();
                            // console.log(response.success);
                            // console.log(response.posts);
                            if (response.posts === 'empty'){
                                $('.emptyCatChallenge-SetupTeam').text("This topic has no challenges for the moment.");
                                $('.emptyCatChallenge-SetupTeam').fadeIn();
                                $('.nextStepSetupTeam').addClass('disabled');
                            }else{
                                $('.emptyCatChallenge-SetupTeam').fadeOut();
                                response.posts.forEach(function (item,index) {
                                    // console.log(item);
                                    $('.container-challenges-setup-team').append("<div class='row containerChallenge containerChallengeSetupTeam ml-0 mr-0 d-flex align-items-center'>\n" +
                                        "                <div class='col-lg-1 col-12 inputSelectChalengeSetupTeam d-flex align-items-center justify-content-center'>\n" +
                                        "                        <div class='container-circle-challenge' post-id='" + item['post'].ID + "'><i class='check-container-circle-challenge fas fa-check'></i></div>\n" +
                                        "                </div>\n" +
                                        "                <div class='col-lg-2 col-12 logoChallenge d-flex align-items-center'>\n" +
                                        "                        <img class='img-fluid image-challenges image-challenges-setup-team' src='" + item['img'] + "' alt='Image post'>\n" +
                                        "                </div>\n" +
                                        "                <div class='col-lg-9 col-12 contentChallenge contentChallengeSetupTeam'>\n" +
                                        "                    <h4 class='titleChallenge paytone'>\n" +
                                        "                         " + item['post'].post_title + " \n" +
                                        "                    </h4>\n" +
                                        "                    <p class='descriptionChallenge Heebo'>\n" +
                                        "                        " + item['excerpt'] + " \n" +
                                        "                    <a class='link-challenge-setup-team' target='_blank' href="+ response.site_url  +"/challenge/?post=" + item['post'].ID + "><button class='buttonRose paytone buttonReadMoreSetupTeam float-right'>Read more...</button></a>\n" +
                                        "                    </p>\n" +
                                        "                </div>\n" +
                                        "                <div class='col-12 mt-2 container-link-challenge-setup-team-mobile text-center'>\n" +
                                        "                    <a class='link-challenge-setup-team-mobile' target='_blank' href="+ response.site_url  +"/challenge/?post=" + item['post'].ID + "><button class='buttonRose paytone buttonReadMoreSetupTeam float-right'>Read more...</button></a>\n" +
                                        "                </div>\n" +
                                        "            </div>");
                                });
                                $('.nextStepSetupTeam').removeClass('disabled');
                                $('.nextStepSetupTeam').attr('cat-id', id_cat);
                            }
                        } else {
                            // console.log('erreur');
                        }
                        return false;
                    }).fail(function () {
                        return false;
                    });
                }
                // }
                // });
            }
        }
    });

    //challenge choose by user
    $(document).on('click', '.container-circle-challenge', function (e) {
        e.preventDefault();
        var element = $(this);
        var id_post = element.attr('post-id');
        $('.container-circle-challenge').each(function() {
            $(this).removeClass('selected');
        });
        if (id_post != undefined && id_post > 0){
            element.addClass('selected');
            $('.nextStepSetupTeam').attr('post-id', id_post);
            $('.nextStepSetupTeam').removeClass('disabled');
        }

    })

    //register choice of team
    $(document).on('click', '.nextStepSetupTeam', function (e) {
        e.preventDefault();
        var element = $(this);
        if (element.attr('step') === 'start-hacking'){
            var id_post = element.attr('post-id');
            var id_cat = element.attr('cat-id');
            var id_team = element.attr('teamid');
            var name_team = $('#teamName').val();
        }
        if (id_post != undefined && id_post > 0 && id_cat != undefined && id_cat > 0 && id_team != undefined && id_team > 0 && name_team != undefined && name_team.trim() != ""){
            if (element.hasClass("createChallengeTeam")) {
                $.ajax({
                    url: ajaxurl,
                    method: "POST",
                    data:{
                        id_post: id_post,
                        id_cat: id_cat,
                        id_team: id_team,
                        name_team: name_team,
                        action: 'registerTeamChallenge'
                    },
                }).done(function (response) {
                    if(response.success && response.teamchallenge > 0) {
                        window.location.replace(response.site_url + "/participants-corner/?team=" + response.teamchallenge);
                    } else {
                        console.log('erreur');
                    }

                    return false;
                }).fail(function () {
                    return false;
                });
            }else if (element.hasClass("updateChallengeTeam")){
                var challengeid = element.attr('challengeid');
                if (challengeid != undefined && challengeid > 0) {
                    $.ajax({
                        url: ajaxurl,
                        method: "POST",
                        data:{
                            id_post: id_post,
                            id_cat: id_cat,
                            id_team: id_team,
                            name_team: name_team,
                            challengeid: challengeid,
                            action: 'updateTeamChallenge'
                        },
                    }).done(function (response) {
                        if(response.success && response.teamchallenge > 0) {
                            window.location.replace(response.site_url + "/participants-corner/?team=" + response.teamchallenge);
                        } else {
                            console.log('erreur');
                        }

                        return false;
                    }).fail(function () {
                        return false;
                    });
                }
            }
        }
    })
    
});

}
/*
     FILE ARCHIVED ON 23:52:58 Apr 01, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:48 Sep 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 3.109
  exclusion.robots: 0.031
  exclusion.robots.policy: 0.015
  esindex: 0.013
  cdx.remote: 147.326
  LoadShardBlock: 199.763 (3)
  PetaboxLoader3.datanode: 298.56 (5)
  load_resource: 209.334 (2)
*/