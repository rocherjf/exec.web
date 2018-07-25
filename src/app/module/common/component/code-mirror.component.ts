import {Component, ElementRef, EventEmitter, Host, Input, OnInit, Output, ViewChild} from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js';

@Component({
  selector: 'app-code-mirror',
  templateUrl: './code-mirror.component.html',
  styleUrls: ['./code-mirror.component.css']
})
export class CodeMirrorComponent implements OnInit {

  @Input()
  public value: string;
  @Output()
  public valueChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private host: ElementRef
  ) {
  }


  ngOnInit() {

    // Creation de l'element graphique editor
    const editor = CodeMirror((elt) => {
      this.host.nativeElement.appendChild(elt);
    }, {
      lineNumbers: true,
      value: this.value,
      mode: 'javascript', // TODO FROM PARAM

    });

    // Au defocus, Repercution de la valeur sur le parametre entrant
    editor.on('blur', () => this.valueChange.emit(editor.getValue()));

  }

}
