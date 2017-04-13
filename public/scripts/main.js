(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    // For tracking purposes
    console.log('document loaded');

    //  Set up constants
    const SCRIPT_BASE_ROUTE = 'scripts/'
    const SCRIPT_FILE_TYPE = '.js'

    function setupHandlers() {
      let nodeList = document.querySelector('.chapters.li').childNodes;
      nodeList.map(function(node){
        node.addEventListener('click', addScript(e));
      })
    }

    /**
    * Create and insert script in head tag
    * @param {string} event html click event
    * @return
    */
    function addScript(event) {
      let scriptTag = document.createElement('script');
      scriptTag.src = SCRIPT_BASE_ROUTE + event.target.dataset.script + SCRIPT_FILE_TYPE;
      document.body.appendChild(scriptTag);
    }

  });
})();
