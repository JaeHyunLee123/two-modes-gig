export interface Song {
  singer: string;
  name: string;
}

export interface SetList {
  bandName: string;
  members: string[];
  songs: Song[];
}
