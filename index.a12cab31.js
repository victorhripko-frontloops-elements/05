!function(){var t=150,n=1e3,e=0,o=["design","frontend","backend","testing"],c=document.querySelector(".type");function u(i){var l=0,r=i.length,a=setInterval((function(){l<r?(c.textContent+=i[l],l++):function(t){clearInterval(t),setTimeout((function(){c.textContent=null,e<o.length-1?e++:e=0,u(o[e])}),n)}(a)}),t)}u(o[e])}();