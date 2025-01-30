import { Section } from "./Section"; // Assurez-vous que le chemin est correct
import { Card } from "@/components/ui/card";
import { Weight, ALargeSmall, Search, Hospital, Grid3X3, Car, Gamepad, Sprout } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SideProjectProps } from "./SideProject";
import { ContactCard } from "./ContactCard"; // Ensure the path is correct

const SIDE_PROJECTS: SideProjectProps[] = [
    {
        Logo: Search,
        title: "système d'indexation et de recherche de documents textuels",
        description: "technologies : python",
        url: "https://github.com/gEmna123/Mini_Projet_Indexation"
    },
    {
        Logo: Hospital,
        title: "rapport du site de gestion de clinique médicale zl orthodentics",
        description: "technologies : erp, odoo, bpmn",
        url: "https://github.com/gEmna123/Rapport-du-Site-de-gestion-de-clinique-m-dicale-ZL-Orthodentics"
    },
    {
        Logo: Grid3X3,
        title: "jeu de taquin",
        description: "technologies : python",
        url: "https://github.com/gEmna123/jeuTaquin"
    },
    {
        Logo: Car,
        title: "site web de location de voitures",
        description: "technologies : html5, css3, php,mysql, uml",
        url: "https://github.com/gEmna123/projet_web_location_voiture"
    },
    {
        Logo: Weight,
        title: "programme java pour la gestion d’une boutique en ligne",
        description: "technologies : java",
        url: "https://github.com/gEmna123/Projet_Gestion_Commercial"
    },
    {
        Logo: ALargeSmall,
        title: "logiciel ocr",
        description: "technologies : python",
        url: "https://github.com/gEmna123/projetOCR"
    },
    {
        Logo: Gamepad,
        title: "jeu vidéo emna the monster",
        description: "technologies : python",
        url: "https://github.com/codespaces/new/gEmna123/Game_Emna_The_Monster?auto_init=1&resume=1"
    },
    {
        Logo: Sprout,
        title: "conception et développement d'une page web pour une pépinière",
        description: "technologies : PHP, HTML, CSS, JavaScript",
        url: "https://github.com/codespaces/new/gEmna123/Game_Emna_The_Monster?auto_init=1&resume=1"
    }
];

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="p-4 flex flex-col gap-2 w-full">
                    <p className="text-lg text-muted-foreground">Mes projets</p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <Link key={index} href={project.url} className="flex items-center gap-4 p-4 border rounded-lg shadow-md">
                                <project.Logo size={32} className="text-primary" />
                                <div>
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] flex flex-col gap-4">
                <Card className="p-4 flex-1 w-full">
                    <p className="text-lg text-muted-foreground">Mes Stages</p>
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work, index) => (
                            <Work
                                key={index}
                                {...work}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="p-4 flex-1 flex flex-col gap-4">
                    <p className="text-lg text-muted-foreground">Mon Contact</p>
                    <ContactCard
                        name="gemna30@gmail.com"
                        image="https://yt3.ggpht.com/yti/ANjgQV_HV_wVhqEgL-Hsvh1yi2QHmRd-T9D0QVrcbtzN-XNpZyYp=s88-c-k-c0x00ffffff-no-rj-mo"
                        mediumImage="data:image/png;base64,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"
                        description="ma boite mail"  />
                    <ContactCard
                        name="Emna GRAMI"
                        image="https://avatars.githubusercontent.com/u/140692808?v=4"
                        mediumImage="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                        description="mon profil linkedin"  />
                </Card>
            </div>
        </Section>
    );
};

const WORKS: WorkProps[] = [{
    image: "https://idaraty.s3.us-west-000.backblazeb2.com/logos/office-nationale-des-postes.png",
    title: "La poste tunisienne",
    role: "Developpement mobile",
    date: "2023",
    url: "https://www.poste.tn/"
},
{
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQHhRCqfGgFL8A/company-logo_100_100/company-logo_100_100/0/1692099426043/elite_council_consulting_logo?e=1746057600&v=beta&t=unTkb8uUfq9MKvAZQXw8QdYdW3oygrsobzRwyizwQgk",
    title: "Elite Council Consulting",
    role: "Developpement logiciel",
    date: "2023",
    url: "https://www.linkedin.com/company/elite-council-consulting/posts/?feedView=all"
},
{
    image: "https://media.licdn.com/dms/image/v2/D4D0BAQFckDrkR-BacA/company-logo_100_100/company-logo_100_100/0/1666711282616?e=1746057600&v=beta&t=40UZ5xSEZLPuqBC8cVs91CwpAuR-Hu7YlgsCZc5oDDc",
    title: "Bee Coders",
    role: "Business Intelligence",
    date: "2024",
    url: "https://www.beecoders.tn/index.html"
}
];
type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;

};

const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="flex items-center gap-4 p-4 border rounded-lg shadow-md">
            <Image src={props.image} alt={props.title} className="w-10 h-10 object-contain rounded-md" width={40} height={40} />
            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                </div>
                <p className="text-xs text-muted-foreground">{props.role}</p>
            </div>
            <div className="">
                <p className="text-xs text-end text-muted-foreground">{props.date}</p>
            </div>
        </Link>
    );
};