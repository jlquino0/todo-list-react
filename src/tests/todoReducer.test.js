import { act } from "react-dom/test-utils";
import { todoReducer } from "../pages/Home/todoReducer";

describe('Pruebas Reducer central', () => {

    const initialState = [{
        id:1,
        description: 'prueba todo',
        done: false,
    }]

    test('case default reducer', ()=>{
        const newState = todoReducer(initialState,{});
        expect(newState).toBe(initialState);

    });

    test('Add Todo', ()=>{
        const action = {
            type: 'Add Todo',
            payload:{
                id:2,
                description: 'prueba add todo',
                done: false,
            }
        }

        const newState = todoReducer(initialState,action);
        expect( newState.length ).toBe(2);
        expect( newState ).toContain( action.payload)

    });

    test('Remove Todo', ()=>{
        const action = {
            type: 'Remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState,action);
        expect( newState.length ).toBe(0);

    });

    test('Edit Todo', ()=>{
        const action = {
            type: 'Edit Todo',
            payload: 1
        }
        
        const newState = todoReducer(initialState,action);
        console.log(newState);
        expect( newState[0].done ).toBe(true);

    });

    test('Modify Todo', ()=>{
        const action = {
            type: 'Modify Todo',
            payload: {
                id:1,
                description: 'prueba modified todo'
            }
        }
        
        const newState = todoReducer(initialState,action);
        console.log(newState);
        expect( newState[0].description ).toBe('prueba modified todo');

    });
});