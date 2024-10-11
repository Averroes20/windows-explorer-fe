import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = 'http://localhost:3000';

//API URL
var httpLink = {
  getAllDesktop: apiUrl + "/desktop/all",
  getDesktopByParentId: apiUrl + "/desktop/parentid",
  deleteDesktopById: apiUrl + "/desktop/delete",
  saveDesktopFolder: apiUrl + "/desktop/folder",
  uploadFileDesktop: apiUrl + "/desktop/upload",
  updateFolderDesktop: apiUrl + "/desktop/upload",
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllDesktop(): Observable<any> {
    return this.webApiService.get(httpLink.getAllDesktop)
  }

  public getDesktopByParentId(parentId: number): Observable<any> {
    return this.webApiService.get(`${httpLink.getDesktopByParentId}/${parentId}`);
  }   

  public deleteDesktopById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteDesktopById + '?id=' + model, "")
  }

  public saveDesktopFolder(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveDesktopFolder, model);
  }

  public uploadFileDesktop(file: File, parentId?: number): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file); // Menambahkan file ke FormData
    if (parentId) {
      formData.append('parent_id', parentId.toString()); // Menambahkan parentId jika ada
    }
    
    return this.webApiService.upload(httpLink.uploadFileDesktop, formData);
  }

  public updateDesktopFolder(id: number, model: any): Observable<any> {
    return this.webApiService.put(`${httpLink.updateFolderDesktop}/${id}`, model);
  }
}
