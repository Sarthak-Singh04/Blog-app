export interface SiteConfig {
    sitename: string;
    description: string;
    currentlyAt: string;
    socialLinks: {
      twitter: string;
      linkedin: string;
      github: string;
      instagram: string;
    };
  }
  
  const siteconfig: SiteConfig = {
    sitename: "Dharmic Ecology",
    description:
      "Dharmic Ecology is a platform devoted to exploring the intersection of Hindu ethics, spirituality, and environmental conservation. Discover how ancient principles guide our responsibility to protect and nurture the Earth.",
    currentlyAt: "Mathura",
    socialLinks: {
      twitter: "",
      linkedin: "",
      github: "",
      instagram: ""
    }
  };
  
  export default siteconfig;
  