$(document).ready(function() {
    $('#submitbutton').click(function() {
        $.getJSON("example.json", function(result) {
            console.log(result.Situation["data properties"]);
            var dataProps = result.Situation["data properties"];
            $.each(dataProps, function(i, field) {
                $('#results').append(field + "");
            });
        });
    });
});