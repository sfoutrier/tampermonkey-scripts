// ==UserScript==
// @name         Google Popup Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes those noisy google always popup to ask you to download their web browser instead of yours or to add google as default search engine.
// @author       Sébastien Foutrier
// @match        *.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("div[role=dialog]").style.visibility = "hidden";
})();
