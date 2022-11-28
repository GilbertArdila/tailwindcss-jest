import {render,screen} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";
import {Form} from '../../components/Form';

describe('<form/>', () => {
   
   
    beforeEach(() => {
    render(<Form/>);
    })
   
    

   test('Should contain inputs', () => {
    let inputNombre = screen.getByRole('textbox',{name:'Nombre'});

    let inputMail = screen.getByRole('textbox',{name:'Email'});

    let inputComentarios = screen.getByRole('textbox', {name:'comentarios'});

    let button = screen.getByRole('button', {name:'Enviar'});

    
    expect(inputNombre).toBeInTheDocument(); expect(inputMail).toBeInTheDocument();
    expect(inputComentarios).toBeInTheDocument();
    expect(button).toBeInTheDocument();
   });

  
});