var fs = require('fs');

function copy_1(src, dst) {
    fs.writeFileSync(dst, fs.readFileSync(src));
}

function main(argv) {
    copy_1(argv[0], argv[1]);
}

main(process.argv.slice(2));