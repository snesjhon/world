import { Music } from "./Music";
import "./MediaList.css";

interface Props {
  urls: string[];
}
export function MediaList({ urls }: Props) {
  return (
    <div className="masonry-grid">
      {urls.map((url, index) =>
        url.startsWith("https://music") ? (
          <div key={index} className="masonry-item">
            <Music url={url} />
          </div>
        ) : (
          <div key={index} className="masonry-item">
            <img src={url} referrerPolicy="no-referrer" />
          </div>
        )
      )}
    </div>
  );
}
