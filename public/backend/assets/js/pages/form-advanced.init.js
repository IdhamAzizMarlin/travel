! function (i) {
    "use strict";

    function e() {}
    e.prototype.init = function () {
        i(".colorpicker-default").spectrum(), i("#show-input").spectrum({
            preferredFormat: "hex",
            showInput: !0
        }), i("#show-alpha").spectrum({
            preferredFormat: "rgb",
            showInput: !0,
            showAlpha: !0
        }), i("#show-palette").spectrum({
            showPalette: !0,
            palette: [
                ["#3051d3", "#3ddc97", "#00a7e1"],
                ["#e4cc37", "#f06543", "#343a40"]
            ]
        }), i("#show-input-initial").spectrum({
            preferredFormat: "hex",
            showInitial: !0,
            showInput: !0
        }), i("#hide-button").spectrum({
            showButtons: !1
        }), i("#flat-colorpicker").spectrum({
            preferredFormat: "hex",
            flat: !0,
            showInput: !0
        }), i(".selectize").selectize(), i("#selectize-tags").selectize({
            delimiter: ",",
            persist: !1,
            create: function (e) {
                return {
                    value: e,
                    text: e
                }
            }
        });
        var n = {};
        i('[data-toggle="touchspin"]').each(function (e, a) {
            var t = i.extend({}, n, i(a).data());
            i(a).TouchSpin(t)
        }), i("input[name='demo3_21']").TouchSpin({
            initval: 40,
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        }), i("input[name='demo3_22']").TouchSpin({
            initval: 40,
            buttondown_class: "btn btn-primary",
            buttonup_class: "btn btn-primary"
        }), i("input[name='demo_vertical']").TouchSpin({
            verticalbuttons: !0
        }), i("input#defaultconfig").maxlength({
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-warning"
        }), i("input#thresholdconfig").maxlength({
            threshold: 20,
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-warning"
        }), i("input#moreoptions").maxlength({
            alwaysShow: !0,
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-danger"
        }), i("input#alloptions").maxlength({
            alwaysShow: !0,
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-danger",
            separator: " out of ",
            preText: "You typed ",
            postText: " chars available.",
            validate: !0
        }), i("textarea#textarea").maxlength({
            alwaysShow: !0,
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-warning"
        }), i("input#placement").maxlength({
            alwaysShow: !0,
            placement: "top-left",
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-warning"
        })
    }, i.AdvancedForm = new e, i.AdvancedForm.Constructor = e
}(window.jQuery),
function () {
    "use strict";
    window.jQuery.AdvancedForm.init()
}();