export interface WordMeta {
  uploadError?: string;
}

export enum WordSources {
  youtube = 'youtube',
  facebookReels = 'facebookReels',
  facebookVideos = 'facebookVideos',
  tiktok = 'tiktok',
  dailymotion = 'dailymotion',
}


export interface WordDTO {
  ID: string;

  source: WordSources;

  originalUrl: string;

  originalId: string | null;

  description: string | null;

  title: string | null;

  discoveredAt: Date;

  meta: WordMeta;
}