import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { BackButton } from "@/components/auth/back-button";

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    footerLabel: string;
    footerHref: string;
};

export const CardWrapper: React.FC<CardWrapperProps> = ({
    children,
    headerLabel,
    footerLabel,
    footerHref,
}) => {
    return (
        <Card className="max-w-96 mx-auto">
            <CardHeader>
                <h3>
                    { headerLabel }
                </h3>
            </CardHeader>
            <CardContent>
                { children }
            </CardContent>
            <CardFooter>
                <BackButton
                    label={footerLabel}
                    href={footerHref}
                />
            </CardFooter>
        </Card>
    );
}
