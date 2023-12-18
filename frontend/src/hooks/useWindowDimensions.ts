import { WINDOW_SIZE } from '@/app/constants';
import { useEffect, useState } from 'react';

type WindowDimensions = {
    width: number | undefined;
    height: number | undefined;
    isMobile: boolean;
};

const useWindowDimensions = (): WindowDimensions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
        width: undefined,
        height: undefined,
        isMobile: false,
    });
    useEffect(() => {
        function handleResize(): void {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
                isMobile: window.innerWidth < WINDOW_SIZE.DESKTOP_SMALL
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []); 

    return windowDimensions;
};

export default useWindowDimensions;