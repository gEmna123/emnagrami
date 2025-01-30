import Link from 'next/link';
import Image from 'next/image';

type WorkProps = {
    image: string;
    title: string;
    role: string;
    date: string;
    url: string;
};

const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <Image src={props.image} alt={props.title} width={40} height={40} className="w-10 h-10 object-contain rounded-md" />
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

export default Work;