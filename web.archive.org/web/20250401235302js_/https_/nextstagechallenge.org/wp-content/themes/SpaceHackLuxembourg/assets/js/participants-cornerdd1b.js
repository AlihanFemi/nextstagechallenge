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

    String.prototype.stripSlashes = function(){
        return this.replace(/\\(.)/mg, "$1");
    }
    function updateTeamProject(){
        $("#formUpdateTeamProject").submit(function (e) {
            e.preventDefault();
            $('#' + 'project_description').html( tinymce.get('project_description').getContent() );
            var form_data = new FormData();
            form_data.append('formData', $("#formUpdateTeamProject").serialize());
            form_data.append('action', 'UpdateTeamProject');
            var files = [];
            $('input[name="project_files"]').each(function (key, value) {
                form_data.append(0, $('input[name="project_files"]')[key].files[0]);
            });
            var success = true;
            $.ajax({
                url: ajaxurl,
                method: "POST",
                dataType:'json',
                data:form_data,
                contentType: false,
                processData: false,
            }).done(function (response) {
                if (response.success){
                    // console.log(response.dataProject['project_files']);
                    // files = response.dataProject['project_files'].slice(-1);
                    // console.log(files);
                    // file = files[0];
                    // console.log(file.project_file_name);
                    $('.contentProjectTeam').each(function() {
                        $(this).empty();
                    });
                    if (response && response.dataProject && typeof (response.dataProject['project_name']) !== 'undefined' && response.dataProject['project_name'] !== null){
                        $('#project_name_div').removeClass('d-none').append('<h4>'+response.dataProject['project_name'].stripSlashes()+'</h4>');
                    }
                    if (response && response.dataProject && typeof (response.dataProject['project_description']) !== 'undefined' && response.dataProject['project_description'] !== null) {
                        $('#project_description_div').removeClass('d-none').append(response.dataProject['project_description'].stripSlashes());
                    }
                    if (response.dataProject['project_files']) {
                        $('.container-list-files').empty();
                        var table = "<table class=\"table table-hover\">\n" +
                        "  <thead>\n" +
                        "    <tr>\n" +
                        "      <th scope=\"col\">Name</th>\n" +
                        "      <th scope=\"col\">Posted By</th>\n" +
                        "      <th scope=\"col\">Date</th>\n" +
                        "      <th scope=\"col\">Download</th>\n" +
                        "    </tr>\n" +
                        "  </thead>\n" +
                        "  <tbody>";

                        response.dataProject['project_files'].forEach((value, index) => {
                            if (value && typeof (value.project_file_name) !== 'undefined') {
                                //no editpart
                                table += "<tr>\n" +
                                    "      <td>"+ value.project_file_name.stripSlashes() +"</td>\n" +
                                    "      <td>"+ value.posted_by.stripSlashes() +"</td>\n" +
                                    "      <td>"+ value.date +"</td>\n" +
                                    "      <td><a class='btn background-tech-color paytone' href='"+ value.project_file +"' download='"+ value.project_file_name +"'>Download</a></td>\n" +
                                    "    </tr>";



                                //edit part
                                $('.container-list-files').append('<span>' + value.project_file_name);
                                if(response.isLeader){
                                    $('.container-list-files').append(' <i title="Delete" file-id="' + value.id + '" class="deleteFileProject text-danger fas fa-times-circle"></i>');
                                }
                                $('.container-list-files').append('<span/>');
                                $('.container-list-files').append('<br/>');
                                $('#project_files').val('');
                            }
                        });
                        table += "</tbody>\n" +
                            "</table>";
                        $('#project_files_div').append(table);
                    }

                    if (response.dataProject['project_url']){
                        $('.container-list-url').empty();
                        response.dataProject['project_url'].forEach((value, index) => {
                            if (value && typeof value.project_url !== 'undefined') {
                                $('#project_url_div').removeClass('d-none').append('<a target="_blank" href="' + value.project_url + '">'+ value.project_url +'</a><br/>');
                                $('.container-list-url').append('<span>' + '<a target="_blank" href="' + value.project_url + '">'+ value.project_url +'</a>');
                                if(response.isLeader){
                                    $('.container-list-url').append(' <i title="Delete" url-id="' + value.id + '" class="deleteUrlProject text-danger fas fa-times-circle"></i>');
                                }
                                $('.container-list-url').append('<span/>');
                                $('.container-list-url').append('<br/>');
                                $('#project_url').val('');
                            }
                        });

                    }

                    var form = $(".project-description-cornerv2[data-edit='edit']");
                    var resume = $(".project-description-cornerv2[data-edit='noedit']");
                    form.fadeOut(function () {
                        resume.fadeIn();
                    })
                } else {
                    console.log('erreur');
                }
                return false;
            }).fail(function () {
                return false;
            });

            return false;
        })
    }

    function displayFormUpdateProject(){
        $('#btnGoToUpdateProject').on('click',function (e) {
            e.preventDefault();
            var form = $(".project-description-cornerv2[data-edit='edit']");
            var resume = $(".project-description-cornerv2[data-edit='noedit']");
            resume.fadeOut(function () {
                form.fadeIn();
            })
        })
    }


    function deleteFileProject(){
        $(document).on('click', '.deleteFileProject', function (e) {
            e.preventDefault();
            var element = $(this);
            var id = element.attr('file-id');
            $('#modalConfirmDeleteCornerFile').modal('show');
            $('#confirmDeleteFileBtn').on('click',function (e) {
                e.preventDefault();
                $('#modalConfirmDeleteCornerFile').modal('hide');
                if (id != null && id > 0 && typeof id !== 'undefined'){
                    $.ajax({
                        url: ajaxurl,
                        method: "POST",
                        data:{
                            id: id,
                            action: 'DeleteFileProject'
                        },
                    }).done(function (response) {
                        if (response.success){
                            element.parent().remove();
                        } else {
                            console.log('erreur');
                        }
                        return false;
                    }).fail(function () {
                        return false;
                    });
                }
            })

            $('#cancelDeleteFileBtn').on('click',function (e) {
                $('#modalConfirmDeleteCornerFile').modal('hide');
            })
        })
    }


    function deleteUrlProject(){
        $(document).on('click', '.deleteUrlProject', function (e) {
            e.preventDefault();
            var element = $(this);
            var id = element.attr('url-id');
            $('#modalConfirmDeleteCornerUrl').modal('show');
            $('#confirmDeleteUrlBtn').on('click',function (e) {
                e.preventDefault();
                $('#modalConfirmDeleteCornerUrl').modal('hide');
                if (id != null && id > 0 && typeof id !== 'undefined'){
                    $.ajax({
                        url: ajaxurl,
                        method: "POST",
                        data:{
                            id: id,
                            action: 'DeleteUrlProject'
                        },
                    }).done(function (response) {
                        if (response.success){
                            element.parent().remove();
                        } else {
                            console.log('erreur');
                        }
                        return false;
                    }).fail(function () {
                        return false;
                    });
                }
            });
            $('#cancelDeleteUrlBtn').on('click',function (e) {
                $('#modalConfirmDeleteCornerUrl').modal('hide');
            });
        });
    }

    function displayFilenam(){
        $('#project_files').on('change',function (e) {
            e.preventDefault();
            console.log(e.target.files[0].name);
            $('.input-file-corner').text(e.target.files[0].name)
        })
    }

    function publishProject(){
        $(document).on('click', '#btnPublishProject', function (e) {
            e.preventDefault();
            $('#modalConfirmPublishProject').modal('show');
            $('#confirmPublishProjectBtn').on('click',function (e) {
                e.preventDefault();
                var id = $(this).attr('data-id');
                var teamid = $(this).attr('data-teamid');
                $('#modalConfirmPublishProject').modal('hide');
                if (id != null && id > 0 && typeof id !== 'undefined'){
                    $.ajax({
                        url: ajaxurl,
                        method: "POST",
                        data:{
                            id: id,
                            teamid: teamid,
                            action: 'PublishProject'
                        },
                    }).done(function (response) {
                        if (response.success){
                            // console.log(response.dataProject['project_files']);
                            // files = response.dataProject['project_files'].slice(-1);
                            // console.log(files);
                            // file = files[0];
                            // console.log(file.project_file_name);
                            $('.contentProjectTeam').each(function() {
                                $(this).empty();
                            });
                            if (response && response.dataProject && typeof (response.dataProject['project_name']) !== 'undefined' && response.dataProject['project_name'] !== null){
                                $('#project_name_div').removeClass('d-none').append('<h4>'+response.dataProject['project_name'].stripSlashes()+'</h4>');
                            }
                            if (response && response.dataProject && typeof (response.dataProject['project_description']) !== 'undefined' && response.dataProject['project_description'] !== null) {
                                $('#project_description_div').removeClass('d-none').append(response.dataProject['project_description'].stripSlashes());
                            }
                            if (response.dataProject['project_files']) {
                                $('.container-list-files').empty();
                                var table = "<table class=\"table table-hover\">\n" +
                                    "  <thead>\n" +
                                    "    <tr>\n" +
                                    "      <th scope=\"col\">Name</th>\n" +
                                    "      <th scope=\"col\">Posted By</th>\n" +
                                    "      <th scope=\"col\">Date</th>\n" +
                                    "      <th scope=\"col\">NameDownload</th>\n" +
                                    "    </tr>\n" +
                                    "  </thead>\n" +
                                    "  <tbody>";

                                response.dataProject['project_files'].forEach((value, index) => {
                                    if (value && typeof (value.project_file_name) !== 'undefined') {
                                        //no editpart
                                        table += "<tr>\n" +
                                            "      <td>"+ value.project_file_name.stripSlashes() +"</td>\n" +
                                            "      <td>"+ value.posted_by.stripSlashes() +"</td>\n" +
                                            "      <td>"+ value.date +"</td>\n" +
                                            "      <td><a class='btn background-tech-color paytone' href='"+ value.project_file +"' download='"+ value.project_file_name +"'>Download</a></td>\n" +
                                            "    </tr>";



                                        //edit part
                                        $('.container-list-files').append('<span>' + value.project_file_name);
                                        $('.container-list-files').append('<span/>');
                                        $('.container-list-files').append('<br/>');
                                        $('#project_files').val('');
                                    }
                                });
                                table += "</tbody>\n" +
                                    "</table>";
                                $('#project_files_div').append(table);
                            }

                            if (response.dataProject['project_url']){
                                $('.container-list-url').empty();
                                response.dataProject['project_url'].forEach((value, index) => {
                                    if (value && typeof value.project_url !== 'undefined') {
                                        $('#project_url_div').removeClass('d-none').append('<a target="_blank" href="' + value.project_url + '">'+ value.project_url +'</a><br/>');
                                        $('.container-list-url').append('<span>' + '<a target="_blank" href="' + value.project_url + '">'+ value.project_url +'</a>');
                                        $('.container-list-url').append('<span/>');
                                        $('.container-list-url').append('<br/>');
                                        $('#project_url').val('');
                                    }
                                });

                            }

                            var form = $(".project-description-cornerv2[data-edit='edit']");
                            var resume = $(".project-description-cornerv2[data-edit='noedit']");
                            // resume.append('<div class="col-12 projectPublish">\n' +
                            //     '<p class="text-tech-color paytone text-uppercase">Your project has been published</p>\n' +
                            //     '</div>');
                            // $('.container-btn-update-project').remove();
                            form.fadeOut(function () {
                                resume.fadeIn();
                            })
                        } else {
                            console.log('erreur');
                        }
                        return false;
                    }).fail(function () {
                        return false;
                    });
                }
            });
            $('#cancelPublishProjectBtn').on('click',function (e) {
                $('#modalConfirmPublishProject').modal('hide');
            });
        });
    }


    $(document).ready(function () {
        if ($('.container-participant-corner').length > 0){
            updateTeamProject();
            displayFormUpdateProject();
            deleteFileProject();
            deleteUrlProject();
            displayFilenam();
            publishProject()
        }
    });
});

}
/*
     FILE ARCHIVED ON 23:53:02 Apr 01, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:51:54 Sep 04, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 3.744
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 227.196
  LoadShardBlock: 1007.037 (3)
  PetaboxLoader3.datanode: 1034.107 (5)
  load_resource: 138.726 (2)
*/