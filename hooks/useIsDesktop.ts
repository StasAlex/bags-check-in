import { useState, useEffect } from "react";

const useIsDesktop = (breakpoint: number = 768): boolean => {
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    useEffect(() => {
        const updateMedia = () => {
            setIsDesktop(window.innerWidth >= breakpoint);
        };

        updateMedia(); // Initialize the state on mount
        window.addEventListener("resize", updateMedia);

        return () => window.removeEventListener("resize", updateMedia);
    }, [breakpoint]);

    return isDesktop;
};

export default useIsDesktop;
