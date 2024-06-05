import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";



export default async function SetupLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { storeId: string },
}) {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in')
    }

    const billboard = await prismadb.billboard

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId
        }
    });

    if (!store) {
        // redirect(`/${store.id}`)
        redirect('/')
    }

    return (
        <>
        <Navbar />
            {children}
        </>
    )
}