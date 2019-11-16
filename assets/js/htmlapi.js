 // Make the AJAX request to the API - GETs the JSON data at the queryURL.
  // The data then gets passed as an argument to the updatePage function
  console.log('linked success');
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);

  