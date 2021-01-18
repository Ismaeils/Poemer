import { Injectable } from '@angular/core';
  import { Resolve } from '@angular/router';

  @Injectable()
  export class AudioResolver implements Resolve<Promise<string[]>>{

    audioFiles = [
      "../../assets/keydown2sped.mp3",
    ];

    resolve = (): Promise<string[]> => Promise.all(this.audioFiles.map(this.preloadAudio))

    preloadAudio = (url: string): Promise<string> => {
      const audio = new Audio();
      audio.src = url;
      return new Promise((res, req) => audio.addEventListener('canplaythrough', () => res(url), false))
      // once file is loaded, the promise will be resolved
      // the file will be kept by the browser as cache
    }
  }