/* Slider 1*/
var	tpj = jQuery;
if(window.RS_MODULES === undefined) window.RS_MODULES = {};
if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider11"] = {once: RS_MODULES.modules["revslider11"]!==undefined ? RS_MODULES.modules["revslider11"].once : undefined, init:function() {
    window.revapi1 = window.revapi1===undefined || window.revapi1===null || window.revapi1.length===0  ? document.getElementById("rev_slider_1_1") : window.revapi1;
    if(window.revapi1 === null || window.revapi1 === undefined || window.revapi1.length==0) { window.revapi1initTry = window.revapi1initTry ===undefined ? 0 : window.revapi1initTry+1; if (window.revapi1initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider11"].init()}); return;}
    window.revapi1 = jQuery(window.revapi1);
    if(window.revapi1.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_1"); return;}
    revapi1.revolutionInit({
            revapi:"revapi1",
            DPR:"dpr",
            sliderLayout:"fullwidth",
            visibilityLevels:"1240,1024,778,480",
            gridwidth:"1230,1024,778,480",
            gridheight:"875,700,520,380",
            lazyType:"smart",
            perspective:600,
            perspectiveType:"global",
            editorheight:"875,700,520,380",
            responsiveLevels:"1240,1024,778,480",
            progressBar:{disableProgressBar:true},
            navigation: {
                wheelCallDelay:1000,
                onHoverStop:false,
                bullets: {
                    enable:true,
                    tmp:"",
                    style:"hermes",
                    hide_onmobile:true,
                    hide_under:"991px",
                    h_align:"left",
                    h_offset:30,
                    v_offset:-2,
                    space:15,
                    container:"layergrid"
                }
            },
            viewPort: {
                global:true,
                globalDist:"-200px",
                enable:false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid:true
            },
    });
    
}} // End of RevInitScript
if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
	
/* Slider 2*/
var	tpj = jQuery;
if(window.RS_MODULES === undefined) window.RS_MODULES = {};
if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider12"] = {once: RS_MODULES.modules["revslider12"]!==undefined ? RS_MODULES.modules["revslider12"].once : undefined, init:function() {
    window.revapi2 = window.revapi2===undefined || window.revapi2===null || window.revapi2.length===0  ? document.getElementById("rev_slider_1_2") : window.revapi2;
    if(window.revapi2 === null || window.revapi2 === undefined || window.revapi2.length==0) { window.revapi2initTry = window.revapi2initTry ===undefined ? 0 : window.revapi2initTry+1; if (window.revapi2initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider12"].init()}); return;}
    window.revapi2 = jQuery(window.revapi2);
    if(window.revapi2.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_2"); return;}
    revapi2.revolutionInit({
            revapi:"revapi2",
            DPR:"dpr",
            sliderLayout:"fullwidth",
            visibilityLevels:"1240,1024,778,480",
            gridwidth:"1230,1024,778,480",
            gridheight:"1030,768,550,450",
            lazyType:"smart",
            perspective:600,
            perspectiveType:"global",
            editorheight:"1030,768,550,450",
            responsiveLevels:"1240,1024,778,480",
            progressBar:{disableProgressBar:true},
            navigation: {
                wheelCallDelay:1000,
                onHoverStop:false,
                arrows: {
                    enable:true,
                    style:"metis",
                    hide_onmobile:true,
                    hide_under:"1024px",
                    left: {
                        h_offset:0
                    },
                    right: {
                        h_offset:0
                    }
                }
            },
            viewPort: {
                global:true,
                globalDist:"-200px",
                enable:false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid:true
            },
    });
    
}} // End of RevInitScript
if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};

/* Slider 3*/
var	tpj = jQuery;
if(window.RS_MODULES === undefined) window.RS_MODULES = {};
if(RS_MODULES.modules === undefined) RS_MODULES.modules = {};
RS_MODULES.modules["revslider13"] = {once: RS_MODULES.modules["revslider13"]!==undefined ? RS_MODULES.modules["revslider13"].once : undefined, init:function() {
    window.revapi3 = window.revapi3===undefined || window.revapi3===null || window.revapi3.length===0  ? document.getElementById("rev_slider_1_3") : window.revapi3;
    if(window.revapi3 === null || window.revapi3 === undefined || window.revapi3.length==0) { window.revapi3initTry = window.revapi3initTry ===undefined ? 0 : window.revapi3initTry+1; if (window.revapi3initTry<20) requestAnimationFrame(function() {RS_MODULES.modules["revslider13"].init()}); return;}
    window.revapi3 = jQuery(window.revapi3);
    if(window.revapi3.revolution==undefined){ revslider_showDoubleJqueryError("rev_slider_1_3"); return;}
    revapi3.revolutionInit({
            revapi:"revapi3",
            DPR:"dpr",
            sliderLayout:"fullwidth",
            visibilityLevels:"1240,1024,778,480",
            gridwidth:"1230,1024,778,480",
            gridheight:"785,700,550,400",
            lazyType:"smart",
            perspective:600,
            perspectiveType:"global",
            editorheight:"785,700,550,400",
            responsiveLevels:"1240,1024,778,480",
            progressBar:{disableProgressBar:true},
            navigation: {
                wheelCallDelay:1000,
                onHoverStop:false,
                arrows: {
                    enable:true,
                    style:"metis",
                    hide_onmobile:true,
                    hide_under:"1024px",
                    left: {
                        container:"layergrid",
                        h_align:"right",
                        v_align:"bottom",
                        h_offset:160
                    },
                    right: {
                        container:"layergrid",
                        v_align:"bottom",
                        h_offset:80
                    }
                }
            },
            viewPort: {
                global:true,
                globalDist:"-200px",
                enable:false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid:true
            },
    });
    
}} // End of RevInitScript
if (window.RS_MODULES.checkMinimal!==undefined) { window.RS_MODULES.checkMinimal();};
