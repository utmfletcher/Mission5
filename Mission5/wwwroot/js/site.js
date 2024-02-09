// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    // Function to handle form submission
    $('form').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values entered by the user
        var hours = parseFloat($('#hours').val());
        var rate = parseFloat($('#rate').val());

        // Validate that the entered hours is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        // Calculate the total
        var total = hours * rate;

        // Display the total in the output box
        $('#totalOutput').text("Total: $" + total.toFixed(2));
    });
});

