 /**
 *Function for Chunk operation
 **/

var doChunk = function () {
    var txtboxval = document.getElementById('txtbox').value;
    if (!txtboxval) {
        alert("Please enter some values in the text-box to do the operation");
        return;
    }
    var a = txtboxval.split(",");
    var chunksize = parseInt(prompt("Please enter the chunk size"));
    if (chunksize) {
        var k = chunk(a, chunksize);
        alert("Chunked arrays:\n" + k.join("\n"));
    }
    else {
        alert("Only enter numerical values for the chunk size");
    }
};

/**
 * Function to convert an array into chunks of desired size.
 * @param {number[]} arr 
 * @param {number} chunkSize 
 * @return {number[]} 
 */

var chunk = function (arr, chunkSize) {
    var slicedArr = [];
    var tempArr = [];
    for (var i = 0, j = 0; i < arr.length; i++, j++) {
        if (j === chunkSize) {
            slicedArr.push(tempArr);
            tempArr = [];
            j = 0;
        }
        tempArr[j] = arr[i];
    }
    slicedArr.push(tempArr);
    return slicedArr;
};

/**
 *Function for reduce operation
 **/
var doReduce = function () {
    var txtboxval = document.getElementById('txtbox').value;
    if (!txtboxval) {
        alert("Please enter some values in the text-box to do the operation");
        return;
    }
    var b = txtboxval.split(",");
    var a = [];
    for (var i in b) {
        a[i] = parseFloat(b[i]);
        if (!a[i]) {
            alert("Please only enter numbers seperated by , to use reduce function");
            return;
        }
    }
    var reducetype = (prompt("Please enter the reduce type(sum/mul)"));
    if (!reducetype)
        return;
    if (reducetype.toLowerCase() === 'sum' || reducetype.toLowerCase() === 'mul') {
        if (reducetype.toLowerCase() === 'sum') {
            var reducetot = reduce(a, function (sum, item) { return sum + item; }, 0);
            alert("Reduced value after doing sum: " + reducetot);
        }
        else {
            var reducetot = reduce(a, function (sum, item) { return sum * item; }, 1);
            alert("Reduced value after doing multiplication: " + reducetot);
        }
    }
    else {
        alert("Please only enter sum or mul to use reduce");
    }
};

/**
 * Helper Function to reduce an array into sum or multiplication of all values.
 * @param {number[]} arr 
 * @param {function} 
 * @param {number} init
 * @return {number[]} 
 */

var reduce = function (arr, fun, init) {
    for (var i in arr) {
        init = fun(init, arr[i]);
    }
    return init;
};

/**
 *Function for Filter operation
 **/

var doFilter = function () {
    var txtboxval = document.getElementById('txtbox').value;
    if (!txtboxval) {
        alert("Please enter some values in the text-box to do the operation");
        return;
    }
    var b = txtboxval.split(",");
    var a = [];
    for (var i in b) {
        a[i] = parseFloat(b[i]);
        if (!a[i]) {
            alert("Please only enter numbers seperated by , to use Filter function");
            return;
        }
    }
    var filterval = parseInt(prompt("Please enter a value. All the values greater than the given value will be showed"));
    if (filterval) {
        var k = filter(a, function (value) { return value > filterval; });
        alert("Filtered values that are greater than " + filterval + " are: " + k);
    }
    else {
        alert("Only enter numerical values for the filter value");
    }
};

/**
 * Helper Function to filter an array into desired values.
 * @param {number[]} arr 
 * @param {function} fun
 * @return {number[]} 
 */
var filter = function (arr, fun) {
    var filarr = [];
    for (var i in arr) {
        if (fun(arr[i]))
            filarr.push(arr[i]);
    }
    return filarr;
};

/**
 *Function for Find operation
 **/

var doFind = function () {
    var txtboxval = document.getElementById('txtbox').value;
    if (!txtboxval) {
        alert("Please enter some values in the text-box to do the operation");
        return;
    }
    var b = txtboxval.split(",");
    var a = [];
    for (var i in b) {
        a[i] = parseFloat(b[i]);
        if (!a[i]) {
            alert("Please only enter numbers seperated by , to use Find function");
            return;
        }
    }
    var findval = parseInt(prompt("Please enter a value. First value greater than the given value will be displayed"));
    var strt = parseInt(prompt("Enter the index from where the search should start"));
    if (findval) {
        var k = find(a, function (value) { return value > findval; }, strt);
        alert("Found value that is greater than " + findval + " starting from index " + strt + " is: " + k);
    }
    else {
        alert("Only enter numerical values for the find value");
    }
};
/**
 * Helper Function to find First value greater than the given value  in array .
 * @param {number[]} arr 
 * @param {function} fun
 * @param {number[]} startindex
 * @return {number} 
 */

var find = function (arr, fun, startindex) {
    if (!startindex)
        startindex = 0;
    for (var i = startindex; i < arr.length; i++) {
        if (fun(arr[i]))
            return arr[i];
    }
    return undefined;
};

/**
 *Function for Sum operation
 **/

var doSum = function () {
    var txtboxval = document.getElementById('txtbox').value;
    if (!txtboxval) {
        alert("Please enter some values in the text-box to do the operation");
        return;
    }
    var b = txtboxval.split(",");
    var a = [];
    for (var i in b) {
        a[i] = parseFloat(b[i]);
        if (!a[i]) {
            alert("Please only enter numbers seperated by , to use reduce function");
            return;
        }
    }
    var sumtot = sum(a);
    alert("Sum of all the values in the array is " + sumtot);
};

/**
 * Helper Function to find sum of all values in array .
 * @param {number[]} arr 
 * @return {number} 
 */

var sum = function (arr) {
    var sumtot = 0;
    for (var i in arr) {
        sumtot += arr[i];
    }
    return sumtot;
};



var maindiv = document.createElement('div');
maindiv.setAttribute('class', 'container');
var div1 = document.createElement('div');
div1.setAttribute('class', 'text-center mt-5');
var label1 = document.createElement('label');
label1.setAttribute('class', 'm-2');
label1.setAttribute('for', 'txtbox');
label1.innerHTML = "Enter the array values(, seperated)";
var txtbox = document.createElement('input');
txtbox.setAttribute('id', 'txtbox');
txtbox.setAttribute('type', 'text');
txtbox.value = '';
var div2 = document.createElement('div');
div2.setAttribute('class', 'text-center');

var chunkbutton = document.createElement('button');
chunkbutton.setAttribute('id', 'chunkbutton');
chunkbutton.setAttribute('class', 'btn btn-primary m-2');
chunkbutton.addEventListener('click', doChunk);
chunkbutton.innerText = "Chunk";

var reducebutton = document.createElement('button');
reducebutton.setAttribute('id', 'reducebutton');
reducebutton.setAttribute('class', 'btn btn-primary m-2');
reducebutton.addEventListener('click', doReduce);
reducebutton.innerText = "Reduce";

var filterbutton = document.createElement('button');
filterbutton.setAttribute('id', 'filterbutton');
filterbutton.setAttribute('class', 'btn btn-primary m-2');
filterbutton.addEventListener('click', doFilter);
filterbutton.innerText = "Filter";

var findbutton = document.createElement('button');
findbutton.setAttribute('id', 'findbutton');
findbutton.setAttribute('class', 'btn btn-primary m-2');
findbutton.addEventListener('click', doFind);
findbutton.innerText = "Find";

var sumbutton = document.createElement('button');
sumbutton.setAttribute('id', 'sumbutton');
sumbutton.setAttribute('class', 'btn btn-primary m-2');
sumbutton.addEventListener('click', doSum);
sumbutton.innerText = "Sum";

div1.append(label1, txtbox);
div2.append(chunkbutton, reducebutton, filterbutton, findbutton, sumbutton);
maindiv.append(div1, div2);
document.body.appendChild(maindiv);