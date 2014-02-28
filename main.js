/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

/** Sets the language highlighting of pjs files to javascript */
define(function (require, exports, module) {
    "use strict";

    var LanguageManager = brackets.getModule('language/LanguageManager');
    var language = LanguageManager.getLanguage("javascript");
    language.addFileExtension("pjs");
});
