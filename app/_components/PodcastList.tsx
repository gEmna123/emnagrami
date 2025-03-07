import React from "react";
import PodcastItem from "./PodcastItem";
import { Podcasts } from "./Podcasts";

const PodcastList: React.FC = () => {
    return (
        <div className="space-y-4">
            {Podcasts.map((podcast, index) => (
                <PodcastItem key={index} {...podcast} />
            ))}
        </div>
    );
};

export default PodcastList;
