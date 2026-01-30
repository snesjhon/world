import "./MediaList.css";

interface TextPostProps {
  type: "text";
  title?: string;
  content: string;
}

interface LinkPostProps {
  type: "link";
  url: string;
  title?: string;
  description?: string;
}

interface QuotePostProps {
  type: "quote";
  quote: string;
  source?: string;
}

type PostProps = TextPostProps | LinkPostProps | QuotePostProps;

export function TumblrPost(props: PostProps) {
  if (props.type === "text") {
    return (
      <div className="masonry-item tumblr-text">
        {props.title && <h3>{props.title}</h3>}
        <p>{props.content}</p>
      </div>
    );
  }

  if (props.type === "link") {
    return (
      <a href={props.url} target="_blank" rel="noopener noreferrer" className="masonry-item tumblr-link">
        {props.title && <h4>{props.title}</h4>}
        {props.description && <p>{props.description}</p>}
        <small>{new URL(props.url).hostname}</small>
      </a>
    );
  }

  if (props.type === "quote") {
    return (
      <div className="masonry-item tumblr-quote">
        <blockquote>"{props.quote}"</blockquote>
        {props.source && <cite>— {props.source}</cite>}
      </div>
    );
  }

  return null;
}
