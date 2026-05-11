"use client";
import { COLORS } from "@/constants/color"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const page = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/portfolio");
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center" style={{ backgroundColor: COLORS.black[900] }} >
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><rect width={2.8} height={12} x={1} y={6} fill="#FFF"><animate attributeName="y" begin="SVGKWB9Ob0W.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"></animate><animate attributeName="height" begin="SVGKWB9Ob0W.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"></animate></rect><rect width={2.8} height={12} x={5.8} y={6} fill="#FFF"><animate attributeName="y" begin="SVGKWB9Ob0W.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"></animate><animate attributeName="height" begin="SVGKWB9Ob0W.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"></animate></rect><rect width={2.8} height={12} x={10.6} y={6} fill="#FFF"><animate id="SVGKWB9Ob0W" attributeName="y" begin="0;SVGCkSt6baQ.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"></animate><animate attributeName="height" begin="0;SVGCkSt6baQ.end-0.1s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"></animate></rect><rect width={2.8} height={12} x={15.4} y={6} fill="#FFF"><animate attributeName="y" begin="SVGKWB9Ob0W.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"></animate><animate attributeName="height" begin="SVGKWB9Ob0W.begin+0.2s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"></animate></rect><rect width={2.8} height={12} x={20.2} y={6} fill="#FFF"><animate id="SVGCkSt6baQ" attributeName="y" begin="SVGKWB9Ob0W.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="6;1;6"></animate><animate attributeName="height" begin="SVGKWB9Ob0W.begin+0.4s" calcMode="spline" dur="0.6s" keySplines=".14,.73,.34,1;.65,.26,.82,.45" values="12;22;12"></animate></rect></svg>
                </div>
            </div>
        </>
    )
}

export default page