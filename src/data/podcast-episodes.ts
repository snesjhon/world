export interface Episode {
  title: string;
  description: string;
  filename: string; // e.g. "episode-1.m4a" — place file in public/podcast/
  pubDate: Date;
  duration: string; // e.g. "12:34"
  bytes: number; // file size in bytes
}

export const podcastInfo = {
  title: '@snesjhon',
  description: 'Personal podcast',
  author: 'snesjhon',
  email: 'snesjhon@gmail.com', // optional: your email for iTunes
  imageUrl: 'https://snesjhon.world/myavatar.jpg', // replace with a 1400x1400 cover image
  category: 'Personal Journals', // Apple Podcasts category
  language: 'en',
  explicit: false,
};

export const episodes: Episode[] = [
  // Add episodes here as you add m4a files to public/podcast/
  {
    title: 'Architectural Trade-offs in Distributed_Systems',
    description:
      'The provided text serves as an architectural guide to the CAP Theorem, a fundamental framework for understanding the trade-offs between Consistency, Availability, and Partition Tolerance in distributed systems. It emphasizes that because network failures are inevitable, engineers must primarily choose between maintaining data accuracy or ensuring system uptime during a partition. The material uses a post office analogy and a consistency spectrum to categorize data types, such as prioritizing CP (Consistency) for financial ledgers and AP (Availability) for social media feeds. Furthermore, the source distinguishes between CAP and ACID consistency while providing a decision framework for selecting specific database configurations. Ultimately, the text encourages a component-specific approach to design, where different parts of a system utilize different guarantees based on the acceptable failure mode for that specific data.',
    filename: 'Architectural_Trade-offs_in_Distributed_Systems.m4a',
    pubDate: new Date('2026-03-07'),
    duration: '23:01',
    bytes: 44449253,
  },
];
