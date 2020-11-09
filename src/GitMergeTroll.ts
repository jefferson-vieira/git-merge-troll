import { Position, TextEditorEdit, window } from 'vscode';

import { NumberUtil } from './util/NumberUtil';

export class GitMergeTroll {
  private static headText = '<<<<<<< HEAD\n';
  private static bodyText = '=======\n';
  private static footerText = '>>>>>>>\n';

  public replace() {
    const editor = window.activeTextEditor;

    if (!editor) {
      return;
    }

    const text = editor.document.getText();

    if (!text.length) {
      return;
    }

    const alreadyChanged = !!~text.indexOf(GitMergeTroll.headText);

    if (alreadyChanged) {
      return;
    }

    editor.edit(this.calculateMergeText(text));
  }

  private calculateMergeText(text: string) {
    return (builder: TextEditorEdit) => {
      const lines = text.split('\n');
      const maxLinesBlock = lines.length - 2;

      for (let i = 0; i < maxLinesBlock; i++) {
        const headLine = NumberUtil.getRandomInteger(i, maxLinesBlock);
        const bodyLine = NumberUtil.getRandomInteger(headLine + 1, maxLinesBlock + 1);
        const footerLine = NumberUtil.getRandomInteger(bodyLine + 1, maxLinesBlock + 2);

        builder.insert(new Position(headLine, 0), GitMergeTroll.headText);
        builder.insert(new Position(bodyLine, 0), GitMergeTroll.bodyText);
        builder.insert(new Position(footerLine, 0), GitMergeTroll.footerText);

        const nextBlockLine = NumberUtil.getRandomInteger(footerLine + 1, maxLinesBlock + 2);
        i += nextBlockLine;
      }
    };
  }
}
