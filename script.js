$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
    let closedSourceProjects = $('#closedSourceProjects');
    if (closedSourceProjects.length > 0) {
        closedSourceProjects.on('show.bs.collapse', closedSourceProjects_expand);
        closedSourceProjects.on('hide.bs.collapse', closedSourceProjects_collapse);
    }
});

function closedSourceProjects_expand() {
    $('#closedSourceProjectsButton').html('Hide closed source projects');
}

function closedSourceProjects_collapse() {
    $('#closedSourceProjectsButton').html('Show closed source projects');
}
