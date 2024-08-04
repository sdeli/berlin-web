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

export interface LoginDto {
  username: string;
  password: string;
}

export interface TokensDto {
  access_token: string;
  refresh_token: string;
}

export interface AccessTokenDto {
  access_token: string;
  refresh_token: string;
}

interface UserDataDto {
  username: string;
  id: string;
}

export interface LoggedInUserDto {
  user: UserDataDto;
  tokens: TokensDto;
}