type TArrowIconProps = {
	size?: number
	className?: string
}

export const ArrowIcon = ({ size = 20, className }: TArrowIconProps) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
		>
			<path
				d='M3.33333 1.66667C3.33333 0.746192 4.07953 0 5 0L18.3333 8.9407e-07C19.2538 8.9407e-07 20 0.746193 20 1.66667L20 15C20 15.9205 19.2538 16.6667 18.3333 16.6667C17.4129 16.6667 16.6667 15.9205 16.6667 15L16.6667 5.69036L2.84518 19.5118C2.1943 20.1627 1.13903 20.1627 0.488155 19.5118C-0.162718 18.861 -0.162718 17.8057 0.488155 17.1548L14.3096 3.33333L5 3.33333C4.07953 3.33333 3.33333 2.58714 3.33333 1.66667Z'
				fill='currentColor'
			/>
		</svg>
	)
}
