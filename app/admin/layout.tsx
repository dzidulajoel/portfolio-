'use client';
import { COLORS } from "@/constants/color";
const Layout = ({
        children,
}: Readonly<{
        children: React.ReactNode;
}>) => {
        return (
                <div className="w-full min-h-screen py-6 flex flex-col items-center space-y-16 relative justify-end" style={{ backgroundColor: COLORS.black[900] }}>
                        {children}
                </div>
        );
};

export default Layout;