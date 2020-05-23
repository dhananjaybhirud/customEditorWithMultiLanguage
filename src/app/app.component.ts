import {Component, OnChanges, DoCheck} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {_} from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

import defaultLanguage from './../assets/i18n/en.json';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck {
    curLang = 'en';
    color;
    fontSize;
    fontWeight;
    fontStyle;
    textDecoration;


    cTitle;
    cPara;
    cLink;

    styles = {
      title : {
        'fontSize': '22px',
        'color': '#000',
        'fontWeight': 'bold',
        'fontStyle': 'normal',
        'textDecoration': 'none'
      },
      para : {
        'fontSize': '10px',
        'color': '#000',
        'fontWeight': 'bold',
        'fontStyle': 'italic',
        'textDecoration': 'underline'
      },
      link : {
        'fontSize': '10px',
        'color': '#000',
        'fontWeight': 'bold',
        'fontStyle': 'italic',
        'textDecoration': 'underline'
      }
    }


    lines = [
      {
        element: "",
        is_checked: false,
        style: {},
      }
    ]


    constructor(private translate: TranslateService) {
        translate.setTranslation('en', defaultLanguage);
        translate.setDefaultLang('en');

        this.lines.map((elem: any) => {
          if(elem.is_checked){
            // change style
          }
        })
    }

    useLanguage(language: string) {
        this.translate.use(language);
        this.curLang = language;
    }

    ngDoCheck() {
      this.getData();
      console.log(this.styles)
    }

    getFontWeight(cond){
        if(cond){
          return '700';
        } else{
          return '400';
        }
    }

    getFontStyle(cond){
      if(cond){
        return 'italic';
      } else{
        return 'normal';
      }
  }

  getFontDecoration(cond){
    if(cond){
      return 'underline';
    } else{
      return 'none';
    }
}

    getData(){

        this.styles.title.color = this.color;
        this.styles.title.fontSize = this.fontSize;
        this.styles.title.fontWeight = this.getFontWeight(this.fontWeight);
        this.styles.title.fontStyle = this.getFontStyle(this.fontStyle);
        this.styles.title.textDecoration = this.getFontDecoration(this.textDecoration);
    }

    applyStyle(title: string): any{
      return this.styles.title;
    }
}
