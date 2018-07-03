import { Component, OnInit, Input } from '@angular/core';

import * as myMarked from 'marked';

import highlightjs from 'highlight.js';



@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  @Input()
  markdown: string;


  markdownHtml: string;

  constructor() {

  }

  ngOnInit() {
    // Create reference instance
    

    // Set options
    // `highlight` example uses `highlight.js`
    myMarked.setOptions({
      renderer: new myMarked.Renderer(),
      highlight: function(code) {
        console.log(`code : ${code}`);
        console.log(`code : ${highlightjs.highlightAuto(code).value}`);
        return highlightjs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false
    });

    this.markdownHtml = myMarked.parse(this.markdown);
  }

}

