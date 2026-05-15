import { COLORS } from "@/constants/color"
import Title from "./utils/Title"

const Contact = () => {
        return (
                <>
                <div className="space-y-4">
                        <Title title1="COLLABORONS" title2="ENSEMBLE" />
                        <form className="space-y-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="text-white flex flex-col justify-start">
                                                <label htmlFor="nom">Nom</label>
                                                <input type="text" name="nom" id="nom" style={{backgroundColor:COLORS.black[800]}} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none" placeholder="Entrez votre nom ..." />
                                        </div>
                                        <div className="text-white flex flex-col justify-start">
                                                <label htmlFor="prenom">Prenom</label>
                                                <input type="text" name="prenom" id="prenom" style={{backgroundColor:COLORS.black[800]}} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none" placeholder="Entrez votre prenom ..." />
                                        </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="text-white flex flex-col justify-start">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" id="email" style={{backgroundColor:COLORS.black[800]}} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none" placeholder="Entrez votre email ..." />
                                        </div>
                                        <div className="text-white flex flex-col justify-start">
                                                <label htmlFor="tel">Tel</label>
                                                <input type="tel" name="tel" id="tel" style={{backgroundColor:COLORS.black[800]}} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none" placeholder="+228 -- -- -- --" />
                                        </div>
                                </div>


                                <div className="text-white flex flex-col justify-start">
                                        <label htmlFor="email">Motif</label>
                                        <input type="emaail" name="email" id="email" style={{backgroundColor:COLORS.black[800]}} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none" placeholder="Entrez votre email ..." />
                                </div>

                                <div className="text-white flex flex-col justify-start">
                                        <label htmlFor="message">Message</label>
                                        <textarea name="message" id="message" rows="6" style={{backgroundColor:COLORS.black[800]}} className="backdrop-blur-md p-4 rounded-md text-sm outline-none border-none" placeholder="Entrez votre email ..." ></textarea>
                                </div>

                                <button type="submit" className="transition-transform duration-300 w-full h-10 rounded-md text-white bg-[#2845D6] cursor-pointer hover:bg-white hover:text-black">Soumettre </button>



                        </form>
                </div>
                </>
        )
}

export default Contact