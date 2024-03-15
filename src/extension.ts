import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "Toolbox" is now active!');

  let disposable = vscode.commands.registerCommand('toolbox.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from toolbox!');

    const panel = vscode.window.createWebviewPanel(
      'toolbox',
      '工具箱',
      vscode.ViewColumn.One,
      {
        retainContextWhenHidden: true, // 保证 Webview 所在页面进入后台时不被释放
        enableScripts: true, // 运行 JS 执行
      }
    );
    panel.webview.html = getWebviewContent();

		panel.webview.postMessage({text: 'I\'m VSCode extension'});
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }

function getWebviewContent() {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>工具箱</title>
      </head>
      <body>
        <img src="https://dummyimage.com/400x400/000/fff.jpg&text=testimg" width="300" />
				<p id="test"></p>
        <script>
          window.addEventListener('message', e => {
            document.getElementById('test').innerHTML = e.data.text;
          });
          const vscode = acquireVsCodeApi();
          vscode.postMessage({
            text: "I'm Webview"
          });
        </script>
      </body>
    </html>`;
}
