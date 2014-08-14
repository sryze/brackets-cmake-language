(function () {
    var fs = require('fs');

    var options = { encoding: 'utf-8' };
    var text = fs.readFileSync('commands.txt', options);
    var keywords = {};
    var commands = text.match(/[a-zA-Z_][a-zA-Z0-9_]*(?=\r?\n[-]+)/gm);

    commands.forEach(function (cmd) {
        var pattern = '::\\r?\\n\\r?\\n ' + cmd
                    + '\([\\s\\S]*?\)(?=\\r?\\n\\r?\\n)';
        var declarations = text.match(new RegExp(pattern, 'gm')) || [];
        var args = [];
        declarations.forEach(function (decl) {
            args = args.concat(decl.match(/\b[A-Z_][A-Z0-9_]*\b/g) || []);
        });
        keywords[cmd] = args.filter(function(elem, pos) {
            return args.indexOf(elem) == pos;
        }).sort();
    });

    var json = JSON.stringify(keywords, null, 4);
    fs.writeFileSync('commands.json', json, options);
})();
