import {Component, OnChanges, DoCheck} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

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
    };


    lines = [
      {
        element: "This is a header",
        is_checked: false,
        style: {
          'fontSize': '22px',
          'color': '#000',
          'fontWeight': 'bold',
          'fontStyle': 'normal',
          'textDecoration': 'none'
        },
      },
      {
        element: "This is a paragraph, This is a paragraph, This is a paragraph, This is a paragraph, ",
        is_checked: false,
        style: {
          'fontSize': '10px',
          'color': '#000',
          'fontWeight': 'bold',
          'fontStyle': 'italic',
          'textDecoration': 'underline'
        },
      },
      {
        element: "This is a link",
        is_checked: false,
        style: {
          'fontSize': '10px',
          'color': '#000',
          'fontWeight': 'bold',
          'fontStyle': 'italic',
          'textDecoration': 'underline'
        },
      }

    ];


    constructor(private translate: TranslateService) {
        translate.setTranslation('en', defaultLanguage);
        translate.setDefaultLang('en');
    }

    useLanguage(language: string) {
        this.translate.use(language);
        this.curLang = language;
    }

    ngDoCheck() {
     // this.getData();
      console.log(this.lines);
    }

    getFontWeight(cond){
        if (cond){
          return '700';
        } else{
          return '400';
        }
    }

    getFontStyle(cond){
      if (cond){
        return 'italic';
      } else{
        return 'normal';
      }
  }

    getFontDecoration(cond){
      if (cond){
        return 'underline';
      } else{
        return 'none';
      }
  }

    // getData(){
    //       this.styles.title.color = this.color;
    //       this.styles.para.color = this.color;
    //       this.styles.link.color = this.color;
    //       this.styles.title.fontSize = this.fontSize;
    //       this.styles.para.fontSize = this.fontSize;
    //       this.styles.link.fontSize = this.fontSize;
    //       this.styles.title.fontWeight = this.getFontWeight(this.fontWeight);
    //       this.styles.para.fontWeight = this.getFontWeight(this.fontWeight);
    //       this.styles.link.fontWeight = this.getFontWeight(this.fontWeight);
    //       this.styles.title.fontStyle = this.getFontStyle(this.fontStyle);
    //       this.styles.para.fontStyle = this.getFontStyle(this.fontStyle);
    //       this.styles.link.fontStyle = this.getFontStyle(this.fontStyle);
    //       this.styles.title.textDecoration = this.getFontDecoration(this.textDecoration);
    //       this.styles.para.textDecoration = this.getFontDecoration(this.textDecoration);
    //       this.styles.link.textDecoration = this.getFontDecoration(this.textDecoration);
    // }

    setStyle(value, type){
      console.log(value);

        this.lines.map((elem: any) => {
          if (elem.is_checked){
            if(type === 'color'){
              elem.style.color = value;
            }else  if(type === 'fontSize'){
              elem.style.fontSize = value;
            }else  if(type === 'fontWeight'){
              elem.style.fontWeight = this.getFontWeight(value);
            }else  if(type === 'fontStyle'){
              elem.style.fontStyle = this.getFontStyle(value);
            }else if(type === 'textDecoration'){
              elem.style.textDecoration = this.getFontDecoration(value);
            }
          }
        });

    }

}
