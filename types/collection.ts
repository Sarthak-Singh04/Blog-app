export interface Post {
    id: number;
    title: string;
    description: string;
    category: string;
    author: string;
    slug: string;
    image: string;
    authorInfo: {
      name: string;
      bio: string;
      website: string;
    };
    body: string;
    dateCreated: string;
    dateUpdated: string;
  }
  