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

    /*****************
     Pregister part
     *****************/

    var regexemail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    function PushErrorMessage(controlName, errorMessage) {
        var obj = $("span[data-valmsg-for='" + controlName + "']")
        obj.removeClass("hidden");
        obj.html(errorMessage);
        obj.show();
    }

    function ReinitErrorMessage() {
        $("span[data-valmsg-for]").each(function () {
            $(this).addClass("hidden");
        });
        $('.gdpr-error').addClass('d-none');
    }

    //detect photo individual input change
    $(document).on('change', 'input:file', function (e) {
        var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
        //var fileName = $(this).val();
        if (fileName) {
            $("#formHasPhoto").removeClass('hidden');
            $(this).siblings("#labelFormPhoto").text(fileName);
        } else {
            $("#formHasPhoto").addClass('hidden');
            $(this).siblings("#labelFormPhoto").text(fileName);
        }
    });


    //change form
    $("input:radio[name='choiceInscriptionForm']").change(function () {
        var form = $(this).val();
        if (form == 'checkTeamForm') {
            $("div.individualForm").addClass('teamForm').removeClass('individualForm');
            $('.infoTeamLeader').removeClass('d-none');
            $("#addMemberTeam").removeClass('d-none');
        } else if (form == 'checkIndividualForm') {
            $("div.teamForm").addClass('individualForm').removeClass('teamForm');
            $("#addMemberSpace").empty();
            $('.infoTeamLeader').addClass('d-none');
            $("button#addMemberTeam").addClass('d-none');
            $("button#btnGoForm").removeClass('disabled');
        }
    });

    var countMember = 1;
    $('#addMemberTeam').on('click', function (e) {
        if (countMember < 10) {
            e.preventDefault();
            var subform = $('.teamForm').eq(0).clone();
            subform.trigger('reset');
            var actual = $('.teamForm').length;
            subform.find('input').val('');
            subform.find('textarea').val('');
            subform.find('.business-background-container').addClass('d-none');
            subform.find('.design-background-container').addClass('d-none');
            subform.find('.technology-background-container').addClass('d-none');
            subform.find('#labelFormPhoto').text('Choose file');
            subform.find("#formHasPhoto").addClass('hidden');
            subform.appendTo('#addMemberSpace');
            subform.attr('id', "teamform_" + actual);
            subform.find('.deleteFormRegisterIcon').attr('id', "deleteFormRegisterIcon_" + actual);

            $('#addMemberSpace .teamForm').each(function () {
                $(this).addClass('mt-5')
            });
            $('#btnGoForm').removeClass('disabled');
            countMember += 1;
        }
    });


    $(document).on('click', '.deleteFormRegisterIcon', function (e) {
        e.preventDefault();
        var id = $(this).attr('id');
        var numForm = id.split('_');
        numForm = numForm[1];
        $('.teamForm#teamform_' + numForm).remove();
        countMember -= 1;
    });

    $(document).on('change', '.profile', function (e) {
        var target = $(this);
        var value = $(this).val();
        if (value == 1) {
            target.parents('.subform').find('.technology-background-container').removeClass('d-none');
            target.parents('.subform').find('.business-background-container').addClass('d-none');
            target.parents('.subform').find('.design-background-container').addClass('d-none');

            // $('.technology-background-container').removeClass('d-none');
        } else if (value == 2) {
            target.parents('.subform').find('.technology-background-container').addClass('d-none');
            target.parents('.subform').find('.business-background-container').removeClass('d-none');
            target.parents('.subform').find('.design-background-container').addClass('d-none');

            // $('.business-background-container').removeClass('d-none');
        } else if (value == 3) {
            target.parents('.subform').find('.technology-background-container').addClass('d-none');
            target.parents('.subform').find('.business-background-container').addClass('d-none');
            target.parents('.subform').find('.design-background-container').removeClass('d-none');


            // $('.design-background-container').removeClass('d-none');
        }
    });

    $('.deleteProfileButton').on('click', function (e) {
        $(this).closest('textarea').val('');
        $(this).closest('.profileCompetence').addClass('d-none');
        $('.profile').removeClass('disabled');
    });


    $(document).on('change  paste keyup', 'input[type=email]', function (e) {
        if ($("input:radio[name='choiceInscriptionForm']").val() == 'checkTeamForm') {
            $('#btnGoForm').removeClass('disabled');
            $('.errormsg').empty();
        }
    });

    //inscription team
    $("#formunsubscribe").submit(function (e) {
        e.preventDefault();
        var success = true;

        if ($("input:radio[name='choiceInscriptionForm']").val() == 'checkTeamForm') {
            lookup = [];
            $('input[type=email]').each(function (key, value) {
                var val = $(this).val();
                if (lookup.includes(val)) {
                    $('#btnGoForm').addClass('disabled');
                    $('.errormsg').append('Address mail must be unique.');
                    success = false;
                } else {
                    lookup.push(val);
                    $('#btnGoForm').removeClass('disabled');
                    $('.errormsg').empty();
                }
            });
        }
        ReinitErrorMessage();

        if(! ($('#agreed').is(':checked'))){
            success = false;
            $('.gdpr-error').removeClass('d-none');
        }

        var form_data = new FormData();
        form_data.append('formData', $("#formunsubscribe").serialize());
        form_data.append('action', 'PreregisterTeam');
        var files = [];
        $('input[name="photo[]"]').each(function (key, value) {
            form_data.append(key, $('input[name="photo[]"]')[key].files[0]);
        });
        if (success) {
            $.ajax({
                url: ajaxurl,
                method: "POST",
                dataType: 'json',
                data: form_data,
                contentType: false,
                processData: false,
            }).done(function (response) {
                $('.email-error').hide();
                if (response.success) {
                    $('.project-content p').addClass('d-none');
                    $('.gdpr-error').addClass('d-none');
                    var step = $('#messageStep').attr('step');
                    $('.project-description').html('Thank you for your ' + step + '! We are glad to have you on-board. \n' +
                        'Please check your email to confirm your registration profile and to further describe your project. \n' +
                        '\n' +
                        '\n' +
                        'The NextStageChallenge Team');
                } else {
                    var fieldError = response.error;
                    if (response.error !== undefined) {
                        $(fieldError).each(function (key, value) {

                            if(value === 'gdpr'){
                                $('.gdpr-error').removeClass('d-none');
                            }else{
                                $('#' + value).find('.email-error').show();
                            }


                        });
                    }

                }

                return false;
            }).fail(function () {
                return false;
            });
        }
        return false;

    });

});


}
/*
     FILE ARCHIVED ON 23:53:00 Apr 01, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:51 Sep 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.717
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.012
  esindex: 0.013
  cdx.remote: 299.995
  LoadShardBlock: 224.386 (3)
  PetaboxLoader3.datanode: 295.646 (5)
  load_resource: 122.68 (2)
*/