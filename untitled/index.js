// require('colors');
// console.log('smashing node'.rainbow);

// var a = {a:'b',c:'d'};
// console.log(Object.keys(a));

// i = ' hello '.trim();
// console.log(i)

// var obj = JSON.parse('{"a":"b"}')
// console.log(obj.a);

Date.prototype.__defineGetter__('age', function(){
    var diff = (((new Date()).getTime() - this.getTime()) /1000);
    var day_diff = Math.floor(diff / 86400);
    return day_diff == 0 && (
        diff < 60 && "just now" ||
        diff < 120 && "1 minute ago" ||
        diff < 3600 && Math.floor(diff /60) + " minutes age" ||
        diff < 7200 && "1 hour ago" ||
        diff < 86400 && Math.floor(diff /3600) + " hours age") ||
        day_diff == 1 && "Yesterday" ||
        day_diff < 7 && day_diff + " days age" ||
        Math.ceil( day_diff / 7) + " weeks age";
});

var a = new Date('3/25/1990');
console.log(a.age);