import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log("GyatScript Extension Activated! 🚀");

  let provider = vscode.languages.registerCompletionItemProvider(
    "gyat", // Match language ID
    {
      provideCompletionItems(document, position) {
        console.log("Providing completions...");

        const keywords = [
          { label: "ts", detail: "Declare or assign variables", insertText: "ts " },
          { label: "ong", detail: "Print output", insertText: "ong(\"${1:Hello World}\");" },
          { label: "icl", detail: "Conditional statement", insertText: "icl (${1:condition}) { $2 }" },
          { label: "gng", detail: "Loop statement", insertText: "gng (${1:condition}) { $2 }" },
          { label: "spit", detail: "Get user input", insertText: "ts ${1:var} = spit(\"${2:Enter value:}\");" },
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
    "" // Triggers autocomplete on any character
  );

  context.subscriptions.push(provider);
}

export function deactivate() {
  console.log("GyatScript Extension Deactivated! ❌");
}
