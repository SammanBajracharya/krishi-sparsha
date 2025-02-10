import { Card } from "@/components/ui/card";

interface LoadingStateProps {
    message?: string
};

const LoadingState = ({ message }: LoadingStateProps) => {
    return (
        <section className="h-[60vh] py-12 px-8">
            <Card className="inset-0 flex flex-col items-center justify-center gap-y-3 bg-white z-20 h-full px-12">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                { message && (
                    <p>{message}</p>
                )}
            </Card>
        </section>
    );
};

export default LoadingState;
