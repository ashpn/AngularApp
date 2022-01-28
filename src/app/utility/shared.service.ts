import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SharedService {
    readonly APIUrl = 'http://localhost:56309/api'

    constructor(private http: HttpClient) { }

    getRestList(): Observable<any[]> {
        return this.http.get<any>(this.APIUrl + '/rest');
    }
}