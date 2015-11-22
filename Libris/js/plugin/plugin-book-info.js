$.fn.setBookInfo = function (obj) {
    $(this).empty();

    ////书名
    //console.log(obj['t']);
    ////索书号
    //console.log(obj['c']);
    ////出版社
    //console.log(obj['p']);
    ////作者
    //console.log(obj['a']);


    //<li class="collection-item avatar">
    //  <i class="mdi-action-account-balance circle green"></i>
    //  <span class="title">Title</span>
    //
    //  <p>First Line</p>
    //</li>

    for (var i = 0, len = obj["s"].length; i < len; i++) {
        var item = document.createElement("li");
        $(item).addClass("collection-item avatar");

        console.log(i)
        if (i == 0) {
            var icon = document.createElement("i");
            $(icon).addClass("mdi-action-account-balance circle green");
            $(item).append(icon);
        }

        var title = document.createElement("span");
        $(title).addClass("title");
        $(title).text(obj["c"] + " " + obj["s"][i]["m"]);
        $(item).append(title);

        var secondaryMsg = document.createElement("p");
        $(secondaryMsg).text(obj["s"][i]["l"]);
        $(item).append(secondaryMsg);

        $(this).append(item);
    }

    var authorItem = document.createElement("li");
    $(authorItem).addClass("collection-item avatar");

    var authorIcon = document.createElement("i");
    $(authorIcon).addClass("mdi-action-account-box circle green");
    $(authorItem).append(authorIcon);

    var author = document.createElement("span");
    $(author).addClass("title");
    $(author).text(obj["a"]);
    $(authorItem).append(author);

    var authorSecondaryMsg = document.createElement("p");
    $(authorSecondaryMsg).text("作者");
    $(authorItem).append(authorSecondaryMsg);

    $(this).append(authorItem);

    var publisherItem = document.createElement("li");
    $(publisherItem).addClass("collection-item avatar");

    var publisherIcon = document.createElement("i");
    $(publisherIcon).addClass("mdi-social-public circle green");
    $(publisherItem).append(publisherIcon);

    var publisher = document.createElement("span");
    $(publisher).addClass("title");
    $(publisher).text(obj["p"]);
    $(publisherItem).append(publisher);

    var publisherSecondaryMsg = document.createElement("p");
    $(publisherSecondaryMsg).text("出版社");
    $(publisherItem).append(publisherSecondaryMsg);

    $(this).append(publisherItem);
};