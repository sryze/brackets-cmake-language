(function () {
    var fs = require('fs');

    function findAll(regexp, text) {
        var resuls;
        var matches = [];
        while ((results = regexp.exec(text)) != null) {
            matches.push(results[0]);
        }
        return matches;
    }

    var options = { encoding: 'utf-8' };
    var text = fs.readFileSync('commands.txt', options);
    var keywords = {};
    var commands = findAll(/[a-zA-Z_][a-zA-Z0-9_]*(?=\r?\n[-]+)/gm, text);

    commands.forEach(function (cmd) {
        var pattern = '::\\r?\\n\\r?\\n ' + cmd
                    + '\([\\s\\S]*?\)(?=\\r?\\n\\r?\\n)';
        var declarations = findAll(new RegExp(pattern, 'gm'), text);     
        var args = [];
        declarations.forEach(function (decl) {
            args = args.concat(findAll(/\b[A-Z_][A-Z0-9_]*\b/g, decl));
        });
        keywords[cmd] = args.filter(function(elem, pos) {
            return args.indexOf(elem) == pos;
        }).sort();
    });

    fs.writeFileSync('commands.json', JSON.stringify(keywords), options);
})();
