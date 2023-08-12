function add (){
    var initVal; var checkVal;
    initVal = form.screen.value;
    checkVal = initVal.charAt(initVal.length - 1);
    if (checkVal == '+' || checkVal == '-' || checkVal == '/' || checkVal == '*') {
        form.screen.value = initVal.substring(0,initVal.length-1);
        form.screen.value += '+';
    } else {
        form.screen.value += '+';
    }
}

function sub (){
    var initVal; var checkVal;
    initVal = form.screen.value;
    checkVal = initVal.charAt(initVal.length - 1);
    if (checkVal == '+' || checkVal == '-' || checkVal == '/' || checkVal == '*') {
        form.screen.value = initVal.substring(0,initVal.length-1);
        form.screen.value += '-';
    } else {
        form.screen.value += '-';
    }
}

function div (){
    var initVal; var checkVal;
    initVal = form.screen.value;
    checkVal = initVal.charAt(initVal.length - 1);
    if (checkVal == '+' || checkVal == '-' || checkVal == '/' || checkVal == '*') {
        form.screen.value = initVal.substring(0,initVal.length-1);
        form.screen.value += '/';
    } else {
        form.screen.value += '/';
    }
}

function mul (){
    var initVal; var checkVal;
    initVal = form.screen.value;
    checkVal = initVal.charAt(initVal.length - 1);
    if (checkVal == '+' || checkVal == '-' || checkVal == '/' || checkVal == '*') {
        form.screen.value = initVal.substring(0,initVal.length-1);
        form.screen.value += '*';
    } else {
        form.screen.value += '*';
    }
}
