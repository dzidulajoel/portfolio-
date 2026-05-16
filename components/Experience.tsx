import Title from "./utils/Title"
import ExperienceCards from "./utils/experienceCards"

const Experience = () => {
        return (
                <>
                <div className="space-y-4">

                        <Title title1="03 ANS" title2="D'EXPERIENCES"/>
                        <div className="w-full space-y-4">
                                <ExperienceCards/>
                                <ExperienceCards/>
                                <ExperienceCards/>
                        </div>
                </div>
                </>
        )
}

export default Experience