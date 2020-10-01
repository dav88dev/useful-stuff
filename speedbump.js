//Insert Bootstrap modal into body and speedbump on jQuery

    $(document).ready(function(){
        document.body.innerHTML += '<div class="modal fade" tabindex="-1" role="dialog" id="speedbump"><div class="modal-dialog"><div class="modal-content"> <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 class="modal-title">Warning</h4></div><div class="modal-body"><p>You are leaving !</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button><button type="button" onclick="openLink()" class="btn btn-danger">OK</button></div></div></div></div>';
        // external link speedbump
        $.expr[":"].external = function (a) {
            // DO NOT INCLUDE THE FOLLOWING MATCHES: EMAIL LINKS, TELEPHONE LINKS, HOSTNAME
            return !a.href.match(/^mailto\:/) && !a.href.match(/^tel\:/) && a.hostname != location.hostname && !a.href.match(/^#\:/) && a.href !== undefined && a.href !== '' && a.href !== null
        };
                
        $('a:external').click(function(e){
            e.preventDefault();
            href = $(this).attr('href');
            $('#speedbump').modal('show')
        });

        openLink = function () {
            $('#speedbump').modal('hide')
            window.open(href);
        }
    });
