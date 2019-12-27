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
            let focusedElement = document.getElementById(getParameters[0] + 'Project');
            if (focusedElement != null)
                focusedElement.scrollIntoView();
        }
    }
});

function closedSourceProjects_expand() {
    closedSourceProjectsButton.html(hideString);
}

function closedSourceProjects_collapse() {
    closedSourceProjectsButton.html(showString);
}
