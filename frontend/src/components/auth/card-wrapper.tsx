import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { BackButton } from "@/components/auth/back-button";
import { Separator } from "@/components/ui/separator";

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
            <CardHeader className="pt-6 pb-4">
                <h3>
                    { headerLabel }
                </h3>
            </CardHeader>
            <Separator />
            <CardContent className="pt-4">
                { children }
            </CardContent>
            <Separator />
            <CardFooter>
                <BackButton
                    label={footerLabel}
                    href={footerHref}
                />
            </CardFooter>
        </Card>
    );
}
