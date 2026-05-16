type messageProps = {
        message: string
};

const Para = ({ message }: messageProps) => {
        return (
                <p className='text-[.95rem] text-white/50 text-start infoP'>{message}</p>
        )
}

export default Para