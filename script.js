// load the header and footer html files into their divs on page load.
// I hate JS
$(document).ready(function () {
    $("#navbar").load("header.html")
    $("#footer").load("footer.html")
})