import {render,screen,fireEvent} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom';
import {Card,mustBeNumber} from '../../components/Card';



describe('<Card/>', () => {
    let title;
    let description;
    let price;
    let qualification;
    let review;
    let width;
    let heigth;
   
    beforeEach(() => {
        const cardData = {nombre: 'un producto', descripcion: 'una descripción',precio: 25, calificacion: 'una calificación', reseñas: 'reseña', imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80', width: 300,heigth: 500}
        render(<Card 
            nombre={cardData.nombre}
            descripción={cardData.descripcion}
            precio={cardData.precio}
            calificacion={cardData.calificacion}
            reseñas={cardData.reseñas}
            imagen={cardData.imagen}
            width={cardData.width}
            heigth={cardData.heigth}
            />)
        
    });

    test('Should render the description of a product', () => {
        description = screen.getByText('una descripción');
        expect(description).toBeInTheDocument();
    });

    test('Should render the name of a product', () => {
        title = screen.getByText('un producto');
        expect(title).toBeInTheDocument();
    });

    test('Should test if the type is number', () => {
      
        expect(typeof mustBeNumber(price,width,heigth)).toBeTruthy;
    });

    test('Should render the qualification of a product', () => {
        qualification = screen.getByText(/una calificación/);
        expect(qualification).toBeInTheDocument();
    });

    test('Should render the review of a product', () => {
        review = screen.getByText('una descripción');
        expect(review).toBeInTheDocument();
    });

    test("Should render the alt of a product's image", () => {
        review = screen.getByRole('img',{ name:'un producto'})
        expect(review).toBeInTheDocument();
    });

    



})