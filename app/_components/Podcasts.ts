import { Podcast } from "lucide-react";

export interface PodcastProps {
    Logo: React.ElementType;
    title: string;
    description: string;
    url: string;
}

export const Podcasts: PodcastProps[] = [
    {
        Logo: Podcast,
        title: "Podcast épisode 1",
        description: "La Sécurité des Données sur les Réseaux Sociaux",
        url: "https://drive.google.com/file/d/1-XqQ4wEvAfWq6nskPnPIQOEqSUoxNY88/view?fbclid=IwY2xjawI4OfJleHRuA2FlbQIxMAABHbyfWwW2pLruJDYGjVReXwXmxcrkQL8oU6v1NlPMJtu6LG4ui7cqbpJTLg_aem_Yl7IFy8_DWPwavsFxXV42g"
    }
];

export default Podcasts;
