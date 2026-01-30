import { MediaList } from "./MediaList";
import { TumblrPost } from "./TumblrPost";
import "./MediaList.css";

interface FeedItem {
  type: "image" | "music" | "text" | "link" | "quote";
  url?: string;
  title?: string;
  content?: string;
  description?: string;
  quote?: string;
  source?: string;
}

interface Props {
  items: FeedItem[];
}

export function MasonryFeed({ items }: Props) {
  return (
    <div className="masonry-grid">
      {items.map((item, index) => {
        if (item.type === "image") {
          return (
            <div key={index} className="masonry-item">
              <img src={item.url!} referrerPolicy="no-referrer" />
            </div>
          );
        }

        if (item.type === "music" && item.url) {
          return (
            <div key={index} className="masonry-item">
              <iframe
                src={item.url}
                width="100%"
                height="150"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          );
        }

        if (item.type === "text") {
          return <TumblrPost key={index} type="text" title={item.title} content={item.content!} />;
        }

        if (item.type === "link") {
          return (
            <TumblrPost
              key={index}
              type="link"
              url={item.url!}
              title={item.title}
              description={item.description}
            />
          );
        }

        if (item.type === "quote") {
          return <TumblrPost key={index} type="quote" quote={item.quote!} source={item.source} />;
        }

        return null;
      })}
    </div>
  );
}
