import React from 'react'
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', ()=>{
    it('should render default About', ()=>{
        const aboutProps = {
            onClick: jest.fn()
        }
        const element = render(
            <About data-testid='testingAbout' {...aboutProps}/>
        ).container.firstChild
        //const element = screen.getByTestId('testingAbout')
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('about');
    })
})
