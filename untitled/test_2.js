'use strict';

function string2int(s) {
    s = s.split('');
    s = s.map(String);
    if (s[1]){
        s = s.reduce(function(x,y){
            return x * 10 + y;
        });
    }

    return s;
}

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        console.log('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        console.log('请勿使用Number()!');
    } else {
        console.log('测试通过!');
    }
}
else {
    console.log('测试失败!');
}