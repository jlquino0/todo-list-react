import {fireEvent, render,screen} from '@testing-library/react'
import {TodoItem} from '../pages/Home/TodoItem'
import * as React from 'react';

describe('Pruebas en todo item', ()=>{
    const todo = {
        id:1,
        description: 'prueba todo',
        done: true
    };

    const onDeleteTodoMock = jest.fn();
    const onToogleTodoMock = jest.fn();

    beforeEach(()=>jest.clearAllMocks);

    test('renderizar todo item telete',()=>{
        render(
            <TodoItem
            todo={todo}
            onToogleTodo={onToogleTodoMock}
            onDeleteTodo={onDeleteTodoMock} 
            />
        );

        const liElement = screen.getByRole('listitem');
        //console.log(liElement);
        //screen.debug();

        const tododeletebutton = screen.getByLabelText('tododeletebutton');
        fireEvent.click(tododeletebutton);

        expect(onDeleteTodoMock).toHaveBeenCalled();

    })

    test('renderizar todo item toogle',()=>{
        render(
            <TodoItem
            todo={todo}
            onToggleTodo={onToogleTodoMock}
            onDeleteTodo={onDeleteTodoMock} 
            />
        );

        const liElement = screen.getByRole('listitem');
        //console.log(liElement);
        //screen.debug();

        const todocheckbox = screen.getByLabelText('todocheckbox');
        fireEvent.click(todocheckbox);

        expect(onToogleTodoMock).toHaveBeenCalled();

    })

})