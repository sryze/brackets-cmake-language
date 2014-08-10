define(function(reuire, exports, module) {
    "use strict";
    
    var LanguageManager = brackets.getModule("language/LanguageManager");
    var CodeMirror = brackets.getModule("thirdparty/CodeMirror2/lib/codemirror");
    
    CodeMirror.defineMode("cmake", function(config) {                                           
        return {
            token: function(stream, state) {
                if (stream.match(/\s*\${.*?}/)) {
                    return "variable";
                } else if (state.isInString) {
                    if (stream.match(/.*?"/)) {
                        state.isInString = false;
                        return "string";
                    } else {
                        stream.skipToEnd();
                        return "string multiline";
                    }
                } else if (stream.peek() == "\"") {
                    state.isInString = true;
                    stream.next();
                    return "string"
                } else if (stream.peek() == "#") {
                    stream.skipToEnd();
                    return "comment";
                } else if (stream.match(/\S+?\s*\(/)) {
                    stream.backUp(1);
                    stream.eatSpace();
                    return "keyword";
                }
                stream.next();
                return null;
            },             
            startState: function() {
                return {
                    isInString: false
                };
            },   
            lineComment: "#"
        };
    });

    CodeMirror.defineMIME("text/x-cmake", "cmake");
    
    LanguageManager.defineLanguage("cmake", {
        name: "CMake",
        mode: "cmake",
        fileExtensions: ["cmake", "cmake.in"],
        fileNames: ["CMakeLists.txt"],
        lineComment: ["#"]
    });
});
