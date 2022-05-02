import React from 'react'
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation', ()=>{
    it('should render default Navigation', ()=>{
        const navigationProps = {
            onClick: jest.fn()
        }
        const element = render(
            <Navigation data-testid='testingNavigation' {...navigationProps}></Navigation>
        ).container.firstChild
        //const element = screen.getByTestId('testingNavigation')
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('navigation');
    })
})
