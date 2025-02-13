import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Analytics from "@/components/dashboard/Analytics"
import Todo from "@/components/dashboard/Todo"
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";

import LoadingState from "@/components/loading-state";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { BadgePlus, ChartSpline, ListTodo, LucideIcon, UserPen } from "lucide-react";
import { cn } from "@/lib/utils";

import EditProfile from "@/components/dashboard/EditProfile";
import AddProduct from "@/components/dashboard/AddProduct";

type DashboardState = "edit" | "add_product" | "analytics" | "todos";

interface DashboardSidebarProps {
    state: DashboardState;
    Icon: LucideIcon;
    label: string;
}

const DashboardSidebar: Array<DashboardSidebarProps> = [
    {
        state: "edit",
        Icon: UserPen,
        label: "Edit Profile"
    },
    {
        state: "add_product",
        Icon: BadgePlus,
        label: "Add Product"
    },
    {
        state: "todos",
        Icon: ListTodo,
        label: "Todos"
    },
    {
        state: "analytics",
        Icon: ChartSpline,
        label: "Analytics"
    },
];

function Dashboard() {
    const [ currentState, setCurrentState ] = useState<DashboardState>("edit");
    const { userData, fetchUserData, isLoggedIn, logout } = useAuth();

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleSidebarClick = (state: DashboardState) => {
        setCurrentState(state);
    }

    if (!isLoggedIn) {
        logout();
        return null;
    }

    if (!userData)
        return (
            <LoadingState message="Loading your dashboard..." />
        );

    return (
        <section className="px-8 py-12 shadow-lg flex flex-col gap-6">
            <Card>
                <CardHeader className="space-y-5 pt-10">
                    <h1>Welcome, <span className="underline text-4xl font-semibold text-primary">{userData.username}</span></h1>
                    <div className="flex flex-items gap-x-2">
                        <a href={`/profile/${userData.id}`}>
                            <Button variant="primary" size="lg">View Profile</Button>
                        </a>
                    </div>
                </CardHeader>
                <Separator />
                <CardContent className="py-12">
                    <div className="flex gap-x-6">
                        <aside className="w-3/12 flex flex-col gap-y-1">
                            { DashboardSidebar.map((sidebar, index) => (
                                <Button
                                    key={`${sidebar.label}_${index}`}
                                    className={
                                        cn("flex items-center justify-start gap-x-3",
                                            sidebar.state === currentState && "bg-accent"
                                        )}
                                    onClick={() => handleSidebarClick(sidebar.state)}
                                    variant="ghost"
                                >
                                    <sidebar.Icon />
                                    <span>{ sidebar.label }</span>
                                </Button>
                            ))}
                        </aside>
                        <div className="w-9/12 flex flex-col gap-6">
                            {(() => {
                                switch (currentState) {
                                    case "edit":
                                        return ( <EditProfile user={userData} /> );
                                    case "add_product":
                                        return ( <AddProduct userId={userData.id} /> );
                                    case "todos":
                                        return <Todo />;
                                    case "analytics":
                                        return (
                                            <div>
                                                <h1>Your Analytics</h1>
                                                <Analytics />
                                            </div>
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default Dashboard;
