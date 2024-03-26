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

    // vs code接收来自webview的消息，根据command作不同操作
    panel.webview.onDidReceiveMessage(
      message => {
        switch (message.command) {
          // 更改插件配置
          case 'updateConfig':
            vscode.workspace.getConfiguration().update(`toolboxs.${message.key}`, message.value);
            return;
          // 获取插件配置
          case 'getConfig':
            const value = vscode.workspace.getConfiguration().get(`toolboxs.${message.key}`);
            panel.webview.postMessage({
              command: 'sendConfig',
              key: message.key,
              value
            });
        }
      },
      undefined,
      context.subscriptions
    );

    const isOutOpen = vscode.workspace.getConfiguration().get('toolboxs.isOutOpen');
		panel.webview.postMessage({
      command: 'sendConfig',
      key: 'isOutOpen',
      value: isOutOpen,
    });
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }

function getWebviewContent(context: vscode.ExtensionContext) {
	// const isProduction = context.extensionMode === vscode.ExtensionMode.Production;
  const jsurl = path.join(context.extensionPath, 'out/web/toolbox/dist', 'assets/index-BsujfDwT.js');
  const cssurl = path.join(context.extensionPath, 'out/web/toolbox/dist', 'assets/index-ztjlHLXC.css');
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

