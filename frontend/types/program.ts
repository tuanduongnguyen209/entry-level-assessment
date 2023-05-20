export interface Program {
  id: string;
  display_title: string;
  thumbnail_img_url: string;
  short_title: ShortTitle;
}

export type ShortTitle =
  | "vc"
  | "product"
  | "data"
  | "data2"
  | "data3"
  | "scrum"
  | "product2"
  | "growth";
