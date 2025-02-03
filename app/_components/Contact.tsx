import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <Section className="flex flex-col items-start gap-4">
            <Badge variant={"outline"} className="text-lg text-muted-foreground">Me contacter</Badge>
            <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                Vous pouvez me joindre via
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* Adresse */}
                <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-primary" />
                    <div>
                        <h3 className="text-xl font-semibold">Adresse</h3>
                        <p className="text-sm text-muted-foreground">Paris 14</p>
                    </div>
                </div>

                {/* Téléphone */}
                <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md">
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6 text-primary" />
                    <div>
                        <h3 className="text-xl font-semibold">Téléphone</h3>
                        <p className="text-sm text-muted-foreground">+33 7 75 84 05 36</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md">

                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 text-primary" />
                    <a href="mailto:gemna30@gmail.com" className="text-sm text-muted-foreground">
                        <div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            gemna30@gmail.com


                        </div>
                    </a>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-4 p-4 border rounded-lg shadow-md">
                    <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 text-primary" />
                    <div>
                    <a href="https://www.linkedin.com/in/emna-grami-454a182b2/" className="text-sm text-muted-foreground">
                        <h3 className="text-xl font-semibold">LinkedIn</h3>
                        linkedin.com/in/emna-grami</a>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
