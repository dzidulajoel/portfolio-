import Para from "@/components/utils/Para";
import { COLORS } from "@/constants/color";
import { Icon } from "@iconify/react";

const page = () => {
        return (
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">

                        {/* LinkedIn */}
                        <li style={{backgroundColor:COLORS.black[800]}} className=" flex items-center gap-4 p-4 rounded-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                <div className=" w-12 h-12 rounded-xl bg-[#2845D6]/10 flex justify-center items-center">
                                        <Icon color="#2845D6" icon="formkit:linkedin" width="28" height="28" />
                                </div>
                                <div>
                                        <h2 className="text-white font-semibold">  LinkedIn </h2>
                                        <Para message="Dzidula Gamatho" />
                                </div>
                        </li>

                        <li style={{backgroundColor:COLORS.black[800]}} className=" flex items-center gap-4 p-4 rounded-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                <div className=" w-12 h-12 rounded-xl bg-[#2845D6]/10 flex justify-center items-center">
                                <Icon color="#2845D6" icon="charm:github" width="24" height="24" />
                                </div>
                                <div>
                                        <h2 className="text-white font-semibold">  Github </h2>
                                        <Para message="Dzidulajoel" />
                                </div>
                        </li>

                        <li style={{backgroundColor:COLORS.black[800]}} className=" flex items-center gap-4 p-4 rounded-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                <div className=" w-12 h-12 rounded-xl bg-[#2845D6]/10 flex justify-center items-center">
                                <Icon color="#2845D6" icon="majesticons:mail-line" width="28" height="28" />
                                </div>
                                <div>
                                        <h2 className="text-white font-semibold">  Email </h2>
                                        <Para message="gamathodzidula@gmail.com" />
                                </div>
                        </li>

                        <li style={{backgroundColor:COLORS.black[800]}} className=" flex items-center gap-4 p-4 rounded-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                                <div className=" w-12 h-12 rounded-xl bg-[#2845D6]/10 flex justify-center items-center">
                                <Icon color="#2845D6" icon="mingcute:whatsapp-line" width="26" height="26" />
                                </div>
                                <div>
                                        <h2 className="text-white font-semibold">  Whatsapp </h2>
                                        <Para message="+228 96126811" />
                                </div>
                        </li>



                </ul>
        )
}

export default page