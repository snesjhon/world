import { podcastInfo, episodes } from '../data/podcast-episodes';

const siteUrl = 'https://snesjhon.world';

export async function GET() {
  const items = episodes
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
    .map((ep) => {
      const audioUrl = `${siteUrl}/podcast/${ep.filename}`;
      const guid = audioUrl;
      const pubDate = ep.pubDate.toUTCString();
      return `
    <item>
      <title>${escapeXml(ep.title)}</title>
      <description>${escapeXml(ep.description)}</description>
      <enclosure url="${audioUrl}" length="${ep.bytes}" type="audio/x-m4a"/>
      <guid isPermaLink="false">${guid}</guid>
      <pubDate>${pubDate}</pubDate>
      <itunes:duration>${ep.duration}</itunes:duration>
      <itunes:explicit>${podcastInfo.explicit ? 'true' : 'false'}</itunes:explicit>
      <itunes:summary>${escapeXml(ep.description)}</itunes:summary>
    </item>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/modules/content/">
  <channel>
    <title>${escapeXml(podcastInfo.title)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(podcastInfo.description)}</description>
    <language>${podcastInfo.language}</language>
    <itunes:author>${escapeXml(podcastInfo.author)}</itunes:author>
    <itunes:explicit>${podcastInfo.explicit ? 'true' : 'false'}</itunes:explicit>
    <itunes:image href="${podcastInfo.imageUrl}"/>
    <itunes:category text="${escapeXml(podcastInfo.category)}"/>
    ${podcastInfo.email ? `<itunes:owner><itunes:name>${escapeXml(podcastInfo.author)}</itunes:name><itunes:email>${podcastInfo.email}</itunes:email></itunes:owner>` : ''}
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
