(function() {
    function showAlert(alert) {
        const alertContainer = $('.alert-container');

        const alertElement = $(`<div class="alert alert-${alert.type} alert-dismissible" role="alert">` +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
            `<strong>${alert.title}</strong> ${alert.body}` +
            '</div>');

        alertContainer.append(alertElement);
        alertElement.alert();
    }

    $(document).ajaxComplete((event, xhr) => {
        if (xhr.getResponseHeader('x-alert-type')) {
            const alert = {
                type: xhr.getResponseHeader('x-alert-type'),
                title: xhr.getResponseHeader('x-alert-title'),
                body: xhr.getResponseHeader('x-alert-body')
            }

            showAlert(alert);
        }
    });
})();
