var sel="Construction",N="233000000000";
function up(){var u="https://wa.me/"+N+"?text="+encodeURIComponent("Hello TMEC, I would like to enquire about "+sel);document.getElementById("wa").href=u;document.getElementById("wa2").href=u}
document.getElementById("o").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;this.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});sel=b.textContent;up()});up();
document.addEventListener("click",function(e){var a=e.target.closest('a[href^="#"]');if(!a)return;var id=a.getAttribute("href").slice(1);var t=id?document.getElementById(id):document.body;if(!t)return;e.preventDefault();t.scrollIntoView({behavior:"smooth",block:"start"});});
