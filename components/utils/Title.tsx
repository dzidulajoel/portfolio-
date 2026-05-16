import { COLORS } from "@/constants/color";

type TitleProps = {
        title1: string;
        title2: string;
};

const Title = ({ title1, title2 }: TitleProps) => {
        return (
                <h2 className="text-start text-white text-5xl  sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-bold leading-tight lg:leading-20 xl:leading-25">
                        <span>{title1}</span>
                        <br />
                        <span style={{ color: COLORS.blue[900], opacity: .7 }}>
                                {title2}
                        </span>
                </h2>
        );
};

export default Title;