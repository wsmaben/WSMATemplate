<script>
// hide the iPart containing the IQA
    jQuery("#ste_container_ciTaggedListQuery").parent().hide();

// Read the IQA contents into a jQuery variable
	var r = jQuery("#ste_container_ciTaggedListQuery table tbody tr");
	
// define a new array variable
	var ar = [];

// set default field names (based on the position in the IQA)
	var vals = {
		0: "Name",
		1: "Alternatename",
		2: "TagName",
		3: "ParentTag",
		4: "Location",
		5: "Blob"
		6: "Img"
	}
	
// Loop through the rows, writing the results into a new object
// and then add the object to the array
	jQuery.each(r, function(key, value) {
		var l = jQuery(value).find("td");
		var i = l.length;
		var news = {};
		for (i = 0; i < l.length; i++) { 
			var a = jQuery(l[i]).html(); 
			var s = vals[i];
			news[s] = a;
		}
		ar.push(news);
	});

// result is an array of objects -- ar

// generate markup for output (one per news)
function rtnMarkup(news) {
  var markup = `<div class="${news.TagName}"><a href="/${news.Location}">${news.Alternatename}</a></div>`;
  return markup;
}

// generate markup for output (one per feed)
function rtnFeed(news) {
	var feed = `<div class="encoded row">
<div class="col-md-7 newsBody">${news.Blob}</div><div class="col-md-5" newsImg"><${news.Img}</div>
            <div class="col-md-12 readMore"><a href="/${news.Location}">Read More...</a></div>
         </div>`;
	return feed;
}

// Add a header
	jQuery("#BaseDirectory").append("<h1>News Links</h1><br>");

// loop through the newss (object = news) and output the markup
	for (i = 0; i < ar.length; i++) {
		var b = ar[i];
		var g = rtnMarkup(b);
		var h = rtnFeed(b);
		jQuery("#BaseDirectory").append(g);
		jQuery("#NewsDisplay").append(h);
	}
	
jQuery(".newsBody").each(function(index, element){
	//console.log(jQuery(this).text());
	var b = jQuery(this).text();
	var encoded = b.replace(/(\&amp\;)/g, '&');
	function htmlDecode(input){
		var e = document.createElement('div');
		e.innerHTML = input;
		// handle case of empty input
		return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
	}
	jQuery(this).html('');
	jQuery(this).append(htmlDecode(encoded));
});

</script>