import Title from "./utils/Title"
import ExperienceCards from "./utils/experienceCards"

const Experience = () => {
        return (
                <>
                        <Title title1="03 ANS" title2="D'EXPERIENCES"/>
                        <div className="w-full space-y-4 mt-8">
                                <ExperienceCards/>
                                <ExperienceCards/>
                                <ExperienceCards/>
                        </div>
                </>
        )
}

export default Experience