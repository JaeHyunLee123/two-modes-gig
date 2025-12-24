export interface Song {
  singer: string;
  name: string;
}

export interface SetList {
  bandName: string;
  songs: Song[];
}
