import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { CodingIcon } from "@/components/icons/CodingIcon";
import { SqlIcon } from "@/components/icons/SqlIcon";
import { OutilIcon } from "@/components/icons/OutilIcon";
import { OSIcon } from "@/components/icons/OSIcon";
import { WebIcon } from "@/components/icons/WebIcon";

export const Skills = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"} className="text-lg text-muted-foreground">Mes Compétences</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Quesque je sais faire ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
                    <CodingIcon size={42} className="animate-spin" style={{ animationDuration: "10s" }} />
                    <h3 className="text-2xl font-semibold tracking-tight">Programmation</h3>
                    <p className="text-sm text-muted-foreground text-center">C, Java, PHP, Python</p>
                </div>

                <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
                    <SqlIcon size={42} className="animate-spin" style={{ animationDuration: "10s" }} />
                    <h3 className="text-2xl font-semibold tracking-tight">Bases de Données</h3>
                    <p className="text-sm text-muted-foreground text-center">MySQL, NoSQL, PL/SQL</p>
                </div>

                <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
                    <OutilIcon size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Outils</h3>
                    <p className="text-sm text-muted-foreground text-center">Talend, Power BI, Web Scraping, UML, BPMN</p>
                </div>

                <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
                    <OSIcon size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Systèmes d&apos;exploitation</h3>
                    <p className="text-sm text-muted-foreground text-center">Windows, Linux</p>
                </div>

                <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
                    <WebIcon size={42} />
                    <h3 className="text-2xl font-semibold tracking-tight">Développement Web</h3>
                    <p className="text-sm text-muted-foreground text-center">HTML, CSS, JavaScript</p>
                </div>
            </div>
        </Section>
    );
};