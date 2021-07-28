console.log('script');

$.ajax({
  url: 'https://gnews.io/api/v4/top-headlines?lang=en&token=b36f76df733293df4168bceb31de6237',
  type: 'GET',
  data: 'json',
  success: function(newsData){
    console.log(newsData);
    var i;
    for (i=0;i<newsData.articles.length;i++){
      var r = newsData.articles[i];
       document.getElementById('objects').innerHTML +=
       '<div class="col-6"> ' +
          '<div class="card mt-3 ml-5" style="width: 28rem;">' +
            '<div class="card-body">'+
            '<img src="' + r.image + '"class="card-img-top">' +
              '<h5 class="card-title">'+ r.title +'</h5>'+

             '<p class="card-text">' + r.content + '<br>' +
             r.source.name+ '</p>' +

           '</div>'+
          '</div>'+
       '</div>';
    } //for loop
  }, // success


})
