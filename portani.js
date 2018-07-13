$(document).ready(function() {

    TweenMax.fromTo($('#titleText2'),1,{y:"+=200",opacity:0},{y:0,opacity:1,display:"block"});
    TweenMax.to($("#titleText2"),1,{fontSize:"-=70",y:"-=250",delay:1});

    TweenMax.to($(".grid-container"),1,{display:"inline-grid",delay:1});
    TweenMax.staggerFrom($(".grid-item"), 5, {scale:0.5, opacity:0, delay:1.8, ease:Elastic.easeOut, display:"none", force3D:true}, 0.5);
}