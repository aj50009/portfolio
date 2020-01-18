let closedSourceProjectsButton = null;
let hideString = 'Hide closed source projects';
let showString = 'Show closed source projects';

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    let closedSourceProjects = $('#closedSourceProjects');
    if (closedSourceProjects.length > 0) {
        closedSourceProjectsButton = $('#closedSourceProjectsButton');
        closedSourceProjects.on('show.bs.collapse', closedSourceProjects_expand);
        closedSourceProjects.on('hide.bs.collapse', closedSourceProjects_collapse);
        let getParameters = window.location.search.substr(1).toLowerCase().split('&');
        if ((getParameters.length >= 2) && (getParameters[1] == 'expand')) {
            closedSourceProjects.addClass('show');
            closedSourceProjectsButton.attr('aria-expanded', 'true');
            closedSourceProjectsButton.html(hideString);
        }
        if (getParameters.length >= 1) {
            let elementId = getParameters[0] + 'Project';
            let focusedElement = document.getElementById(elementId);
            if (focusedElement != null)
                setTimeout(function() {
                    focusedElement.scrollIntoView();
                    if (elementId != 'miscProject')
                        $('#' + elementId).addClass('h3_target');
                    $('body').animate({ opacity: 1.0 }, 250);
                }, 250);
            else
                $('body').animate({ opacity: 1.0 }, 250);
        }
    } else
        $('body').animate({ opacity: 1.0 }, 250);
});

function closedSourceProjects_expand() {
    closedSourceProjectsButton.html(hideString);
}

function closedSourceProjects_collapse() {
    closedSourceProjectsButton.html(showString);
}
