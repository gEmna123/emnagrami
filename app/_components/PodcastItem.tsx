import React from "react";
import { PodcastProps } from "./Podcasts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PodcastItem: React.FC<PodcastProps> = ({ Logo, title, description, url }) => {
    return (
        
        <Card className="p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mx-auto w-full md:w-3/4 lg:w-1/2">
            <Logo className="w-10 h-10 text-blue-500" />
            <CardContent>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
                <Button asChild variant="link">
                    <a href={url} target="_blank" rel="noopener noreferrer">Écouter</a>
                </Button>
            </CardContent>
        </Card>
    );
};

export default PodcastItem;
