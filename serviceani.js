
$(document).ready(function() {
    var check=true;
    function fadein(){
        TweenMax.staggerFrom($(".grid-item"),0.5,{y:"-=200",opacity:0,ease:Power3.easeIn},0.3);

    }
    TweenMax.to($(".icons"),0.1,{scale:0.5});
    TweenMax.to($(".phoneico"),0.1,{scale:0.5});
    TweenMax.to($(".cam1"),0.1,{scale:0.5});
    TweenMax.to($(".cam"),0.1,{scale:0.5});

    function shake(){
        TweenMax.fromTo($('#phonesvg'), 0.3, {x:-1}, {x:1, ease:RoughEase.ease.config({strength:8, points:20, template:Linear.easeNone, randomize:false}) , clearProps:"x"});
    }
    function mailin() {
        if (check) {
            TweenMax.to($('#flap'), 0.3, {y: "-40%", opacity: 0, ease: Quad.easeIn,});
            TweenMax.staggerTo($(".icons"), 0.3, {scale: 1, opacity: 1, ease: Quad.easeOut}, 0.1);
            TweenMax.to($("#t1"), 0.5, {ease: Quad.easeOut, opacity: 1});

        }
    }
    function mailout(){
        if(check) {
            TweenMax.to($('#flap'), 0.3, {y: "0%", opacity: 1, ease: Quad.easeIn,});
            TweenMax.staggerTo($(".icons"), 0.3, {opacity: 0, ease: Quad.easeIn}, 0.1);
            TweenMax.to($("#t1"), 0.5, {ease: Quad.easeOut, opacity: 0});
        }
    }
    function phonein(){
        if(check) {

            TweenMax.to($('#bg'),0.3,{fill:"#000",ease:Quad.easeIn,});
        TweenMax.staggerTo($(".phoneico"), 0.3, {delay:0.3,scale:1,opacity:1, ease:Quad.easeOut}, 0.2);
        TweenMax.to($("#t2"),0.5,{ease:Quad.easeOut,opacity:1});
    }}

    function phoneout(){
        if(check) {TweenMax.to($('#bg'),0.3,{fill:"#fff",ease:Quad.easeIn,});
        TweenMax.staggerTo($(".phoneico"), 0.3, {delay:0.5,scale:0.5,opacity:0, ease:Quad.easeOut}, 0.2);
        TweenMax.to($("#t2"),0.5,{ease:Quad.easeOut,opacity:0});
    }}
    function camin(){
        if(check) {
            TweenMax.to($(".cam1"), 1, {scale: 1, ease: Elastic.easeOut, opacity: 1});
            TweenMax.staggerTo($(".cam"), 1, {ease: Elastic.easeOut, scale: 1, delay: 0.2, opacity: 1}, 0.1);
            TweenMax.to($("#t3"), 0.5, {ease: Quad.easeOut, opacity: 1});
        }
    }
    function camout(){
        if(check) {
            TweenMax.to($(".cam1"), 1, {scale: 0.5, ease: Elastic.easeOut, opacity: 0});
            TweenMax.staggerTo($(".cam"), 1, {ease: Elastic.easeOut, scale: 0, delay: 0.2, opacity: 0}, 0.1);
            TweenMax.to($("#t3"), 0.5, {ease: Quad.easeOut, opacity: 0});
        }
    }
    function loadscreen(){
        $(".info").remove();
        $("#mailitem").css("background-color","transparent");
        $("#phoneitem").css("background-color","transparent");
        $("#mediaitem").css("background-color","transparent");


        $(".grid-container").css("grid-template-columns","auto auto auto");
        $("#phoneitem").css("display","block");
        $("#mailitem").css("display","block")
        $("#mediaitem").css("display","block");
        TweenMax.staggerTo($(".grid-item"),0.5,{y:"+=200",opacity:1,ease:Power3.easeIn},0.3);
    }
    function mailpage(){
        $("#phoneitem").css("display","none");
        $("#mediaitem").css("display","none");
        $(".grid-container").css("grid-template-columns","auto auto");
        $(".grid-container").append("<div class='info'><a id='close'></a><h1 style='text-align: center;'><hr style='margin-left:10%;margin-top:15%'></h1><h3>Unlimited Promotions\n</h3><h3>Reviewed by Native English Speakers</h3><h3>Text and Image Content</h3><h3>Top Rankings for Google & Facebook</h3><h3>Ads for Desktop & Mobile</h3><h3>Newsletter Support</h3><h1>30%/project</h1><hr style='margin-left:10%'></div>")
        $("#mailitem").css("background-color","#F3C8D7");
        $(".info").css("background-color","#F3C8D7");
        TweenMax.to($("#mailitem"),0.3,{opacity:1,y:"+=200"});
        TweenMax.to($(".info"),0.1,{x:"-=10"});
        TweenMax.to($(".info"),0.1,{y:"-=100"});
        TweenMax.to($(".info"),0.1,{y:"+=100",opacity:1,delay:0.2});
        TweenMax.staggerTo($(".info h3"),0.3,{delay:0.2,opacity:1,x:"+=10"},0.2);
        $("#close").click(function(){
            check=true;
            mailout();
            TweenMax.to($(".info"),0.3,{y:"-=100",opacity:0});
            TweenMax.to($("#mailitem"),0.3,{opacity:0,y:"-=200"});
            setTimeout(loadscreen,500);
        })

    }

    function phonepage(){
        $("#mailitem").css("display","none");
        $("#mediaitem").css("display","none");
        $(".grid-container").css("grid-template-columns","auto auto");
        $(".grid-container").append("<div class='info'><a id='close'></a><h1><hr style='margin-left:10%;margin-top:15%'></h1><h3>Sleek, Beautiful Design</h3><h3>For Desktop, Android, iOS</h3><h3>Customized Design for Each Client</h3><h3>Multiple Languages & Currencies</h3><h3>eCommerce Support</h3><h3>Open Code for Easy Editing</h3><h1>$1500/hour</h1><hr></div>")
        $("#phoneitem").css("background-color","#F3C8D7");
        $(".info").css("background-color","#F3C8D7");
        TweenMax.to($("#phoneitem"),0.3,{opacity:1,y:"+=200"});
        TweenMax.to($(".info"),0.1,{x:"-=10"});
        TweenMax.to($(".info"),0.1,{y:"-=100"});
        TweenMax.to($(".info"),0.1,{y:"+=100",opacity:1,delay:0.2});
        TweenMax.staggerTo($(".info h3"),0.3,{delay:0.2,opacity:1,x:"+=10"},0.2);
        $("#close").click(function(){
            check=true;
            phoneout();
            TweenMax.to($(".info"),0.3,{y:"-=100",opacity:0});
            TweenMax.to($("#phoneitem"),0.3,{opacity:0,y:"-=200"});
            setTimeout(loadscreen,500);
        })

    }

    function campage(){
        $("#mailitem").css("display","none");
        $("#phoneitem").css("display","none");
        $(".grid-container").css("grid-template-columns","auto auto");
        $(".grid-container").append("<div class='info'><a id='close'></a><h1><hr style='margin-left:10%;margin-top:15%'></h1><h3>Professional Video Equipment</h3><h3>Final Cut Editing</h3><h3>Choreography & Design</h3><h3>Youtube Marketing</h3><h3>Posters, Flyers, Logos\n</h3><h3>Free Consultations</h3><h1>$4000/hour</h1><hr></div>")
        $("#mediaitem").css("background-color","#F3C8D7");
        $(".info").css("background-color","#F3C8D7");
        TweenMax.to($("#mediaitem"),0.3,{opacity:1,y:"+=200"});
        TweenMax.to($(".info"),0.1,{x:"-=10"});
        TweenMax.to($(".info"),0.1,{y:"-=100"});
        TweenMax.to($(".info"),0.1,{y:"+=100",opacity:1,delay:0.2});
        TweenMax.staggerTo($(".info h3"),0.3,{delay:0.2,opacity:1,x:"+=10"},0.2);
        $("#close").click(function(){
            check=true;
            camout();
            TweenMax.to($(".info"),0.3,{y:"-=100",opacity:0});
            TweenMax.to($("#mediaitem"),0.3,{opacity:0,y:"-=200"});
            setTimeout(loadscreen,500);
        })

    }
    fadein();
    $(".mail").hover(mailin,mailout);
    $(".phone").hover(phonein,phoneout);
    $(".camdet").hover(camin,camout);

    $(".mail").click(function () {
        check=false;
        TweenMax.staggerTo($(".grid-item"),0.2,{y:"-=200",opacity:0},0.2);
        setTimeout(mailpage,1000);

    });

    $(".phone").click(function () {
        check=false;
        TweenMax.staggerTo($(".grid-item"),0.2,{y:"-=200",opacity:0},0.2);
        setTimeout(phonepage,1000);

    });
    $(".camdet").click(function () {
        check=false;
        TweenMax.staggerTo($(".grid-item"),0.2,{y:"-=200",opacity:0},0.2);
        setTimeout(campage,1000);

    });




});