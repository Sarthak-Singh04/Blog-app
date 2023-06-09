import { Post } from "./types/collection";

const blogPosts:Post[]= [
    {
      id: 1,
      title: "Exploring the Beauty of Nature",
      description: "Discover the wonders of nature and its profound impact on our lives.",
      category: "Nature",
      author: "John Doe",
      slug: "exploring-beauty-of-nature",
      image: "https://example.com/nature-image.jpg", // Replace with actual image URL
      authorInfo: {
        name: "John Doe",
        bio: "Passionate nature enthusiast and writer",
        website: "https://johndoe.com"
      },
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur varius nisl, a faucibus felis ultricies ut.</p>",
      dateCreated: "2023-06-01",
      dateUpdated: "2023-06-05"
    },
    {
      id: 2,
      title: "The Spiritual Teachings of Hinduism",
      description: "Explore the profound spiritual teachings of Hinduism and their relevance in today's world.",
      category: "Spirituality",
      author: "Jane Smith",
      slug: "spiritual-teachings-of-hinduism",
      image: "https://example.com/hinduism-image.jpg", // Replace with actual image URL
      authorInfo: {
        name: "Jane Smith",
        bio: "Lifelong learner and spiritual seeker",
        website: "https://janesmith.com"
      },
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur varius nisl, a faucibus felis ultricies ut.</p>",
      dateCreated: "2023-05-20",
      dateUpdated: "2023-06-02"
    },
    {
        id: 3,
        title: "The Healing Power of Meditation",
        description: "Discover the transformative effects of meditation on the mind, body, and soul.",
        category: "Wellness",
        author: "Sarah Johnson",
        slug: "healing-power-of-meditation",
        image: "https://example.com/meditation-image.jpg", // Replace with actual image URL
        authorInfo: {
          name: "Sarah Johnson",
          bio: "Certified meditation instructor and wellness advocate",
          website: "https://sarahjohnson.com"
        },
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur varius nisl, a faucibus felis ultricies ut.</p>",
        dateCreated: "2023-06-07",
        dateUpdated: "2023-06-09"
      },
      {
        id: 4,
        title: "Exploring Ancient Temples of India",
        description: "Embark on a virtual journey to the majestic ancient temples of India and unravel their fascinating history.",
        category: "Travel",
        author: "Michael Thompson",
        slug: "exploring-ancient-temples-india",
        image: "https://example.com/temples-image.jpg", // Replace with actual image URL
        authorInfo: {
          name: "Michael Thompson",
          bio: "Travel enthusiast and history buff",
          website: "https://michaelthompson.com"
        },
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur varius nisl, a faucibus felis ultricies ut.</p>",
        dateCreated: "2023-05-15",
        dateUpdated: "2023-06-01"
      },
      {
        id: 5,
        title: "Embracing Yoga for Mind-Body Wellness",
        description: "Learn about the holistic benefits of yoga and how it promotes overall well-being.",
        category: "Health",
        author: "Emily Davis",
        slug: "embracing-yoga-mind-body-wellness",
        image: "https://example.com/yoga-image.jpg", // Replace with actual image URL
        authorInfo: {
          name: "Emily Davis",
          bio: "Certified yoga instructor and wellness coach",
          website: "https://emilydavis.com"
        },
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur varius nisl, a faucibus felis ultricies ut.</p>",
        dateCreated: "2023-06-03",
        dateUpdated: "2023-06-07"
      },
      {
        id: 6,
        title: "The Mythology of Hindu Gods and Goddesses",
        description: "Delve into the captivating tales and symbolism behind the Hindu deities and their significance in Hindu mythology.",
        category: "Mythology",
        author: "Robert Anderson",
        slug: "mythology-hindu-gods-goddesses",
        image: "https://example.com/mythology-image.jpg", // Replace with actual image URL
        authorInfo: {
          name: "Robert Anderson",
          bio: "Enthusiastic storyteller and mythology enthusiast",
          website: "https://robertanderson.com"
        },
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur varius nisl, a faucibus felis ultricies ut.</p>",
        dateCreated: "2023-05-28",
        dateUpdated: "2023-06-04"
      },
      {
        id: 7,
        title: "Sustainable Living: Nurturing the Earth and Ourselves",
        description: "Explore eco-friendly practices and lifestyle choices that contribute to a more sustainable and balanced world.",
        category: "Environment",
        author: "Sophia Martinez",
        slug: "sustainable-living-nurturing-earth",
        image: "https://example.com/sustainable-living-image.jpg", // Replace with actual image URL
        authorInfo: {
          name: "Sophia Martinez",
          bio: "Environmental activist and advocate for sustainable living",
          website: "https://sophiamartinez.com"
        },
        body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur varius nisl, a faucibus felis ultricies ut.</p>",
        dateCreated: "2023-06-05",
        dateUpdated: "2023-06-09"
      }
  ];
  
  export default blogPosts;
  