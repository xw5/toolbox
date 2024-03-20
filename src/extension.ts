import * as vscode from 'vscode';
import path from 'node:path';
// import fs from 'node:fs';

let panel: vscode.WebviewPanel|null = null;
export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "Toolbox" is now active!');

  let disposable = vscode.commands.registerCommand('toolboxs.toolboxs', () => {
    // vscode.window.showInformationMessage('Hello World from toolbox!');

    panel = vscode.window.createWebviewPanel(
      'toolboxs',
      '工具箱',
      vscode.ViewColumn.One,
      {
        retainContextWhenHidden: true, // 保证 Webview 所在页面进入后台时不被释放
        enableScripts: true, // 运行 JS 执行
      }
    );
    panel.webview.html = getWebviewContent(context);

		// panel.webview.postMessage({text: 'I\'m VSCode extension'});
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }

function getWebviewContent(context: vscode.ExtensionContext) {
	// const isProduction = context.extensionMode === vscode.ExtensionMode.Production;
  const jsurl = path.join(context.extensionPath, 'out/web/toolbox/dist', 'assets/index-ak6w5H2c.js');
  const cssurl = path.join(context.extensionPath, 'out/web/toolbox/dist', 'assets/index-h1QVrOTD.css');
	const jsPath = vscode.Uri.file(jsurl);
	const cssPath = vscode.Uri.file(cssurl);

	let srcJsUrl = panel?.webview.asWebviewUri(jsPath).toString();
	let srcCssUrl = panel?.webview.asWebviewUri(cssPath).toString();

  // <p id="test"></p>
  // <script>
  //   window.addEventListener('message', e => {
  //     document.getElementById('test').innerHTML = e.data.text;
  //   });
  //   const vscode = acquireVsCodeApi();
  //   vscode.postMessage({
  //     text: "I'm Webview"
  //   });
  // </script>
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>工具箱</title>
				<script type="module" crossorigin src="${srcJsUrl}"></script>
    		<link rel="stylesheet" crossorigin href="${srcCssUrl}">
      </head>
      <body>
				<div id="app"></div>
      </body>
    </html>`;
}

