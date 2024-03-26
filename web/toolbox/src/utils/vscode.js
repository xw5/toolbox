let vscode = null;

export const getVsCode = () => {
  if (!vscode) {
    try {
      // @ts-ignore
      vscode = acquireVsCodeApi();
    }
    catch(err){}
  }
  return vscode;
};