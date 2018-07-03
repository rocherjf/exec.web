import { Component, OnInit, Input } from '@angular/core';

import * as marked from 'marked';
import { Options } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

  @Input()
  markdown: string;

  markdownHtml: string;

  private option : marked.MarkedOptions;

  constructor() { }

  ngOnInit() {


    //this.option.gfm =true;

    marked.setOptions({
      gfm: true,
      tables: true,
  });

    this.markdownHtml = marked.parse(this.markdown);
  }

}

