! function() {
    "use strict";
    var t = tinymce.util.Tools.resolve("tinymce.PluginManager"),
        e = tinymce.util.Tools.resolve("tinymce.util.Tools"),
        n = [
            ["🙂", "😊", "😀", "😁", "😂", "😄", "😆", "😍"],
            ["🙁", "😡", "😟", "😟", "😣", "😖", "😢", "😭"],
            ["😨", "😧", "😦", "😱", "😩", "😮", "😯", "😲"],
            ["😗", "😚", "😘", "😉", "😜", "😘", "😛", "🤑"],
            ["🤔", "😕", "😐", "😑", "😳", "😞", "😖", "🤐"],
            ["😶", "😇", "👼", "😈", "😎", "😪", "😏", "😒"],
            ["😵", "😕", "🤕", "🤒", "😷", "🤢", "🤨", "❤️"]
        ],
        i = function(i) {
            var o;
            return o = '<table role="list" class="mce-grid">', e.each(n, function(t) {
                o += "<tr>", e.each(t, function(t) {
                    var e = t;
                    o += '<td><a href="#" data-mce-url="' + e + '" data-mce-alt="' + t + '" tabindex="-1" role="option" aria-label="' + t + '">' + e + '</a></td>'
                }), o += "</tr>"
            }), o += "</table>"
        },
        o = function(a, t) {
            var e = i(t);
            a.addButton("smileys", {
                text: "😀",
                type: "panelbutton",
                panel: {
                    role: "application",
                    autohide: !0,
                    html: e,
                    onclick: function(t) {
                        var e, i, o, n = a.dom.getParent(t.target, "a");
                        n && (e = a, i = n.getAttribute("data-mce-url"), o = n.getAttribute("data-mce-alt"), e.insertContent(i), this.hide())
                    }
                },
                tooltip: "Smileys"
            })
        };
    t.add("smileys", function(t, e) {
        o(t, e)
    })
}();