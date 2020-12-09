var name = "zero";
function log() {
    console.log(name);
}

function wrapper() {

    var name ="dabin";
    log();
}
log();
wrapper();
// console.log(wow);

