function Light({ color, isOn, onClick }) {
    return (
        <div className='light' style={{ background: color, opacity: isOn ? 1 : 0.25 }} onClick={onClick} />
    )
}

export default Light;