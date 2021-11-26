import { useMediaQuery } from 'react-responsive';

export type ScreenSize = {
    isXSmall: boolean;
    isSmall: boolean;
    isMedium: boolean;
    isLarge: boolean;
    isXLarge: boolean;
    isXXLarge: boolean;
    isGtSmall: boolean;
    isGtMedium: boolean;
    isGtLarge: boolean;
    isGtXLarge: boolean;
    isLtLarge: boolean;
    isLtXLarge: boolean;
    isLtXXLarge: boolean;
    isPortrait: boolean;
    isLandscape: boolean;
    isHighRes: boolean;
};

const useViewport = (): ScreenSize => {
    // Exact matches
    const isXSmall = useMediaQuery({ query: '(max-width: 349px)' });
    const isSmall = useMediaQuery({ query: '(min-width: 350px) and (max-width: 639px)' });
    const isMedium = useMediaQuery({
        query: '(min-width: 640px) and (max-width: 1023px)',
    });
    const isLarge = useMediaQuery({
        query: '(min-width: 1024px) and (max-width: 1199px)',
    });
    const isXLarge = useMediaQuery({
        query: '(min-width: 1200px) and (max-width: 1439px)',
    });
    const isXXLarge = useMediaQuery({ query: '(min-width: 1440px)' });

    // Greater than matches
    const isGtSmall = useMediaQuery({ query: '(min-width: 350px)' });
    const isGtMedium = useMediaQuery({ query: '(min-width: 640px)' });
    const isGtLarge = useMediaQuery({ query: '(min-width: 1024px)' });
    const isGtXLarge = useMediaQuery({ query: '(min-width: 1200px)' });

    // Smaller than matches
    const isLtLarge = useMediaQuery({ query: '(max-width: 1023px)' });
    const isLtXLarge = useMediaQuery({ query: '(max-width: 1199px)' });
    const isLtXXLarge = useMediaQuery({ query: '(max-width: 1439px)' });

    // Other
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
    const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });
    const isHighRes = useMediaQuery({ query: '(min-resolution: 2dppx)' });

    return {
        isXSmall,
        isSmall,
        isMedium,
        isLarge,
        isXLarge,
        isXXLarge,
        isGtSmall,
        isGtMedium,
        isGtLarge,
        isGtXLarge,
        isLtLarge,
        isLtXLarge,
        isLtXXLarge,
        isPortrait,
        isLandscape,
        isHighRes,
    };
};

export default useViewport;
