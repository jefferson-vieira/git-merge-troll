import { window } from "vscode";
import { GitMergeTroll } from "./GitMergeTroll";

export class GitMergeTrollController {
  private evilGitMerge: GitMergeTroll;

  constructor(evilGitMerge: GitMergeTroll) {
    this.evilGitMerge = evilGitMerge;
  }

  public activate() {
    window.onDidChangeActiveTextEditor(this._onChange, this);
  }

  private _onChange() {
    this.evilGitMerge.replace();
  }
}
