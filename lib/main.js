"use strict";

var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
    include: "*.quora.com",
    contentScriptFile: data.url('changeUrl.js'),
    contentScriptWhen: "start"
});
