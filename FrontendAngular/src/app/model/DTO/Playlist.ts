import {User} from "./User";
import {Song} from "./Song";

export class Playlist {
  public id: string;
  public name: string;
  public description: string;
  public owner: User;
  public songs:Song[] ;

}
