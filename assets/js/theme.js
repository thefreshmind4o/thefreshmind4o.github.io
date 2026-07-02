(function(){
  var root=document.documentElement;
  var saved=localStorage.getItem("theme");
  var prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.setAttribute("data-theme", saved || (prefersDark?"dark":"light"));
  document.addEventListener("click", function(e){
    var btn=e.target.closest("[data-theme-toggle]");
    if(!btn) return;
    var next=root.getAttribute("data-theme")==="dark"?"light":"dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();
