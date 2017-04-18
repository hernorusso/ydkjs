(function() {
  'use strict';

  //  Set up constants
  const SCRIPT_CHAPTERS_BASE_ROUTE = 'scripts/chapters/'
  const SCRIPT_FILE_TYPE = '.js'

  /********************************************
  * On Load attach listener to list elements *
  * Also, log the loaded event               *
  ********************************************/
  document.addEventListener('DOMContentLoaded', function() {
    // For tracking purposes
    console.log('document loaded');
    // set global to expose run method over loaded scripts
    window.chapterScript = {};
    setupHandlers();
  });

  /**
   * Setup an event handler for each chapter (li) item
   * @return {undefined}
   */
  function setupHandlers() {
    /** @type {object} nodeList Array-like list of dom elements] */
    let nodeList = document.querySelectorAll('#chapters ul li');

    for (let i = 0; i < nodeList.length; i++) {
      let node = nodeList.item(i)
      node.addEventListener('click', addScript);

      // log using ecma6 template literals
      console.log(`handler for ${node.dataset.script} set up!`);
    }
  }

  /**
  * Create and insert script in head tag
  * @param {string} event html click event
  * @return
  */
  function addScript(event) {
    let scriptTagName = event.target.dataset.script

    /*************************************
     * Check if script is already loaded *
     * if script exist not load again    *
     *************************************/
    let dataset = `script[data-script="${scriptTagName}"]`;
    if (document.querySelector(dataset)) {
      console.log(`script ${scriptTagName} is already loaded!`);
      return;
    }

    // Add script element to dom
    let scriptTag = document.createElement('script');
    scriptTag.src = SCRIPT_CHAPTERS_BASE_ROUTE + scriptTagName + SCRIPT_FILE_TYPE;
    scriptTag.dataset.script = scriptTagName;
    document.body.appendChild(scriptTag);
  }

})();
