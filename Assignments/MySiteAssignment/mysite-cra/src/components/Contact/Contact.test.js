import React from 'react'
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', ()=>{
    it('should render default Contact', ()=>{
        const contactProps = {
            onClick: jest.fn()
        }
        const element = render(
            <Contact data-testid='testingContact' {...contactProps}></Contact>
        ).container.firstChild
        //const element = screen.getByTestId('testingContact')
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('contact');
    })
})
