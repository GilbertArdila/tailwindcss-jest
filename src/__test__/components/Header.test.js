import {render,screen} from '@testing-library/react';
import {toBeInTheDocument} from '@testing-library/jest-dom';

import { Header } from '../../components/Header';

describe('<Header/>', ()=> {
  let title;

  beforeEach(() => {
    render(<Header/>);
  });

  test('Should render a title', () => {
    title=screen.getByText(/Fast food /i);
    expect(title).toBeInTheDocument();
  });
});