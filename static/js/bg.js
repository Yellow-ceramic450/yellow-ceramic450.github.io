(function () {
    var images = ["/background/1.png", "/background/2.jpg"];
    var img = images[Math.floor(Math.random() * images.length)];
    var el = document.createElement("div");
    el.id = "random-bg";
    el.style.cssText =
        "position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;" +
        "background-image:url(" + img + ");background-size:cover;" +
        "background-position:center;background-repeat:no-repeat;" +
        "background-attachment:fixed;";
    document.body.prepend(el);
})();
