import { useState, useEffect, useRef, useCallback } from 'react';
import Light from './Light';

function TrafficLight() {
    const [indexOnLight, setIndexOnLight] = useState(0);
    
    const traffics = [
        { color: 'red', index: 0 },
        { color: 'yellow', index: 1 },
        { color: 'green', index: 2 }
    ];

    const ref = useRef({
        interval : -1
    });

    const startLighting = useCallback(() => {
        ref.current.interval = setInterval(() => {
            setIndexOnLight(i => (i + 1) % 3);
        }, 1000);
    }, []);

    const stopLighting = () => {
        if(ref.current.interval !== -1) {
            clearInterval(ref.current.interval);
            ref.current.interval = -1;
        }
    }

    useEffect(() => {
        startLighting();
        return () => {
            stopLighting();
        }
    }, [startLighting]);

    const onClick = (index) => {
        stopLighting();
        setIndexOnLight(index);
        startLighting();
    }

    return (
        <div className='traffic-light'>
            {
                traffics.map(light =>
                    <Light key={light.index}
                        color={light.color}
                        isOn={indexOnLight === light.index}
                        onClick={() => onClick(light.index)}
                    />)
            }
        </div>
    )
}

export default TrafficLight;