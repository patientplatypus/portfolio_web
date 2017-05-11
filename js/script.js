



console.log('sanity check');


$( document ).ready(function() {
    console.log( "ready!" );

    $(".portfolio-button h4").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#portfolio").offset().top
        }, 2000);
    });

    $(".contact-button h4").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
    });

    $(".about-button h4").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });

    var gMap = new GMaps({
      el: '#gMap',
      lat:21.914803,
      lng:-168.934260,
      zoom: 3,
      scrollwheel: false
    });


    gMap.addMarker({
      lat: -31.384612,
      lng: 119.467693,
      title: 'Sunset Over Grain, OZ',
      infoWindow: {
        content:
        '<div id="map-marker">'+
            '<a href="#" data-featherlight="#mylightbox"><img src="http://68.media.tumblr.com/10f44f56e93fb3324d469f22be6689fb/tumblr_ng4vux9AGa1rw1i3co1_250.jpg"></a>'+
                '<div id="mylightbox"><img src="http://68.media.tumblr.com/10f44f56e93fb3324d469f22be6689fb/tumblr_ng4vux9AGa1rw1i3co1_1280.jpg"></div>'+
                '<p>Sunset Over Grain, OZ</p>'+
        '</div>'
      }
    });

    path = [[30.259434,-97.756186],[-13.421951,-71.850929],[-41.760183,145.965637],[-31.384612,119.467693], [27.688481,86.731384],[29.549442, 103.354908], [25.170819, 121.553076], [29.965046,-90.057496]];
    gMap.drawPolyline({
      path: path,
      strokeColor: '#131540',
      strokeOpacity: 0.6,
      strokeWeight: 6
    });

    gMap.addMarker({
      lat: 29.965046,
      lng: -90.057496,
      title: 'Rainy Day, New Orleans',
      infoWindow: {
        content:
        '<div id="map-marker">'+
              '<a href="#" data-featherlight="#mylightbox"><img src="http://68.media.tumblr.com/3c7aac7fe07261e44484c8746e508ccf/tumblr_mp7pp5LjrV1rw1i3co2_250.jpg"></a>'+
                '<div id="mylightbox"><img src="http://68.media.tumblr.com/3c7aac7fe07261e44484c8746e508ccf/tumblr_mp7pp5LjrV1rw1i3co2_1280.jpg"></div>'+
                '<p>Rainy Day, New Orleans</p>'+
        '</div>'
      }
    });


    gMap.addMarker({
      lat: -41.760183,
      lng: 145.965637,
      title: 'Path to Cradle Mountain, Tasmania',
      infoWindow: {
        content:
        '<div id="map-marker">'+
              '<a href="#" data-featherlight="#mylightbox"><img src="http://68.media.tumblr.com/62bfe982809f22ea42bbadef3e4b6f0a/tumblr_njzno9fbyE1rw1i3co1_250.jpg"></a>'+
                '<div id="mylightbox"><img src="http://68.media.tumblr.com/62bfe982809f22ea42bbadef3e4b6f0a/tumblr_njzno9fbyE1rw1i3co1_1280.jpg"></div>'+
                '<p>Path to Cradle Mountain, Tasmania</p>'+
        '</div>'
      }
    });

    // <a href="#" data-featherlight="#mylightbox">Open element in lightbox</a>
    // <div id="mylightbox">This div will be opened in a lightbox</div>

//     <a href="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox">
//     <img src="https://unsplash.it/600.jpg?image=251" class="img-fluid">
// </a>

    gMap.addMarker({
      lat: 29.549442,
      lng: 103.354908,
      title: 'Emeishan Mountain, southern China',
      infoWindow: {
        content:
        '<div id="map-marker">'+
              '<a href="#" data-featherlight="#mylightbox"><img src="http://68.media.tumblr.com/2dda034f85eb5cc4d4d3e4af9d1a0733/tumblr_n3v61lg50Z1rw1i3co1_250.jpg"></a>'+
                '<div id="mylightbox"><img src="http://68.media.tumblr.com/2dda034f85eb5cc4d4d3e4af9d1a0733/tumblr_n3v61lg50Z1rw1i3co1_1280.jpg"></div>'+
                '<p>Emeishan Mountain, southern China</p>'+
        '</div>'
      }
    });




  gMap.addMarker({
    lat: 30.259434,
    lng: -97.756186,
    title: 'Weird Austin',
    infoWindow: {
      content:
      '<div id="map-marker">'+
            '<a href="#" data-featherlight="#mylightbox"><img src="http://68.media.tumblr.com/f0935d1d5e2a1d5f145d8fd66ef47759/tumblr_mp7q9i1TZV1rw1i3co1_250.jpg"></a>'+
              '<div id="mylightbox"><img src="http://68.media.tumblr.com/f0935d1d5e2a1d5f145d8fd66ef47759/tumblr_mp7q9i1TZV1rw1i3co1_1280.jpg"></div>'+
              '<p>Weird Austin</p>'+
      '</div>'
    }
  });

  gMap.addMarker({
    lat: -13.421951,
    lng: -71.850929,
    title: 'Ruins Near Písac Peru',
    infoWindow: {
      content:
      '<div id="map-marker">'+
            '<a href="#" data-featherlight="#mylightbox"><img src="http://68.media.tumblr.com/2e183a5ad9c651c1b8a83d569b9978c9/tumblr_o87wj9YwfJ1rw1i3co1_250.jpg"></a>'+
              '<div id="mylightbox"><img src="http://68.media.tumblr.com/2e183a5ad9c651c1b8a83d569b9978c9/tumblr_o87wj9YwfJ1rw1i3co1_1280.jpg"></div>'+
              '<p>Ruins Near Písac Peru</p>'+
      '</div>'
    }
  });



    gMap.addMarker({
      lat: 25.170819,
      lng: 121.553076,
      title: 'Qixing Mountain, Near Taipei',
      infoWindow: {
        content:
        '<div id="map-marker">'+
              '<a href="#" data-featherlight="#mylightbox"><img src="http://68.media.tumblr.com/4e4ea346054e7df566531870482e7530/tumblr_n3v6bmz7h61rw1i3co1_250.jpg"></a>'+
                '<div id="mylightbox"><img src="http://68.media.tumblr.com/4e4ea346054e7df566531870482e7530/tumblr_n3v6bmz7h61rw1i3co1_1280.jpg"></div>'+
                '<p>Qixing Mountain, near Taipei</p>'+
        '</div>'
      }
    });

    gMap.addMarker({
      lat: 27.688481,
      lng: 86.731384,
      title: 'Lukla Airport, Nepal',
      infoWindow: {
        content:
        '<div id="map-marker">'+
            '<a href="#" data-featherlight="#mylightbox"><img src="http://68.media.tumblr.com/1f714ef91dd243a6dc728f698e231712/tumblr_n3v8x3ZqGG1rw1i3co1_250.jpg"></a>'+
                '<div id="mylightbox"><img src="http://68.media.tumblr.com/1f714ef91dd243a6dc728f698e231712/tumblr_n3v8x3ZqGG1rw1i3co1_1280.jpg"></div>'+
                '<p>Lukla Airport, Nepal</p>'+
        '</div>'
      }
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });

    var message = "";
    $(".onsubmit").on("click", function() {
        message1="So there's this guy " + $('form [name="form-name-input"]').val() + " says to me from " + $('form [name="form-email-input"]').val()+
                      " he says " + $('form [name="form-subject-input"]').val();
        $.ajax({
            url: "//formspree.io/pweyand@gmail.com",
            method: "POST",
            data: {message: message1},
            dataType: "json"
        });
        alert('Thanks for the email, we\'ll be in touch promptly.');
        return false;
    });


  //  var $fadeIn1 = $('.fadeIn1');

  // var mySequence = [
  //     { e: $element1, p: { translateX: 100 }, o: { duration: 1000 } },
  //     { e: $element2, p: { translateX: 200 }, o: { duration: 1000 } },
  //     { e: $element3, p: { translateX: 300 }, o: { duration: 1000 } }
  // ];
  // $.Velocity.RunSequence(mySequence);

    $(".headerbutton").on("click", function(){
      // $(".fadeIn1").animate({
      //       left: '50%',
      //       opacity: '0.5',
      //       height: '150px',
      //       width: '150px'
      //   },1200);

      //  easing: "ease-in-out"
        //
        // $.Velocity
        //     .RegisterEffect("trans.slideUpIn", {
        //         defaultDuration: 400,
        //         calls: [[ { opacity: [1,0], translateY: [0,90] } ]]
        //     })
        //     .RegisterEffect("trans.slideDownOut", {
        //         defaultDuration: 400,
        //         calls: [[ { opacity: 0, translateY: 60 } ]],
        //         reset: { translateY: 0 }
        //     });
        //     .RegisterEffect("trans.slideLeftIn", {
        //         defaultDuration: 1000,
        //         calls: [[ { opacity: [1,0], translateX: 50, width: 200 } ]]
        //     });

        //
        // {
        //   e: $("#about"),
        //   p: {
        //     translateX: [0, "-10px"],
        //     opacity: [1, 0]
        //   },
        //   o: {
        //     duration: 300
        //   }
        // }
        // fadin1text

        var $fadeIn1 = $('.fadeIn1');
        var $fadeIn2 = $('.fadeIn2');
        var $fadeIn3 = $('.fadeIn3');

        var $fadeIn1text = $('.fadeIn1text');
        var $fadeIn2text = $('.fadeIn2text');
        var $fadeIn3text = $('.fadeIn3text');

      // {e:$fadeIn1, p:{left: "50px", width: "200px"}, o:{duration: 1000, easing: "ease-in-out"}},
      // {e:$fadeIn1, p:'transition.fadeIn', o:{duration: 400, easing: 'ease-in-out', sequenceQueue: false}}
      // { elements: $fadeIn1, properties: animLeftIn, options: { display: false, easing: 'easeInCirc' } }
      //
      //
      // height: 100px;
      // width: 100px;
      // top: 400px;
      // left: 500px;

      $fadeIn1.css("height", "0px");
      $fadeIn1.css("width", "0px");
      // $fadeIn1.css("top", "360px");
      // $fadeIn1.css("left", "100px");
      $fadeIn1.css("top", "450px");
      // $fadeIn1.css("padding-left", "50px");


      $fadeIn2.css("height", "100px");
      $fadeIn2.css("width", "100px");
      $fadeIn2.css("top", "480px");
      $fadeIn2.css("left", "3%");
      $fadeIn2.css("background-color", "orange")

      $fadeIn3.css("height", "100px");
      $fadeIn3.css("width", "100px");
      $fadeIn3.css("top", "480px");
      $fadeIn3.css("left", "30%");
      $fadeIn3.css("background-color", "red");

      $fadeIn2text.css("opacity", "0");

      // var animLeftIn = 'trans.slideLeftIn';

      var mySequence = [
        {e:$fadeIn1, p:{translateX:["3%","100%"], opacity:[0.8,0], width: "94%", height: "320px"}, o:{duration: 1500}},
        {e:$fadeIn2, p:{translateX:["3%","100%"], opacity:[0.9,0], width: "20%", height: "250px"}, o:{duration: 1500, sequenceQueue: false}},
        {e:$fadeIn3, p:{translateY:["0%","100%"], opacity:[1,0], width: "66%", height: "250px"}, o:{duration: 1500, sequenceQueue: false}},
        {e:$fadeIn2text, p:{opacity:[1,0]}, o:{duration: 1500}}
      ];

      $.Velocity.RunSequence(mySequence);

    })


});
