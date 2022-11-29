(function (global) {
    var Module = (function () {

        // these are private variables
        var data = "secret";
        var numRows = -1;
        var numCols = -1;
        var cells;

        return {
            // public properites
            bool: true,
            string: "a string",
            array: [1, 2, 3, 4],
            object: {
                lang: "en-Us"
            },
            getData: function () {
                // get the current value of `data`
                return data;
            },
            setData: function (value) {
                // set the value of `data` and return it
                return (data = value);
            },

            init: function (numCols_in, numRows_in) {
                console.log("hello");
                console.log(window);
                numRows = numRows_in;
                numCols = numCols_in;
                cells = new Array(numRows);

                for (i = 0; i < numCols; i++) {
                    cells[i] = new Array(numRows);

                    for (j = 0; j < numRows; j++) {
                        cells[i][j] = 0;
                    }
                }
                cells[Math.floor(numCols / 2)][0] = 1;

                rule = new Array(8);
                for (i = 0; i < 8; i++) {
                    rule[i] = -1;
                }
                // alert("init seems to be calling okay: "+numCols+", "+numRows);
            },

            setRule: function (r0, r1, r2, r3, r4, r5, r6, r7) {
                rule[0] = r0;
                rule[1] = r1;
                rule[2] = r2;
                rule[3] = r3;
                rule[4] = r4;
                rule[5] = r5;
                rule[6] = r6;
                rule[7] = r7;
            },

            checkUndef: function (thisVar) {
                if (thisVar === null) {
                    return 0;
                } else {
                    return thisVar;
                }
            },

            calcCell: function (cx, cy) {
                if (cy == 0) return -1;

                var left;

                if (cx > 0) {
                    left = this.checkUndef(cells[cx - 1][cy - 1]);
                } else {
                    left = 0;
                }

                var center = this.checkUndef(cells[cx][cy - 1]);

                var right;

                if (cx < numCols - 1) {
                    right = this.checkUndef(cells[cx + 1][cy - 1]);
                } else {
                    right = 0;
                }

                if (!left && !center && !right) {
                    return rule[0];
                } else if (!left && !center && right) {
                    return rule[1];
                } else if (!left && center && !right) {
                    return rule[2];
                } else if (!left && center && right) {
                    return rule[3];
                } else if (left && !center && !right) {
                    return rule[4];
                } else if (left && !center && right) {
                    return rule[5];
                } else if (left && center && !right) {
                    return rule[6];
                } else if (left && center && right) {
                    return rule[7];
                } else {
                    return -1;
                }
            },

            calcRow: function (rowNum) {
                for (i = 0; i < numCols; i++) cells[i][rowNum] = this.calcCell(i, rowNum);
            },

            calcAllTheCells: function () {
                // $("#status").html("calculating . . .");
                for (j = 1; j < numRows; j++) {
                    this.calcRow(j);
                    this.drawLine(j);
                    this.rebuild_chrome_hack = !this.rebuild_chrome_hack;
                    $('#canvas').css('background-color', this.rebuild_chrome_hack ? 1 : 0.999);
                    this.pausecomp(1);
                }
                console.log("done");
            },

            clear: function () {
                var canvas = document.getElementById("canvas");
                if (canvas.getContext) {
                    var ctx = canvas.getContext("2d");
                    ctx.clearRect(0, 0, numCols, numRows);

                }

            },

            spitItOut: function () {
                var inefficient = "";
                for (j = 0; j < numRows; j++) {
                    for (i = 0; i < numCols; i++) {
                        inefficient += ("" + cells[i][j]);
                    }
                    inefficient += "\n\r";
                }
                alert(inefficient);
            },

            draw: function () {
                //$("#status").html("drawing . . .");
                var canvas = document.getElementById("canvas");
                if (canvas.getContext) {
                    var ctx = canvas.getContext("2d");

                    for (j = 0; j < numRows; j++) {
                        for (i = 0; i < numCols; i++) {
                            if (cells[i][j]) {
                                ctx.fillRect(i, j, 1, 1);
                            }
                        }
                    }
                }
            },

            drawLine: function (num) {
                var canvas = document.getElementById("canvas");
                if (canvas.getContext) {
                    var ctx = canvas.getContext("2d");

                    for (i = 0; i < numCols; i++) {
                        if (cells[i][num]) {
                            ctx.fillRect(i, num, 1, 1);
                        }
                    }

                }
            },

            updateStatus: function (htmlString) {
                $("#status").html(htmlString);
            },


            pausecomp: function (ms) {
                ms += new Date().getTime();
                while (new Date() < ms) {
                }
            }


        };
    })();

    // Other things might happen here

    // expose our module to the global object
    global.Module = Module;

})(this);