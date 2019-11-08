var text = '[' +
'{"name":"Maribis of Chicago","title":"Dispensary","photo":"Maribis.PNG","detail":"detail-page.html","direction":"https://www.google.com/maps/place/Maribis+Of+Chicago+Medical+Marijuana+Dispensary/@41.810286,-87.7132517,17z/data=!3m1!4b1!4m5!3m4!1s0x880e31f10b459ad3:0x76a1965af4b50dcb!8m2!3d41.810286!4d-87.711063","description":"Maribis of Chicago, a leading dipensary in the Brighton Park area. We work dilligently to provide the best care, products, and knowledge base for all medical patients in Illinois." },' +
'{"name":"Columbia Care Dispensary","title":"Dispensary","photo":"Columbia.PNG","detail":"A1.html", "direction":"https://www.google.com/maps/place/Columbia+Care+Illinois/@41.9668904,-87.7624421,17z/data=!3m1!4b1!4m5!3m4!1s0x880fcc17671444d3:0x5f4f76dc68f774c2!8m2!3d41.9668904!4d-87.7602534","description":"Columbia Care Chicago Columbia Care is a patient-centric medical marijuana dispensary striving to lead the industry through the highest level of care"},' +
'{"name":"Dispensary 33 - Chicago","title":"Dispensary","photo":"Dispensary-33.PNG","detail":"A2.html", "direction":"https://www.google.com/maps/place/Dispensary+33/@41.9726556,-87.6699653,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd2288112ce21:0x2ed5610dea0ab078!8m2!3d41.9726556!4d-87.6677766","description":"Dispensary 33 is a Chicago Medical Marijuana Dispensary Dispensary 33 serves their patients with a passion for helping people in Chicago"},' +
'{"name":"nuMed (Downtown Chicago) - Coming Soon","title":"Clinic","photo": "nuMed.PNG","detail":"A3.html", "direction":"https://www.google.com/maps/place/NuMed+Medical+Marijuana+Dispensary/@41.910823,-87.6630349,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd3022141bc69:0x554ad36d8c789522!8m2!3d41.910823!4d-87.6608462","description":"We carry a wide range of medical marijuana products like pre-packaged flower, prerolls, CBD and THC tinctures, edibles"}]';
//dynamically add JSON elements to the page
obj = JSON.parse(text);
console.log(obj)
var html = '';
$.each(obj, function (key, value) {
console.log("for each" + key,value)
    html += '<div class="strip_list wow fadeIn">';
    html += '<a href="#0" class="wish_bt"></a>';
    html +='<figure> <a href="' + value.detail + '"><img src="assets/img/'+ value.photo+'" alt=""></a></figure>';
    html += '<small>' + value.title + '</small>';
    html += '<h3>' + value.name + '</h3>';
    html += '<p>'+ value.description +'</p>';
    html +=	'<span class="rating"><i class="icon_star voted"></i><i class="icon_star voted"></i><iclass="icon_star voted"></i><i class="icon_star"></i><i class="icon_star"></i> <small>(145)</small></span>';
    html += '<ul><li><a href="#0" onclick="onHtmlClick("Doctors", 1)" class="btn_listing">View on Map</a></li><li><a href="' + value.direction + '"target="_blank">Directions</a></li><li><a href="' + value.detail +'">Order Now</a></li></ul>';
    html += '</div>';
});
$('#creator').html(html);
