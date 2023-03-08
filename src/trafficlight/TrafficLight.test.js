import { render } from '@testing-library/react';
import TrafficLight from './TrafficLight';

describe("settimeout fn", () => {
    it('renders updated light every sec', () => {
        const container = render(<TrafficLight />)

        expect(container.getByTestId('light-red').style.backgroundColor).toBe('red');
        expect(container.getByTestId('light-yellow').style.backgroundColor).toBe('yellow');
        expect(container.getByTestId('light-green').style.backgroundColor).toBe('green');

        expect(container.getByTestId('light-red').style.opacity).toBe("1");
        expect(container.getByTestId('light-yellow').style.opacity).toBe("0.25");
        expect(container.getByTestId('light-green').style.opacity).toBe("0.25");
    });
});


