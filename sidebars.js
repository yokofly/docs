/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  docSidebar:[
    /*{'Internal Docs':['usecases','internal-tptime']},
    {type:'category',
     label:'Beta User Guide',
     link: {
      type: 'doc',
      id:'index'
     },collapsed: false,items:[
       */
       'index',
       'usecases',
       'getting-started',
       {
        type:'category',
        label:'Concepts',
        //collapsed: false,
        link: {
          type: 'generated-index',
        },
        items:['working-with-streams','eventtime','stream-query','history','view','source','destination']
       },
       'ingestion',
       {
        type:'category',
        label:'Query Guide',
        //collapsed: false,
        link: {
          type: 'doc',
          id:'query-guide'
        },
        items:['datatypes','query-syntax','functions',]
       },
       'faq',
       /*
      ],
    }*/
  ]
};

module.exports = sidebars;
