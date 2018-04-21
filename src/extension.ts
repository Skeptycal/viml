/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    /**
     * This simple completion item provider does the following:
	 * - registers for vim files (`'viml'`),
     * - returns the 'Hello Code' and a snippet-based completion item.
     */
	vscode.languages.registerCompletionItemProvider('viml', {
        provideCompletionItems(
            document: vscode.TextDocument,
            position: vscode.Position,
            token: vscode.CancellationToken,
            context: vscode.CompletionContext
        ) {
			return [
				new vscode.CompletionItem('Hello Code!'),
				createSnippetItem(),
			];
		}
	});

	function createSnippetItem(): vscode.CompletionItem {

        /**
         * Read more here:
		 * https://code.visualstudio.com/docs/extensionAPI/vscode-api#CompletionItem
		 * https://code.visualstudio.com/docs/extensionAPI/vscode-api#SnippetString
		 * For SnippetString syntax look here:
         * https://code.visualstudio.com/docs/editor/userdefinedsnippets#_creating-your-own-snippets
         */
		let item = new vscode.CompletionItem('Good part of the day', vscode.CompletionItemKind.Snippet);
		item.insertText = new vscode.SnippetString("Good ${1|morning,afternoon,evening|}. It is ${1}, right?");
		item.documentation = new vscode.MarkdownString("Inserts a snippet that lets you select the _appropriate_ part of the day for your greeting.");

		return item;
	}
}
