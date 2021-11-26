type iconArrowProps = {
    rotateTo?: 'top' | 'right' | 'bottom' | 'left',
    width?: number,
    height?: number,
    color?: string,
}

const IconArrow = ({
                       rotateTo = 'right',
                       width = rotateTo === 'left' || rotateTo === 'right' ? 24 : 32,
                       height = rotateTo === 'left' || rotateTo === 'right' ? 32 : 24,
                       color = '#16181f'
                   }
                       : iconArrowProps) => {

    const renderArrow = () => {
        if (rotateTo === 'top') {
            return (
                <path d="M13.737 10 15.5 8.237 8 .737l-7.5 7.5 1.762 1.764L8 4.276z"/>
            )
        }
        if (rotateTo === 'left') {
            return (
                <path d="M9.631 2.632 7.869.869l-7.5 7.5 7.5 7.5 1.762-1.762-5.725-5.738z"/>
            )
        }
        if (rotateTo === 'right' || !rotateTo) {
            return (
                <path d="m.369 14.106 1.762 1.763 7.5-7.5-7.5-7.5L.369 2.63l5.725 5.738z"/>
            )
        }
        if (rotateTo === 'bottom') {
            return (
                <path d="M2.263.737.5 2.5 8 10l7.5-7.5L13.738.737 8 6.462z"/>
            )
        }
    }
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 0 16 12"
            width={width}
            fill={color}
        >
            {
                renderArrow()
            }
        </svg>
    )
};

export default IconArrow;
