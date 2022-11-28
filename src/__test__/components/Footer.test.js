import {render,screen} from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import {Footer} from '../../components/Footer';

describe('<Footer/>', () => {
 let tweeter;
 let youtube;
 let instagram;
 let list;
 let listItem;

 beforeEach(() => {
    render(<Footer/>);
  });

  test('Icons shoul contain an alt', () => {
    tweeter=screen.getByRole('img', {name:'Twitter'});
    expect(tweeter).toBeInTheDocument();

   
    instagram=screen.getByRole('img', {name:'instagram'});
    expect(instagram).toBeInTheDocument();

    youtube=screen.getByRole('img', {name:'youtube'});
    expect(youtube).toBeInTheDocument();
  });

  test('Should contain an ul', () => {
    list=screen.getByRole('list', {name:'contact-list'});
    expect(list).toBeInTheDocument();
  });

  toString('Should contain list items', () => {
     listItem=screen.getByText('Soporte');
     expect(listItem).toBeInTheDocument();

     listItem=screen.getByText(/acerca/i);
     expect(listItem).toBeInTheDocument();

     listItem=screen.getByText(/registro/i);
     expect(listItem).toBeInTheDocument();

     listItem=screen.getByText(/aviso/i);
     expect(listItem).toBeInTheDocument();
  });
 
});