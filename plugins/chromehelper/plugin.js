/**
 * CKEditor plugin: Chrome helper
 * - Fixes the triple click bug in chrome
 *
 */
(function() {
  	"use strict";

  	var PLUGIN_NAME = "chromehelper";

  /**
   * Initializes the plugin
   */
	CKEDITOR.plugins.add(PLUGIN_NAME, {
		onLoad: function() {
			console.log('onLoad', PLUGIN_NAME)
		},
		init: function(editor) {
			console.log('onInit', PLUGIN_NAME)
			//onDomReady handler
			editor.on("contentDom", function(evt) {
				init(editor);
			});
		}
  });

	function init(editor) {
		console.log('ready', PLUGIN_NAME)
	);

	editor.on("mouseUp", handelMouseUp);
	
	handleMouseup(event) {
		console.log('handleMouseUp', PLUGIN_NAME)
		if (event.detail === 3) {
		  const selection = this.editor.getSelection()
		  let range = selection.getRanges()[0]
		  let actualStartContainer = range.startContainer
	  
		  // Finds the highest parent untill the startContainer
		  while (!actualStartContainer.getParent().equals(this.editor.element))
			  actualStartContainer = actualStartContainer.getParent()
	  
		  // Select the ranges and update the selection with just the startContainer
		  range.selectNodeContents(actualStartContainer)
		  selection.selectRanges([range])
		}
	}

	function ChromeHelper(editor, cfg) {
		this.editor = editor;
		this.init();
	}
})();
