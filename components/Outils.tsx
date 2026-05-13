import Image from "next/image"
import Title from "./utils/Title"
const Outils = () => {
        const outils = [
                {
                        icones: "/icons/html5.svg",
                        bg: "bg-orange-100",
                        color: "text-orange-600",
                        border: "border-orange-200",
                        label: "HTML5",
                },

                {
                        icones: "/icons/css.svg",
                        bg: "bg-blue-100",
                        color: "text-blue-600",
                        border: "border-blue-200",
                        label: "CSS3",
                },

                {
                        icones: "/icons/bootstrap.svg",
                        bg: "bg-purple-100",
                        color: "text-purple-600",
                        border: "border-purple-200",
                        label: "Bootstrap",
                },

                {
                        icones: "/icons/tailwind.svg",
                        bg: "bg-cyan-100",
                        color: "text-cyan-600",
                        border: "border-cyan-200",
                        label: "Tailwind",
                },

                {
                        icones: "/icons/js.svg",
                        bg: "bg-yellow-100",
                        color: "text-yellow-700",
                        border: "border-yellow-200",
                        label: "JavaScript",
                },

                {
                        icones: "/icons/php.svg",
                        bg: "bg-indigo-100",
                        color: "text-indigo-600",
                        border: "border-indigo-200",
                        label: "PHP",
                },

                {
                        icones: "/icons/react.svg",
                        bg: "bg-cyan-100",
                        color: "text-cyan-600",
                        border: "border-cyan-200",
                        label: "React JS",
                },

                {
                        icones: "/icons/next-js.svg",
                        bg: "bg-zinc-200",
                        color: "text-zinc-800",
                        border: "border-zinc-300",
                        label: "Next JS",
                },

                {
                        icones: "/icons/java.svg",
                        bg: "bg-red-100",
                        color: "text-red-600",
                        border: "border-red-200",
                        label: "Java",
                },

                {
                        icones: "/icons/spring.svg",
                        bg: "bg-green-100",
                        color: "text-green-600",
                        border: "border-green-200",
                        label: "Spring Boot",
                },

                {
                        icones: "/icons/mongo.svg",
                        bg: "bg-emerald-100",
                        color: "text-emerald-600",
                        border: "border-emerald-200",
                        label: "MongoDB",
                },

                {
                        icones: "/icons/mysql.svg",
                        bg: "bg-sky-100",
                        color: "text-sky-700",
                        border: "border-sky-200",
                        label: "MySQL",
                },

                {
                        icones: "/icons/github.svg",
                        bg: "bg-zinc-200",
                        color: "text-zinc-700",
                        border: "border-zinc-300",
                        label: "GitHub",
                },

                {
                        icones: "/icons/figma.svg",
                        bg: "bg-pink-100",
                        color: "text-pink-600",
                        border: "border-pink-200",
                        label: "Figma",
                },

                {
                        icones: "/icons/adobe-xd.svg",
                        bg: "bg-rose-100",
                        color: "text-rose-600",
                        border: "border-rose-200",
                        label: "Adobe",
                },

                {
                        icones: "/icons/microsoft.svg",
                        bg: "bg-blue-100",
                        color: "text-blue-600",
                        border: "border-blue-200",
                        label: "Office 365",
                },
        ];
        return (
                <>
                        <Title title1="TECHNOLOGIES " title2="OUTILS" />
                        <div className="mt-8 space-y-8">

                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {outils.map((item, index) => (
                                                <div
                                                        key={index}
                                                        className="
        w-32
        h-32
        rounded-2xl
        bg-white
        relative
        flex
        justify-center
        items-center
        shadow-sm
        hover:scale-105
        transition-transform
        duration-300
      "
                                                >
                                                        {/* Icon */}
                                                        <div className="w-16 h-16 flex justify-center items-center">
                                                                <Image
                                                                        width={56}
                                                                        height={56}
                                                                        src={item.icones}
                                                                        alt={item.label}
                                                                />
                                                        </div>

                                                        {/* Badge */}
                                                        <span className={` absolute bottom-2 left-1/2 -translate-x-1/2 px-4 text-sm rounded-lg font-semibold whitespace-nowrap border ${item.bg} ${item.color} ${item.border} `}>
                                                                {item.label}
                                                        </span>
                                                </div>
                                        ))}
                                </div>

                        </div>
                </>
        )
}

export default Outils