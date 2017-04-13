(function() {
  'use strict';

  //  Set up constants
  const SCRIPT_CHAPTERS_BASE_ROUTE = 'scripts/chapters/'
  const SCRIPT_FILE_TYPE = '.js'

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
      console.log(`handler ${node.dataset.id} set up!`);
    }
  }

  /**
  * Create and insert script in head tag
  * @param {string} event html click event
  * @return
  */
  function addScript(event) {
    let scriptTag = document.createElement('script');
    scriptTag.src = SCRIPT_CHAPTERS_BASE_ROUTE + event.target.dataset.script + SCRIPT_FILE_TYPE;
    document.body.appendChild(scriptTag);
  }

  /********************************************
   * On Load attach listener to list elements *
   * Also, log the loaded event               *
   ********************************************/
  document.addEventListener('DOMContentLoaded', function() {
    // For tracking purposes
    console.log('document loaded');
    setupHandlers();
  });

})();
