import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Project } from "../classes/project";

 @Injectable({
    providedIn: 'root'
 })

 export class _ProjectService {

    private myAppUrl: string
    private myApiUrl: string

    constructor(private http:HttpClient){
        this.myAppUrl = environment.endpoint;
        this.myApiUrl = 'api/project/';
    }

    getListProjects(): Observable<Project[]>{
        return this.http.get<Project[]>(`${this.myAppUrl}${this.myApiUrl}`)
    }

    getProject(id: number):Observable<Project>{
        return this.http.get<Project>(`${this.myAppUrl}${this.myApiUrl}${id}`)
    }

    saveProject(project: Project): Observable<void>{
        return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, project)
    }

    updateProject(id:number, project:Project): Observable<void>{
        return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`,project)
    }

    deleteProject(id:number): Observable<void>{
        return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`)
    }

 }