"use strict";function darken(t){var o=.3;return Math.ceil(t-t*o)}function getRandomArbitrary(t,o){return Math.random()*(o-t)+t}function getRandomQuote(){$.ajax({url:"http://api.icndb.com/jokes/random?escape=javascript",type:"GET",dataType:"json"}).done(function(t){var o=t.value;setTimeout(function(){var t='"'+o.joke+'"';$(".twitter-share-button").attr("href","https://twitter.com/intent/tweet?text="+t),$("#quote").text(t),$(".quote-container").removeClass("animated hinge"),splashColor()},1800)}).fail(function(){console.log("error"),$("#quote").text('"Chuck Norris will never have a heart attack. His heart isn\'t nearly foolish enough to attack him."'),alert("Sorry the Chuck Norris API is down, Chuck Norris Down!? No he just has better things to do.")}).always(function(){console.log("complete")})}function splashColor(t){var o=Math.ceil(getRandomArbitrary(0,256)),e=Math.ceil(getRandomArbitrary(0,256)),r=Math.ceil(getRandomArbitrary(0,256)),a="rgb("+o+","+e+","+r+")",t="rgb("+darken(o)+","+darken(e)+","+darken(r)+")";$("body").css("background-color",a),$(".btn").css("active",a),$(".btn").css("focus",a),$(".quote-container").css("color",t),$("#by").css("color",t),$(".btn").css("background-color",t),$(".btn").css("border-color",t)}$(document).ready(function(){splashColor(),$("#getQuote").click(function(){$(".quote-container").addClass("animated hinge"),getRandomQuote()})});