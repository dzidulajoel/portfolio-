import Para from "@/components/utils/Para";
import { COLORS } from "@/constants/color";
const experienceCards = () => {
        return (
                <>

                        <div className="w-full h-auto rounded-md hover:backdrop-blur-md p-4 space-y-3" style={{backgroundColor:COLORS.black[800]}}>
                                <h1 className="text-xl text-start text-white font-semibold">American Technologies For Africa</h1>
                                <Para message="Développeur fullstack, je conçois et développe des applications web modernes, performantes et centrées utilisateur. J’aide à transformer vos idées en solutions digitales concrètes, fiables et évolutives." />
                                <p className="text-start text-white/70" >Nov 2025</p>
                        </div>
                </>
        )
}

export default experienceCards