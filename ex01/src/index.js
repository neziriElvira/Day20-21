var xy = '';
var FcapsLock = '0';
var Fshift = '0';

function funcBackSpace() {
    var valu = document.getElementById('display').innerHTML;
    var x = document.getElementById('display').innerHTML.length;
    var y = 1;
    var z = x - y;
    document.getElementById('display').innerHTML = valu.slice(0, z);
}
function funcCapsL() {
    if (FcapsLock == '0') {
        FcapsLock = '1';
    } else if (FcapsLock == '1') {
        FcapsLock = '0';
    }
}
function funcShift() {
    if (Fshift == '0') {
        Fshift = '1';
    } else if (Fshift == '1') {
        Fshift = '0';
    }
}

function funcEnter() {
    var valu = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = valu + '\n';
}

function funcSub() {
    var valu = document.getElementById('display').innerHTML;
        alert(valu);
}

function func(key) {
    var valu = document.getElementById('display').innerHTML;
    if (FcapsLock == '0') {
        if (Fshift == '0') {
            document.getElementById('display').innerHTML = valu + key;
        } else if (Fshift == '1') {
            Fshift = '0';
            document.getElementById('display').innerHTML = valu + key.toUpperCase();
        }
    } else if (FcapsLock == '1') {
        if (Fshift == '0') {
            document.getElementById('display').innerHTML = valu + key.toUpperCase();
        } else if (Fshift == '1') {
            Fshift = '0';
            document.getElementById('display').innerHTML = valu + key;
        }
    }
}


