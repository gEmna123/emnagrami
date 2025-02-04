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
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
                Quelles sont mes compétences?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
                    <CodingIcon size={42} className="animate-spin" style={{ animationDuration: "10s" }} />
                    <h3 className="text-2xl font-semibold tracking-tight text-center">Programmation</h3>
                    <p className="text-sm text-muted-foreground text-center">C, Java, PHP, Python</p>
                </div>

                <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
                    <SqlIcon size={42} className="animate-spin" style={{ animationDuration: "10s" }} />
                    <h3 className="text-2xl font-semibold tracking-tight text-center">Bases de Données</h3>
                    <p className="text-sm text-muted-foreground text-center">MySQL, NoSQL, PL/SQL</p>
                </div>

                <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
                    <OutilIcon size={42} className="animate-spin" style={{ animationDuration: "10s" }} />
                    <h3 className="text-2xl font-semibold tracking-tight text-center">Outils</h3>
                    <p className="text-sm text-muted-foreground text-center">Git, Docker, Jenkins</p>
                </div>

                <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
                    <OSIcon size={42} className="animate-spin" style={{ animationDuration: "10s" }} />
                    <h3 className="text-2xl font-semibold tracking-tight text-center">Systèmes d&apos;exploitation</h3>
                    <p className="text-sm text-muted-foreground text-center">Windows, Linux, MacOS</p>
                </div>

                <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-md">
                    <WebIcon size={42} className="animate-spin" style={{ animationDuration: "10s" }} />
                    <h3 className="text-2xl font-semibold tracking-tight text-center">Développement Web</h3>
                    <p className="text-sm text-muted-foreground text-center">HTML, CSS, JavaScript, React</p>
                </div>
            </div>
        </Section>
    );
};