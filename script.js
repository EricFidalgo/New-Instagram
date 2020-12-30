(function() {
    $('form > input').keyup(function() {

        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#registera').attr('disabled', 'disabled');
        } else {
            $('#registera').removeAttr('disabled');
        }
    });
})()