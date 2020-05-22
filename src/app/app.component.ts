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



    // fromCode = _('demo.text-in-code');

    constructor(private translate: TranslateService) {
        translate.setTranslation('en', defaultLanguage);
        translate.setDefaultLang('en');
    }

    useLanguage(language: string) {
        this.translate.use(language);
        this.curLang = language;
    }

    ngDoCheck() {
      this.getData();
    }

    getData(){

        this.styles.title.color = this.color;
    }
}
