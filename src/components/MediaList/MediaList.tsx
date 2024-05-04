import { Music } from "../Music/Music";

interface Props {
  urls: string[];
}
export function MediaList({ urls }: Props) {
  return urls.map((url) =>
    url.startsWith("https://music") ? (
      <Music url={url} />
    ) : (
      <section>
        <img src={url} referrerPolicy="no-referrer" />
      </section>
    )
  );
}
