(function (global) {
    var CellApp = (function () {

        //TODO: remove JQuery (it's 2022)

        return {

            init: function () {
                $(".rule-clicker").click(function () {
                    if ($(this).css("background-color") != "rgb(0, 0, 0)") {
                        $(this).css("background-color", "black");
                    } else {
                        $(this).css("background-color", "");
                    }


                });

                // sig file missing
                // $('.container').append('<img src="http://cameronbrowning.com/cbsig.png"  style="position:absolute;left:20px;bottom:20px;" />');

            },
            makeBlack: function (theObject) {
                // get the current value of `data`
                theObject.css("background-color", "#000000");
            },

            getRule: function (num) {
                return $('.checkbox').eq(num).attr('checked');

            }

        };
    })();

    // Other things might happen here

    // expose our module to the global object
    global.CellApp = CellApp;

})(this);