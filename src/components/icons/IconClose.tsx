type IconCloseProps = {
    className?: string,
    width?: string,
    height?: string,
    color?: string,
}


const IconClose = ({width = '24px', height = '24px', className, color = 'currentColor'}: IconCloseProps) => {

    return (
        <svg className={className} width={width} height={height} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 1.4 12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z" fill={color}
                  fillRule="evenodd"/>
        </svg>
    )
}

export default IconClose;
