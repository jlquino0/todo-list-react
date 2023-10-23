import { fireEvent, render, screen } from '@testing-library/react'
import { Home } from '../pages/Home/index'
//import { useTodos } from '../pages/hooks/useTodos'
import * as useTodosM from '../pages/hooks/useTodos'

const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUsedNavigate,
}));

//const mockuseTodos = jest.fn()
//jest.mock('../pages/hooks/useTodos', () => ({
//  __esModule: true,
//  default: (...args) => mockuseTodos(...args),
//}))

useTodosM.useTodos =  jest.fn();

describe('Pruebas en home index', () => {

    test('prueba home', () => {
        render(
            <Home
            />
        );
    })

})