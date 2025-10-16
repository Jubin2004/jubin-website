import {motion} from "framer-motion";

interface Props{
    class: string;
    children?: React.ReactNode;
}

const Scroll = (props: Props) => {
    return (
        <motion.div
        className={props.class}
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1,
            transition: {
                duration: 2
            }
        }}
        viewport={{
            once: true
        }}
        >{props.children}</motion.div>
    );
};

export default Scroll;