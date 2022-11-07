import React from 'react';
import { render, screen } from '@testing-library/react';
import {Root} from "./index";

test('render check navbar', () => {
    render(<Root />);
});
