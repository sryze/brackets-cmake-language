define(function(reuire, exports, module) {
    'use strict';

    var LanguageManager = brackets.getModule('language/LanguageManager');
    var CodeMirror = brackets.getModule('thirdparty/CodeMirror2/lib/codemirror');
    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils');

    CodeMirror.defineMode('cmake', function (config) {
        var keywords = {"add_compile_options":[],"add_custom_command":["APPEND","ARGS","COMMAND","COMMENT","DEPENDS","IMPLICIT_DEPENDS","MAIN_DEPENDENCY","OUTPUT","POST_BUILD","PRE_BUILD","PRE_LINK","TARGET","VERBATIM","WORKING_DIRECTORY"],"add_custom_target":["ALL","COMMAND","COMMENT","DEPENDS","SOURCES","VERBATIM","WORKING_DIRECTORY"],"add_definitions":["COMPILE_DEFINITIONS","DBAR","DFOO","INCLUDE_DIRECTORIES","LINK_DIRECTORIES","LINK_LIBRARIES"],"add_dependencies":[],"add_executable":["ALIAS","EXCLUDE_FROM_ALL","GLOBAL","IMPORTED","MACOSX_BUNDLE","WIN32"],"add_library":["ALIAS","EXCLUDE_FROM_ALL","GLOBAL","IMPORTED","INTERFACE","MODULE","OBJECT","SHARED","STATIC","UNKNOWN"],"add_subdirectory":["EXCLUDE_FROM_ALL"],"add_test":["COMMAND","CONFIGURATION","CONFIGURATIONS","NAME","TARGET_FILE","WORKING_DIRECTORY"],"aux_source_directory":[],"break":[],"build_command":[],"cmake_host_system_information":["QUERY","RESULT"],"cmake_minimum_required":["FATAL_ERROR","VERSION"],"cmake_policy":["CMP","GET","NEW","NNNN","OLD","POP","PUSH","SET","VERSION"],"configure_file":["COPYONLY","CRLF","DOS","ESCAPE_QUOTES","LF","NEWLINE_STYLE","ONLY","UNIX","WIN32"],"create_test_sourcelist":["EXTRA_INCLUDE","FUNCTION"],"define_property":["BRIEF_DOCS","CACHED_VARIABLE","DIRECTORY","FULL_DOCS","GLOBAL","INHERITED","PROPERTY","SOURCE","TARGET","TEST","VARIABLE"],"elseif":[],"else":[],"enable_language":["OPTIONAL"],"enable_testing":[],"endforeach":[],"endfunction":[],"endif":[],"endmacro":[],"endwhile":[],"execute_process":[],"export":["APPEND","EXPORT","EXPORT_LINK_INTERFACE_LIBRARIES","FILE","NAMESPACE","PACKAGE","TARGETS"],"file":["ALGO","APPEND","CONDITION","CONTENT","COPY","DESTINATION","DIRECTORY_PERMISSIONS","DOWNLOAD","EXCLUDE","EXPECTED_HASH","EXPECTED_MD5","FILES_MATCHING","FILE_PERMISSIONS","FOLLOW_SYMLINKS","GENERATE","GLOB","GLOB_RECURSE","HEX","INACTIVITY_TIMEOUT","INPUT","INSTALL","LENGTH_MAXIMUM","LENGTH_MINIMUM","LIMIT","LIMIT_COUNT","LIMIT_INPUT","LIMIT_OUTPUT","LOG","MAKE_DIRECTORY","MD5","NEWLINE_CONSUME","NO_HEX_CONVERSION","NO_SOURCE_PERMISSIONS","OFFSET","OUTPUT","PATTERN","PERMISSIONS","READ","REGEX","RELATIVE","RELATIVE_PATH","REMOVE","REMOVE_RECURSE","RENAME","SHA1","SHA224","SHA256","SHA384","SHA512","SHOW_PROGRESS","STATUS","STRINGS","TIMEOUT","TIMESTAMP","TLS_CAINFO","TLS_VERIFY","TO_CMAKE_PATH","TO_NATIVE_PATH","UPLOAD","USE_SOURCE_PERMISSIONS","UTC","WRITE"],"find_file":[],"find_library":[],"a":["ALIAS","ALL","APPEND","ARGS","COMMAND","COMMENT","COMPILE_DEFINITIONS","CONFIGURATION","CONFIGURATIONS","DBAR","DEPENDS","DFOO","EXCLUDE_FROM_ALL","GLOBAL","IMPLICIT_DEPENDS","IMPORTED","INCLUDE_DIRECTORIES","INTERFACE","LINK_DIRECTORIES","LINK_LIBRARIES","MACOSX_BUNDLE","MAIN_DEPENDENCY","MODULE","NAME","OBJECT","OUTPUT","POST_BUILD","PRE_BUILD","PRE_LINK","SHARED","SOURCES","STATIC","TARGET","TARGET_FILE","UNKNOWN","VERBATIM","WIN32","WORKING_DIRECTORY"],"find_package":["CMAKE_FIND_ROOT_PATH_BOTH","COMPONENTS","CONFIG","CONFIGS","EXACT","HINTS","MODULE","NAMES","NO_CMAKE_BUILDS_PATH","NO_CMAKE_ENVIRONMENT_PATH","NO_CMAKE_FIND_ROOT_PATH","NO_CMAKE_PACKAGE_REGISTRY","NO_CMAKE_PATH","NO_CMAKE_SYSTEM_PACKAGE_REGISTRY","NO_CMAKE_SYSTEM_PATH","NO_DEFAULT_PATH","NO_MODULE","NO_POLICY_SCOPE","NO_SYSTEM_ENVIRONMENT_PATH","ONLY_CMAKE_FIND_ROOT_PATH","OPTIONAL_COMPONENTS","PATHS","PATH_SUFFIXES","QUIET","REQUIRED"],"find_path":[],"find_program":[],"fltk_wrap_ui":[],"foreach":["ARGS","COMMAND1","COMMAND2","IN","ITEMS","LISTS","RANGE"],"function":["ARGS","COMMAND1","COMMAND2"],"get_cmake_property":["VAR"],"get_directory_property":["DEFINITION","DIRECTORY"],"get_filename_component":["ARG_VAR","CACHE","COMP","PROGRAM","PROGRAM_ARGS","VAR"],"get_property":["BRIEF_DOCS","CACHE","DEFINED","DIRECTORY","FULL_DOCS","GLOBAL","PROPERTY","SET","SOURCE","TARGET","TEST","VARIABLE"],"get_source_file_property":["VAR"],"get_target_property":["VAR"],"get_test_property":["VAR"],"cmake":["CMP","FATAL_ERROR","GET","NEW","NNNN","OLD","POP","PUSH","QUERY","RESULT","SET","VERSION"],"if":["ARGN","ARGV1","IN","LISTS"],"include_directories":["AFTER","BEFORE","SYSTEM"],"include_external_msproject":["GUID","PLATFORM","TYPE"],"include_regular_expression":[],"include":["AFTER","BEFORE","GUID","NO_POLICY_SCOPE","OPTIONAL","PLATFORM","RESULT_VARIABLE","SYSTEM","TYPE","VAR"],"install":["ARCHIVE","BUNDLE","CODE","COMPONENT","CONFIGURATIONS","DESTINATION","DIRECTORY","DIRECTORY_PERMISSIONS","EXCLUDE","EXPORT","EXPORT_LINK_INTERFACE_LIBRARIES","FILE","FILES","FILES_MATCHING","FILE_PERMISSIONS","FRAMEWORK","INCLUDES","LIBRARY","NAMELINK_ONLY","NAMELINK_SKIP","NAMESPACE","OPTIONAL","PATTERN","PERMISSIONS","PRIVATE_HEADER","PROGRAMS","PUBLIC_HEADER","REGEX","RENAME","RESOURCE","RUNTIME","RUNTIME_DIRECTORY","SCRIPT","TARGETS","USE_SOURCE_PERMISSIONS"],"link_directories":[],"list":["APPEND","FIND","GET","INSERT","LENGTH","REMOVE_AT","REMOVE_DUPLICATES","REMOVE_ITEM","REVERSE","SORT"],"load_cache":["EXCLUDE","INCLUDE_INTERNALS","READ_WITH_PREFIX"],"load_command":["COMMAND_NAME"],"macro":["ARGN","ARGS","COMMAND1","COMMAND2","IN","LISTS","_BAR"],"mark_as_advanced":["CLEAR","FORCE","VAR","VAR2"],"math":["EXPR"],"message":[],"option":[],"project":[],"qt_wrap_cpp":[],"qt_wrap_ui":[],"remove_definitions":["DBAR","DFOO"],"return":[],"separate_arguments":["UNIX","VARIABLE","WINDOWS","_COMMAND"],"set_directory_properties":["PROPERTIES"],"set_property":["APPEND","APPEND_STRING","CACHE","DIRECTORY","GLOBAL","PROPERTY","SOURCE","TARGET","TEST"],"set":["APPEND","APPEND_STRING","ARGN","CACHE","DIRECTORY","ENV","FORCE","GLOBAL","IN","LISTS","OFF","PARENT_SCOPE","PATH","PROPERTIES","PROPERTY","SOURCE","TARGET","TEST"],"set_source_files_properties":["PROPERTIES"],"set_target_properties":["PROPERTIES"],"set_tests_properties":["PROPERTIES"],"site_name":[],"source_group":[],"string":["ALPHABET","ASCII","COMPARE","CONCAT","CONFIGURE","EQUAL","ESCAPE_QUOTES","FIND","GREATER","LENGTH","LESS","MAKE_C_IDENTIFIER","MATCH","MATCHALL","MD5","NOTEQUAL","ONLY","RANDOM","RANDOM_SEED","REGEX","REPLACE","REVERSE","SHA1","SHA224","SHA256","SHA384","SHA512","STRIP","SUBSTRING","TIMESTAMP","TOLOWER","TOUPPER","UTC"],"target_compile_definitions":["INTERFACE","PRIVATE","PUBLIC"],"target_compile_options":["BEFORE","INTERFACE","PRIVATE","PUBLIC"],"target_include_directories":["BEFORE","INTERFACE","PRIVATE","PUBLIC","SYSTEM"],"target_link_libraries":["INTERFACE","LINK_INTERFACE_LIBRARIES","LINK_PRIVATE","LINK_PUBLIC","PRIVATE","PUBLIC"],"try_compile":["CMAKE_FLAGS","COMPILE_DEFINITIONS","COPY_FILE","COPY_FILE_ERROR","LINK_LIBRARIES","OUTPUT_VARIABLE","RESULT_VAR","SOURCES"],"use":["OUTPUT_DIRECTORY","PATH_TO_MESA"],"with":[],"are":[],"try_run":["ARGS","CMAKE_FLAGS","COMPILE_DEFINITIONS","COMPILE_OUTPUT_VARIABLE","COMPILE_RESULT_VAR","OUTPUT_VARIABLE","RUN_OUTPUT_VARIABLE","RUN_RESULT_VAR"],"unset":["CACHE","ENV","LD_LIBRARY_PATH","PARENT_SCOPE"],"variable_watch":[],"while":["ARGS","COMMAND1","COMMAND2"],"build_name":[],"exec_program":["ARGS","OUTPUT_VARIABLE","RETURN_VALUE"],"export_library_dependencies":["APPEND"],"install_files":["FILES"],"install_programs":["FILES"],"install_targets":["RUNTIME_DIRECTORY"],"link_libraries":[],"make_directory":[],"output_required_files":[],"remove":["DBAR","DFOO","VALUE","VAR"],"subdir_depends":[],"subdirs":["EXCLUDE_FROM_ALL","PREORDER"],"use_mangled_mesa":["OUTPUT_DIRECTORY","PATH_TO_MESA"],"utility_source":[],"variable_requires":["REQUIRED_VARIABLE1","REQUIRED_VARIABLE2","RESULT_VARIABLE","TEST_VARIABLE"],"write_file":["APPEND"],"ctest_build":["APPEND","BUILD","NUMBER_ERRORS","NUMBER_WARNINGS","RETURN_VALUE","TARGET"],"ctest_configure":["APPEND","BUILD","OPTIONS","RETURN_VALUE","SOURCE"],"ctest_coverage":["APPEND","BUILD","LABELS","RETURN_VALUE"],"ctest_empty_binary_directory":[],"ctest_memcheck":["APPEND","BUILD","END","EXCLUDE","EXCLUDE_LABEL","INCLUDE","INCLUDE_LABEL","PARALLEL_LEVEL","RETURN_VALUE","START","STRIDE"],"ctest_read_custom_files":[],"ctest_run_script":["NEW_PROCESS","RETURN_VALUE"],"ctest_sleep":[],"ctest_start":["APPEND","TRACK"],"ctest_submit":["FILES","PARTS","RETRY_COUNT","RETRY_DELAY","RETURN_VALUE"],"ctest_test":["APPEND","BUILD","END","EXCLUDE","EXCLUDE_LABEL","INCLUDE","INCLUDE_LABEL","PARALLEL_LEVEL","RETURN_VALUE","SCHEDULE_RANDOM","START","STOP_TIME","STRIDE"],"ctest_update":["RETURN_VALUE","SOURCE"],"ctest_upload":["FILES"]};

        ['if', 'else', 'elseif', 'endif'].forEach(function (cmd) {
            keywords[cmd] = [
                'NOT','AND', 'OR', 'COMMAND', 'POLICY', 'TARGET',
                'EXISTS', 'IS_NEWER_THAN', 'IS_DIRECTORY', 'IS_SYMLINK',
                'IS_ABSOLUTE', 'MATCHES', 'LESS', 'GREATER', 'EQUAL',
                'STRLESS', 'STRGREATER', 'STREQUAL', 'VERSION_LESS',
                'VERSION_EQUAL', 'VERSION_GREATER', 'DEFINED'
            ];
        });
        
        var globalKeywords = ["ON", "OFF", "TRUE", "FALSE"];

        var COMMENT  = { name: 'COMMENT',  regexp: /#/ };
        var QUOTE    = { name: 'QUOTE',    regexp: /"/ };
        var OBRACKET = { name: 'OBRACKET', regexp: /\[([=]*)\[/ };
        var CBRACKET = { name: 'CBRACKET', regexp: /\]([=]*)\]/ };
        var SPACE    = { name: 'SPACE',    regexp: /\s+/ };
        var LPAREN   = { name: 'LPAREN',   regexp: /\(/ };
        var RPAREN   = { name: 'RPAREN',   regexp: /\)/ };
        var IDENT    = { name: 'IDENT',    regexp: /[A-Za-z_][A-Za-z0-9_]*/ };
        var VARREF   = { name: 'VARREF',   regexp: /\$(ENV)?{.*?}/ };
        var ANYCHAR  = { name: 'ANYCHAR',  regexp: /./ };

        COMMENT.handle = function (stream, state, token) {
            if (token.matchRule(OBRACKET)) {
                state.inBracketComment = true;
                state.bracketLength = token.match[0].length;
                token.class = 'comment';
            } else {
                stream.skipToEnd();
                token.class = 'comment';
            }
        }

        QUOTE.handle = function (stream, state, token) {
            state.inString = true;
            token.class = 'string';
        }

        OBRACKET.handle = function (stream, state, token) {
            state.inBracketString = true;
            token.class = 'string';
        }

        LPAREN.handle = function (stream, state, token) {
            state.parenBalance++;
        }

        RPAREN.handle = function (stream, state, token) {
            state.parenBalance--;
            if (state.parenBalance == 0) {
                state.command = null;
            }
        }

        IDENT.handle = function (stream, state, token) {
            if (state.command) {
                var arg = stream.current();
                if (globalKeywords.indexOf(arg) >= 0
                    || (keywords.hasOwnProperty(state.command)
                        && keywords[state.command].indexOf(arg) >= 0)) {
                    token.class = 'keyword';
                }
            } else {
                stream.eatSpace();
                if (token.matchRule(LPAREN)) {
                    stream.backUp(1);
                    state.command = stream.current();
                    token.class = 'keyword';
                }
            }
        }

        VARREF.handle = function (stream, state, token) {
            token.class = 'variable';
        }

        var rules = [
            COMMENT, QUOTE, OBRACKET, CBRACKET, SPACE, LPAREN, RPAREN,
            IDENT, VARREF, ANYCHAR
        ];

        return {
            token: function (stream, state) {
                var token = {
                    rule: null,
                    class: null,
                    match: null,
                    matchRule: function(rule) {
                        if ((token.match = stream.match(rule.regexp))) {
                            token.rule = rule;
                            return token.match;
                        }
                        return (token.match = null);
                    }
                };

                if (state.inString) {
                    token.class = 'string';
                    if (token.matchRule(QUOTE)) {
                        state.inString = false;
                    } else {
                        stream.next();
                    }
                } else if (state.inBracketString) {
                    token.class = 'string';
                    if (token.matchRule(CBRACKET)) {
                        state.inBracketString = false;
                    } else {
                        stream.next();
                    }
                } else if (state.inBracketComment) {
                    token.class = 'comment';
                    if (token.matchRule(CBRACKET)
                        && token.match[0].length == state.bracketLength) {
                        state.inBracketComment = false;
                    } else {
                        stream.next();
                    }
                } else {
                    rules.every(function(r) {
                        if (token.matchRule(r) && r.hasOwnProperty('handle')) {
                            r.handle(stream, state, token);
                        }
                        return !token.match;
                    });
                }

                return token.class;
            },

            startState: function () {
                return {
                    inString: false,
                    inBracketString: false,
                    inBracketComment: false,
                    command: null,
                    bracketLength: 0,
                    parenBalance: 0
                };
            },

            lineComment: '#',
            blockCommentStart: '#[=[',
            blockCommentEnd: ']=]'
        };
    });

    CodeMirror.defineMIME('text/x-cmake', 'cmake');

    LanguageManager.defineLanguage('cmake', {
        name: 'CMake',
        mode: 'cmake',
        fileExtensions: ['cmake', 'cmake.in'],
        fileNames: ['CMakeLists.txt'],
        lineComment: ['#']
    });
});
