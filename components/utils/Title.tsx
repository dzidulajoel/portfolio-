import { COLORS } from "@/constants/color";

type TitleProps = {
        title1: string;
        title2: string;
};

const Title = ({ title1, title2 }: TitleProps) => {
        return (
                <h2 className="text-white text-4xl">
                        <span>{title1}</span>
                        <br />
                        <span style={{ color: COLORS.blue[500], opacity:.2 }}>
                                {title2}
                        </span>
                </h2>
        );
};

export default Title;