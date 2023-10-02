"use client"
import { motion, useAnimation } from 'framer-motion';

const TextAannimation = ({ text }) => {
    const controls = useAnimation();

    const animateText = async () => {
        const words = text.split(' ');

        for (const word of words) {
            await controls.start({ width: '100%' });
            await controls.start({ width: '0%' });
        }
    };

    return (
        <div className="relative">
            <motion.p
                className="relative z-10"
                initial={{ width: '0%' }}
                animate={controls}
                onAnimationComplete={animateText}
            >
                {text}
            </motion.p>
            <div className="absolute inset-0 bg-yellow-500" />
        </div>
    );
};

export default TextAannimation;





