'use strict'

const Docma = require('docma')
const Package = require('./package')

Docma.create().build({
  app: {
    title: `${Package.name}: Node.js wrapper for the Speedrun.com API`,
    base: '/',
    entrance: 'api:node-speedrun',
    routing: 'query',
    server: Docma.ServerType.STATIC
  },
  markdown: {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: false,
    smartypants: false,
    tasks: false,
    emoji: true
  },
  jsdoc: {
    module: false
  },
  src: [
    { 'node-speedrun': './lib/**/*.js' }
  ],
  dest: './docs',
  template: {
    options: {
      title: Package.name,
      navItems: [
        {
          iconClass: 'fab fa-lg fa-github',
          label: 'GitHub',
          href: 'https://github.com/SwitchbladeBot/node-speedrun',
          target: '_blank'
        }
      ]
    }
  }
})
