"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode = __toESM(require("vscode"));
function activate(context) {
  console.log("GyatScript Extension Activated! \u{1F680}");
  let provider = vscode.languages.registerCompletionItemProvider(
    "gyat",
    // Match language ID
    {
      provideCompletionItems(document, position) {
        console.log("Providing completions...");
        const keywords = [
          { label: "ts", detail: "Declare or assign variables", insertText: "ts " },
          { label: "ong", detail: "Print output", insertText: 'ong("${1:Hello World}");' },
          { label: "icl", detail: "Conditional statement", insertText: "icl (${1:condition}) { $2 }" },
          { label: "gng", detail: "Loop statement", insertText: "gng (${1:condition}) { $2 }" },
          { label: "spit", detail: "Get user input", insertText: 'ts ${1:var} = spit("${2:Enter value:}");' },
          { label: "gyatlist", detail: "Create a list", insertText: "ts ${1:list} = gyatlist(${2:values});" },
          { label: "sup sigma", detail: "Special operator", insertText: "sup sigma" },
          { label: "duh sigma", detail: "Special operator", insertText: "duh sigma" }
        ];
        return keywords.map(({ label, detail, insertText }) => {
          const item = new vscode.CompletionItem(label, vscode.CompletionItemKind.Keyword);
          item.detail = detail;
          item.insertText = new vscode.SnippetString(insertText);
          return item;
        });
      }
    },
    ""
    // Triggers autocomplete on any character
  );
  context.subscriptions.push(provider);
}
function deactivate() {
  console.log("GyatScript Extension Deactivated! \u274C");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
