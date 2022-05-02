import React from 'react'
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects', ()=>{
    it('should render default Projects', ()=>{
        const projectsProps = {
            onClick: jest.fn()
        }
        const element = render(
            <Projects data-testid='testingProjects' {...projectsProps}></Projects>
        ).container.firstChild
        //const element = screen.getByTestId('testingProjects')
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('projects');
    })
})
