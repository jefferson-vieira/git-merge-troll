import * as vscode from 'vscode';

import { GitMergeTroll } from './GitMergeTroll';
import { GitMergeTrollController } from './GitMergeTrollController';

export function activate(context: vscode.ExtensionContext) {
  const gitMergeTroll = new GitMergeTroll();

  const gitMergeTrollController = new GitMergeTrollController(gitMergeTroll);

  gitMergeTrollController.activate();
}

export function deactivate() {}
