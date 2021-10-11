import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiKey, baseYoutubeApi, YoutubeApi } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class SharedHttpService {

  constructor(private http: HttpClient) { }

  getVideos(search: string, pageToken?: string): Observable<any> {
    const headers  = {
      Accept: 'application/json',
    };

    const params: any = {
      type: 'video',
      part: 'snippet',
      key: apiKey,
      q: search,
      maxResults: 5
    };

    if (pageToken) {
      params.pageToken = pageToken;
    }
    return this.http.get(`${baseYoutubeApi}${YoutubeApi.search}`, { headers, params });
  }

  getComments(videoId: string): Observable<any> {
    const params = {
      textFormat: 'plainText',
      part: 'snippet',
      key: apiKey,
      maxResults: 5,
      videoId,
    };
    return this.http.get(`${baseYoutubeApi}${YoutubeApi.getComments}`, { params });
  }
}
