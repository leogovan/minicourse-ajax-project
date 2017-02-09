
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview



    // YOUR CODE GOES HERE!

    var streetStr = $("#street").val();
    var cityStr = $("#city").val();
    var address = streetStr + ", " + cityStr;

    var streetviewUrl = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + address + "";

    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    // Get NY Times articles on user-defined city
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q='" + cityStr + "'&api-key=40a958b0172c4d64bf260608e5bfbc85";
    $.getJSON(url, function (data) {
        console.log(data);
        $nytHeaderElem.text("New York Times Articles About " + cityStr);

        articles = data.resposne.docs;
        for (var i = 0; i < articles.length; i++) {
            var article = articles[i];
            $nytElem.append('<li class="article">' + '<a href="'+ article.web_url +'">' + article.headline.main + '</a>' + '<p>' + article.snippet + '</p>' + '</li>');
        };
    })

        


    return false;
};

$('#form-container').submit(loadData);
