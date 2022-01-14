exports.name = 'john';
exports.data = 'this is some data';

var privateVariables = 5;

exports.getPrivate = function(){
    return privateVariables;
};