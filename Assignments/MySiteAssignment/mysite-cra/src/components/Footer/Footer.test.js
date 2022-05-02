import React from 'react'
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', ()=>{
    it('should render default Footer', ()=>{
        const footerProps = {
            onClick: jest.fn()
        }
        const element = render(
            <Footer data-testid='testingFooter' {...footerProps}></Footer>
        ).container.firstChild
        //const element = screen.getByTestId('testingFooter')
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('footer');
    })
})
