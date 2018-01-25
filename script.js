/*jslint browser: true*/
/*jslint node: true */
/*jslint devel: true */

/*eslint-env browser */
/*eslint-disable no-unused-vars */
/*eslint-disable no-console */
"use strict";


function setup() {
    var c = document.getElementById("canvas"),
        ctx = c.getContext("2d");
    
    ctx.fillRect(0, 0, 1920, 1078);
}

setup();
