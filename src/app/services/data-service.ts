import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

    public treeData;

    getFolders(): Observable<any> {
        console.log(`fired`);
        return  this.http.get('../assets/mocks/data.json');
        // let jsonData;
        //     this.http.get<any>('../assets/mocks/data.json').subscribe(
        //         ((data) => {
        //             jsonData = data;
        //             console.log('data is:  ', data);
        //             return jsonData;
        //             // this.getNewData(data);
        //         }),
        //         (error) => {
        //             console.log('oops', error);
        //         });
        //     // return jsonData;
        // }

    }
}
