function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("Did your parents allow you?");
    }
}
//"?"
function checkAge(age) {
    return (age > 18) ? true : confirm("Did your parents allow you?");
}

//"||"
function checkAge(age) {
    return (age >18) || confirm("Did your parents allow you?");
}

//Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b){
    if(a < b){
        return a;
    } else {
        return b;
    }
}

//function min(a, b) {
//   return a < b ? a : b;
// }

function ask(question, yes, no) {
    if (confirm(question)) yes();
     else no(); }
    ask(
    "Ви згодні?",
    function() { alert("Ви погодились.");
        }, function() { alert("Ви скасували виконання.");
    }
);

function ask(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}
ask(
    'Ви згодні?',
    () => alert("Ви погодились."),
    () => alert("Ви скасували виконання.")
);


