function Light({ color, isOn, onClick }) {
    return (
        <div data-testid={`light-${color}`} className='light' style={{ backgroundColor: color, opacity: isOn ? 1 : 0.25 }} onClick={onClick} />
    )
}

export default Light;