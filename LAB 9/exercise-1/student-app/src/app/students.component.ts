import {Component} from '@angular/core';

@Component({
selector: 'students',
template:'<h2>{{title}}</h2>'

})

@Component({
    selector: 'students',
    template:'<h2>{{getTitle}}</h2>'
    
    })

var d = new Date();

export class StudentsComponent
{
    title = "My List of Students";

    getTitle()
    {
        return this.title;
    }

    getCurrentDate()
    {
        return Date;
    }
}



