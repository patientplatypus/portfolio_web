
console.log('sanity check');


$( document ).ready(function() {
    console.log( "ready!" );


    var userid = Date.now();
    localStorage.setItem("uniquecatid", userid);
    console.log("unique catid is ", localStorage.getItem('uniquecatid'));


    $(".portfolio-button h4").click(function(e){
        e.preventDefault();
        $("#portfolio").velocity("scroll", {duration: 1000, offset: -200, easing: 'ease-in-out'});

    });

    $(".travel-button h4").click(function(e){
        e.preventDefault();
        $(".traveltop").velocity("scroll", {duration: 1000, offset: -200, easing: 'ease-in-out'});

    });

    $(".about-button h4").click(function(e){
        e.preventDefault();
        $(".header").velocity("scroll", {duration: 1000, offset:0, easing: 'ease-in-out'});


    });

    var gMap = new GMaps({
      el: '#gMap',
      lat:21.914803,
      lng:-168.934260,
      zoom: 3,
      scrollwheel: false
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

        $submittedemail = $('#submittedemailinner');

        $submittedemail.velocity({height: "120px", opacity:"1"}, {duration: 1000, easing: 'ease-in-out'})

        return false;
    });




//http://thecatapi.com/api/images/get?format=xml&results_per_page=20
//MTgzNDc2







    $.ajax({
      url: "http://thecatapi.com/api/images/get?format=xml&size=small&results_per_page=1",
      method: "GET"
    }).done(function(response){
      console.log(response);

      // var xmlDoc = $.parseXML(response),
      // $xml = $(xmlDoc);
      var $layout = $(response).find('url');
      var $imgsrc = $layout.html();

      console.log($imgsrc);


      console.log($imgsrc.toString().slice(10,$imgsrc.length));
      $cleanedimg = "http://"+$imgsrc.toString().slice(10,$imgsrc.length);
      console.log('cleanedimg ', $cleanedimg);
      $('.initialcat').prepend("<img class='catpictures containedskillelement' src='"+$cleanedimg+"'>");



      // $('.initialcat').prepend("<img class='catpictures containedskillelement' src='"+$imgsrc+"'>");

    }).fail(function(){
      console.log("call to thecatapi failed");
    })




    $('.getcatimage').on("click", function(){
      var $catlist = $('select[name=catlist]').val();
      console.log($catlist);

      if($catlist!='category'){
        $.ajax({
          url: "http://thecatapi.com/api/images/get?format=xml&size=small&results_per_page=1&category="+$catlist,
          method: "GET"
        }).done(function(response){
          console.log(response);

          // var xmlDoc = $.parseXML(response),
          // $xml = $(xmlDoc);
          var $layout = $(response).find('url');
          var $imgsrc = $layout.html();

          console.log($imgsrc);
            //           var str = "Hello world!";
            // var res = str.slice(1, 5);

          console.log($imgsrc.toString().slice(10,$imgsrc.length));
          $cleanedimg = "http://"+$imgsrc.toString().slice(10,$imgsrc.length);
          console.log('cleanedimg ', $cleanedimg);
          $('.secondcat').html("<img class='catpictures containedskillelement' src='"+$cleanedimg+"'>");

        }).fail(function(){
          console.log("call to thecatapi failed");
        })
      }
    });


    // $.ajax({
    //   url: "http://localhost:3000/",
    //   method: "POST",
    //   data:{pirate: 32,
    //         ninja: 12}
    // }).done(function(response){
    //   console.log(response);
    // }).fail(function(){
    //   console.log("call to backend failed");
    // })


    var fightvoted = false;


    $('.piratebutton').on('click', function(){
      if (fightvoted===false){
        $.ajax({
          url: "http://localhost:3000/pirate",
          method: "PATCH",
          data:{add: 1}
        }).done(function(response){
          console.log(response);
          var ninjawins = response.updated_fight.ninja;
          var piratewins = response.updated_fight.pirate;
          var totalfights = ninjawins+piratewins;
          var ninjawinpercent = 100*ninjawins/totalfights;
          var piratewinpercent = 100*piratewins/totalfights;

          if(piratewins>=ninjawins){
            $('.fightresults').append('<h3>Pirate wins button was clicked '+Math.floor(piratewinpercent)+' percent of the time by visitors to my portfolio</h3>');
            $('.fightresults').append('<h4>You picked the winner. Good job!</h4>');
            $('.characterimage').html('<img src="'+'http://mythicjourneystravel.com/wp-content/themes/voyage/images/pirates/carribean_sm6.jpg'+'"  style="width:200px; height:auto;">');
          }else if (ninjawins>piratewins){
            $('.fightresults').append('<h3>Pirate wins button was clicked '+Math.floor(piratewinpercent)+' percent of the time by visitors to my portfolio</h3>');
            $('.fightresults').append('<h4>You picked the loser. You suck!</h4>');
            $('.characterimage').html('<img src="'+'../assets/bunnytouched.jpg'+'"  style="width:200px; height:auto;">');
          }
        }).fail(function(){
          console.log("call to piratepatch failed");
        })
        fightvoted = true;
      }
    });

//https://s-media-cache-ak0.pinimg.com/736x/38/c6/62/38c662a67818d96d7e009ab1a725614d.jpg

    $('.ninjabutton').on('click', function(){
      if (fightvoted===false){
        $.ajax({
          url: "http://localhost:3000/ninja",
          method: "PATCH",
          data:{add: 1}
        }).done(function(response){
          console.log(response);
          var ninjawins = response.updated_fight.ninja;
          var piratewins = response.updated_fight.pirate;
          var totalfights = ninjawins+piratewins;
          var ninjawinpercent = 100*ninjawins/totalfights;
          var piratewinpercent = 100*piratewins/totalfights;

          if(ninjawins>=piratewins){
            $('.fightresults').append('<h3>Ninja wins button was clicked '+Math.floor(ninjawinpercent)+' percent of the time by visitors to my portfolio</h3>');
            $('.fightresults').append('<h4>You picked the winner. Good job!</h4>');
            $('.characterimage').html('<img src="'+'http://muza-chan.net/gallery/dynamic/fbimg/200-sq-ninja-day-toei-uzumasa-eigamura-kyoto.jpg'+'"  style="width:200px; height:auto;">');
          }else if (piratewins>ninjawins){
            $('.fightresults').append('<h3>Ninja wins button was clicked '+Math.floor(ninjawinpercent)+' percent of the time by visitors to my portfolio</h3>');
            $('.fightresults').append('<h4>You picked the loser. You suck!</h4>');
            $('.characterimage').html('<img src="'+'../assets/bunnytouched.jpg'+'" style="width:200px; height:auto;">');
          }

        }).fail(function(){
          console.log("call to ninjapatch failed");
        })
        fightvoted = true;
      }
    });






      $.ajax({
        type: 'GET',
        url: 'https://ipapi.co/json/'
      }).done(function(response) {
        // api key for open weather 42dc18f7717b7983a4444adc664fe9c9

        console.log(response);
        var url='http://api.openweathermap.org/data/2.5/weather?lat='+response.latitude+'&lon='+response.longitude+'&appid=42dc18f7717b7983a4444adc664fe9c9';
        $.ajax({
          url: url
        }).done(function(response){
          console.log(response)
        }).fail(function(response){
          console.log('weather failed');
        });

        console.log(response);
        var url='https://api.sunrise-sunset.org/json?lat='+response.latitude+'&lng='+response.longitude+'&date=today&formatted=0'
        $.ajax({
          url:url
        }).done(function(response){
          console.log(response);
          console.log("sunrise parsed ", Date.parse(response.sunrise));
          console.log("sunset parsed ")
        }).fail(function(response){
          console.log('sunrise failed');
        })

      }).fail(function() {
        console.log('Please try again later');
      });

      console.log('the time is ', Date.now());
      var now = new Date(),
      then = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          0,0,0),
      diff = now.getTime() - then.getTime();
      console.log(diff);


    $(".skill1button").click(function(e){
        e.preventDefault();
        e.stopPropagation();
        var $skillbox = $('.boxforskills');

        var $skilldiv1 = $('.skilldiv1');
        var $skilldiv2 = $('.skilldiv2');
        var $skilldiv3= $('.skilldiv3');
        var $skilldiv4 = $('.skilldiv4');

        var $skilldiv4container = $('.skilldiv4container');
        $skilldiv4container.css("height", "0px");

        var $skilldiv3container = $('.skilldiv3container');
        $skilldiv3container.css("height", "0px");

        var $skilldiv2container = $('.skilldiv2container');
        $skilldiv2container.css("height", "0px");

        var $skilldiv1container = $('.skilldiv1container');
        $skilldiv1container.css("height", "0px");

        $skilldiv1.css("z-index", "20");
        $skilldiv2.css("z-index", "10");
        $skilldiv3.css("z-index", "10");
        $skilldiv4.css("z-index", "10");

        var mySequence = [
          {e:$skillbox, p:'scroll', o:{duration: 500, offset: -200, easing: 'ease-in-out'}},
          {e:$skilldiv2, p:{height:"0px"}, o:{duration:500}},
          {e:$skilldiv3, p:{height:"0px"}, o:{duration:500, sequenceQueue: false}},
          {e:$skilldiv4, p:{height:"0px"}, o:{duration:500, sequenceQueue: false}},
          {e:$skilldiv1, p:{paddingLeft: "5%", width: "100%", height: "300px", top:"0px", opacity: 1}},
          {e:$skilldiv1container, p:{height: "300px"}, o:{duration:0}}
        ];

        $.Velocity.RunSequence(mySequence);

    });

    $(".skill2button").click(function(e){
      e.preventDefault();
      e.stopPropagation();
      var $skillbox = $('.boxforskills');

      var $skilldiv1 = $('.skilldiv1');
      var $skilldiv2 = $('.skilldiv2');
      var $skilldiv3= $('.skilldiv3');
      var $skilldiv4 = $('.skilldiv4');

      var $skilldiv4container = $('.skilldiv4container');
      $skilldiv4container.css("height", "0px");

      var $skilldiv3container = $('.skilldiv3container');
      $skilldiv3container.css("height", "0px");

      var $skilldiv2container = $('.skilldiv2container');
      $skilldiv2container.css("height", "0px");

      var $skilldiv1container = $('.skilldiv1container');
      $skilldiv1container.css("height", "0px");


      $skilldiv1.css("z-index", "10");
      $skilldiv2.css("z-index", "20");
      $skilldiv3.css("z-index", "10");
      $skilldiv4.css("z-index", "10");

      var mySequence = [
        {e:$skillbox, p:'scroll', o:{duration: 500, offset: -200, easing: 'ease-in-out'}},
        {e:$skilldiv1, p:{height:"0px"}, o:{duration:500}},
        {e:$skilldiv3, p:{height:"0px"}, o:{duration:500, sequenceQueue: false}},
        {e:$skilldiv4, p:{height:"0px"}, o:{duration:500, sequenceQueue: false}},
        {e:$skilldiv2, p:{paddingLeft: "5%", width: "100%", height: "300px", top:"0px", opacity: 1}},
        {e:$skilldiv2container, p:{height: "300px"}, o:{duration:0}}
      ];

      $.Velocity.RunSequence(mySequence);


    });

    $(".skill3button").click(function(e){
      e.preventDefault();
      e.stopPropagation();
      var $skillbox = $('.boxforskills');

      var $skilldiv1 = $('.skilldiv1');
      var $skilldiv2 = $('.skilldiv2');
      var $skilldiv3= $('.skilldiv3');
      var $skilldiv4 = $('.skilldiv4');

      var $skilldiv4container = $('.skilldiv4container');
      $skilldiv4container.css("height", "0px");

      var $skilldiv3container = $('.skilldiv3container');
      $skilldiv3container.css("height", "0px");

      var $skilldiv2container = $('.skilldiv2container');
      $skilldiv2container.css("height", "0px");

      var $skilldiv1container = $('.skilldiv1container');
      $skilldiv1container.css("height", "0px");


      $skilldiv1.css("z-index", "10");
      $skilldiv2.css("z-index", "10");
      $skilldiv3.css("z-index", "20");
      $skilldiv4.css("z-index", "10");

      var mySequence = [
        {e:$skillbox, p:'scroll', o:{duration: 500, offset: -200, easing: 'ease-in-out'}},
        {e:$skilldiv1, p:{height:"0px"}, o:{duration:500}},
        {e:$skilldiv2, p:{height:"0px"}, o:{duration:500, sequenceQueue: false}},
        {e:$skilldiv4, p:{height:"0px"}, o:{duration:500, sequenceQueue: false}},
        {e:$skilldiv3, p:{paddingLeft: "0%", width: "100%", height: "300px", top:"0px", opacity: 1}},
        {e:$skilldiv3container, p:{height: "300px"}, o:{duration:0}}
      ];

      $.Velocity.RunSequence(mySequence);

    });

    $(".skill4button").click(function(e){
      e.preventDefault();
      e.stopPropagation();
      var $skillbox = $('.boxforskills');

      var $skilldiv1 = $('.skilldiv1');
      var $skilldiv2 = $('.skilldiv2');
      var $skilldiv3= $('.skilldiv3');
      var $skilldiv4 = $('.skilldiv4');

      var $skilldiv4container = $('.skilldiv4container');
      $skilldiv4container.css("height", "0px");

      var $skilldiv3container = $('.skilldiv3container');
      $skilldiv3container.css("height", "0px");

      var $skilldiv2container = $('.skilldiv2container');
      $skilldiv2container.css("height", "0px");

      var $skilldiv1container = $('.skilldiv1container');
      $skilldiv1container.css("height", "0px");


      $skilldiv1.css("z-index", "10");
      $skilldiv2.css("z-index", "10");
      $skilldiv3.css("z-index", "10");
      $skilldiv4.css("z-index", "20");

      var mySequence = [
        {e:$skillbox, p:'scroll', o:{duration: 500, offset: -200, easing: 'ease-in-out'}},
        {e:$skilldiv1, p:{height:"0px"}, o:{duration:500}},
        {e:$skilldiv2, p:{height:"0px"}, o:{duration:500, sequenceQueue: false}},
        {e:$skilldiv3, p:{height:"0px"}, o:{duration:500, sequenceQueue: false}},
        {e:$skilldiv4, p:{paddingLeft: "5%", width: "100%", height: "300px", top:"0px", opacity: 1}},
        {e:$skilldiv4container, p:{height: "300px"}, o:{duration:0}}
      ];

      $.Velocity.RunSequence(mySequence);

    });



    var portfolioitem1clicked = false;
    var portfolioimage1size = "0px";

    $(".portfolioitem1").on("click",function(){
      $portfolioitem1image = $(".portfolioitem1image");
      $portfolioitem1info = $(".portfolioitem1info");
      $portfolioitem1infosub = $(".portfolioitem1infosub");
      $portfolioitem1infosubtext = $('.portfolioitem1infosubtext');
      $portfolioitem1infosubtextptag = $('.portfolioitem1infosubtextptag');

      console.log(portfolioimage1size);

      if (portfolioitem1clicked===false){

        portfolioimage1size = $portfolioitem1image.css("height").toString();
        $portfolioitem1infosubtext.css("marginLeft", "30%");
        $portfolioitem1infosubtext.css("marginTop", "3%");
        $portfolioitem1infosubtext.css("opacity", "0%");
        $portfolioitem1infosubtextptag.css("opacity", "0%");
        $portfolioitem1infosubtextptag.css("fontSize", "30px");




        var mySequence = [
          {e:$portfolioitem1infosubtextptag, p:{opacity: 0}, o:{duration: 0}},
          {e:$portfolioitem1image, p:{height:"500px"}, o:{duration: 800}},
          {e:$portfolioitem1image, p:{opacity: 0}, o:{duration: 500, sequenceQueue: false}},
          {e:$portfolioitem1image, p:{height: "0px"}, o:{duration: 800, sequenceQueue: false}},
          {e:$portfolioitem1info, p:{opacity: 1}, o:{duration: 800, sequenceQueue: false}},
          {e:$portfolioitem1info, p:{height: "500px"}, o:{duration: 800, sequenceQueue: false}},
          {e:$portfolioitem1infosub, p:{marginBottom: "2%", marginLeft: "10%", marginTop: "2.57%"}, o:{duration: 0}},
          {e:$portfolioitem1infosub, p:{opacity: 1, height: "100px", width: "100px"}, o:{duration: 800}},
          {e:$portfolioitem1infosubtext, p:{opacity: 1, height: "400px", width: "600px"}, o:{duration: 800}},
          {e:$portfolioitem1infosubtextptag, p:{opacity: 1}, o:{duration: 800}}
        ];

        $.Velocity.RunSequence(mySequence);

        portfolioitem1clicked=true;

      } else if (portfolioitem1clicked===true){

        $portfolioitem1infosub.css("opacity", "0");
        $portfolioitem1infosub.css("height", "0px");
        $portfolioitem1infosub.css("width", "0px");
        $portfolioitem1infosub.css("marginBottom", "0%");
        $portfolioitem1infosub.css("marginTop", "0%");
        $portfolioitem1infosubtext.css("opacity", "0%");
        $portfolioitem1infosubtext.css("height", "0px");
        $portfolioitem1infosubtext.css("width", "0px");
        $portfolioitem1infosubtextptag.css("opacity", "0%");
        $portfolioitem1infosubtextptag.css("fontSize", "0px");


        var mySequence = [
          {e:$portfolioitem1info, p:{opacity: 0}, o:{duration: 500, sequenceQueue: false}},
          {e:$portfolioitem1info, p:{height: "0px"}, o:{duration: 800, sequenceQueue: false}},
          {e:$portfolioitem1image, p:{height: portfolioimage1size}, o:{duration: 800, sequenceQueue: false}},
          {e:$portfolioitem1image, p:{opacity: 1}, o:{duration: 800, sequenceQueue: false}}
        ];

        $.Velocity.RunSequence(mySequence);

        portfolioitem1clicked=false;

      }


    })




    var portfolioitem2clicked = false;
    var portfolioimage2size = "0px";

    $(".portfolioitem2").on("click",function(){
      $portfolioitem2image = $(".portfolioitem2image");
      $portfolioitem2info = $(".portfolioitem2info");
      $portfolioitem2infosub = $(".portfolioitem2infosub");
      $portfolioitem2infosubtext = $('.portfolioitem2infosubtext');
      $portfolioitem2infosubtextptag = $('.portfolioitem2infosubtextptag');


      if (portfolioitem2clicked===false){

        portfolioimage2size = $portfolioitem2image.css("height").toString();
        $portfolioitem2infosubtext.css("marginLeft", "30%");
        $portfolioitem2infosubtext.css("marginTop", "3%");
        $portfolioitem2infosubtext.css("opacity", "0%");
        $portfolioitem2infosubtextptag.css("opacity", "0%");
        $portfolioitem2infosubtextptag.css("fontSize", "30px");




        var mySequence = [
          {e:$portfolioitem2infosubtextptag, p:{opacity: 0}, o:{duration: 0}},
          {e:$portfolioitem2image, p:{height:"500px"}, o:{duration: 800}},
          {e:$portfolioitem2image, p:{opacity: 0}, o:{duration: 500, sequenceQueue: false}},
          {e:$portfolioitem2image, p:{height: "0px"}, o:{duration: 800, sequenceQueue: false}},
          {e:$portfolioitem2info, p:{opacity: 1}, o:{duration: 800, sequenceQueue: false}},
          {e:$portfolioitem2info, p:{height: "500px"}, o:{duration: 800, sequenceQueue: false}},
          {e:$portfolioitem2infosub, p:{marginBottom: "2%", marginLeft: "10%", marginTop: "2.57%"}, o:{duration: 0}},
          {e:$portfolioitem2infosub, p:{opacity: 1, height: "100px", width: "100px"}, o:{duration: 800}},
          {e:$portfolioitem2infosubtext, p:{opacity: 1, height: "400px", width: "600px"}, o:{duration: 800}},
          {e:$portfolioitem2infosubtextptag, p:{opacity: 1}, o:{duration: 800}}
        ];

        $.Velocity.RunSequence(mySequence);

        portfolioitem2clicked=true;

      } else if (portfolioitem2clicked===true){

        $portfolioitem2infosub.css("opacity", "0");
        $portfolioitem2infosub.css("height", "0px");
        $portfolioitem2infosub.css("width", "0px");
        $portfolioitem2infosub.css("marginBottom", "0%");
        $portfolioitem2infosub.css("marginTop", "0%");
        $portfolioitem2infosubtext.css("opacity", "0%");
        $portfolioitem2infosubtext.css("height", "0px");
        $portfolioitem2infosubtext.css("width", "0px");
        $portfolioitem2infosubtextptag.css("opacity", "0%");
        $portfolioitem2infosubtextptag.css("fontSize", "0px");


        var mySequence = [
          {e:$portfolioitem2info, p:{opacity: 0}, o:{duration: 500, sequenceQueue: false}},
          {e:$portfolioitem2info, p:{height: "0px"}, o:{duration: 800, sequenceQueue: false}},
          {e:$portfolioitem2image, p:{height: portfolioimage1size}, o:{duration: 800, sequenceQueue: false}},
          {e:$portfolioitem2image, p:{opacity: 1}, o:{duration: 800, sequenceQueue: false}}
        ];

        $.Velocity.RunSequence(mySequence);

        portfolioitem2clicked=false;

      }


    })
























    $(".headerbutton").on("click", function(){


      var $fadeIn1 = $('.fadeIn1');
      var $fadeIn2 = $('.fadeIn2');
      var $fadeIn3 = $('.fadeIn3');

      var $fadeIn1text = $('.fadeIn1text');
      var $fadeIn2text = $('.fadeIn2text');
      var $fadeIn3text = $('.fadeIn3text');
      var $profileimage = $('.profileimage');

      $fadeIn1.css("height", "0px");
      $fadeIn1.css("width", "0px");
      $fadeIn1.css("top", "500px");
      // $fadein.css('top', '25%');

      $fadeIn2.css("height", "100px");
      $fadeIn2.css("width", "100px");
      $fadeIn2.css("top", "535px");
      // $fadein2.css("top", "30%")

      $fadeIn2.css("left", "3%");
      $fadeIn2.css("background-color", "orange")

      $fadeIn3.css("height", "100px");
      $fadeIn3.css("width", "100px");
      $fadeIn3.css("top", "535px");
      // $fadeIn3.css("top", "30%");

      $fadeIn3.css("left", "30%");
      $fadeIn3.css("background-color", "red");

      $fadeIn2text.css("opacity", "0");
      $fadeIn3text.css('opacity', '0');
      $profileimage.css("margin", "0 auto");

      var mySequence = [
        {e:$fadeIn1, p:{translateX:["3%","100%"], opacity:[0.8,0], width: "94%", height: "320px"}, o:{duration: 1500}},
        {e:$fadeIn2, p:{translateX:["3%","100%"], opacity:[0.9,0], width: "20%", height: "250px"}, o:{duration: 1500, sequenceQueue: false}},
        {e:$fadeIn3, p:{translateY:["0%","100%"], opacity:[1,0], width: "66%", height: "250px"}, o:{duration: 1500, sequenceQueue: false}},
        {e:$profileimage, p:{"margin": "0 auto"}, o:{duration:0}},
        {e:$fadeIn2text, p:{opacity:[1,0]}, o:{duration: 1500}},
        {e:$fadeIn3text, p:{opacity:[1,0]}, o:{duration: 2000, sequenceQueue: false}}
      ];

      $.Velocity.RunSequence(mySequence);

    })




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




  //  var $fadeIn1 = $('.fadeIn1');

  // var mySequence = [
  //     { e: $element1, p: { translateX: 100 }, o: { duration: 1000 } },
  //     { e: $element2, p: { translateX: 200 }, o: { duration: 1000 } },
  //     { e: $element3, p: { translateX: 300 }, o: { duration: 1000 } }
  // ];
  // $.Velocity.RunSequence(mySequence);




});
