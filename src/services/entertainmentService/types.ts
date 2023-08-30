export interface ResponseBody {
  postLink:  string;
  subreddit: string;
  title:     string;
  url:       string;
  nsfw:      boolean;
  spoiler:   boolean;
  author:    string;
  ups:       number;
  preview:   string[];
}