"use strict";
(function () {
    var avenger = 10;
    console.log({ avenger: avenger });
    var villains = 20;
    if (avenger < villains) {
        console.log("Estamos en problemas");
    }
    else {
        console.log("Nos salvamos");
    }
    avenger = Number("55a");
    console.log({ avenger: avenger });
})();
