export function Music({ url }: { url: string }) {
  const parseNormalLink = url.split("/us")[1];
  return (
    <figure>
      <iframe
        allow="autoplay *; encrypted-media *;"
        frameBorder="0"
        height="150"
        style={{
          width: "100%",
          maxWidth: "660px",
          overflow: "hidden",
          background: "transparent",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src={`https://embed.music.apple.com/us${parseNormalLink}`}
      ></iframe>
    </figure>
  );
}
