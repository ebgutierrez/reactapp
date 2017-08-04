const SHOW_CLOCK = 'SHOW_CLOCK';
const SHOW_TODO = 'SHOW_TODO';

export const showClock = () => {
    return {
        type : SHOW_CLOCK
    }
}

export const showTodo = () => {
    return {
        type : SHOW_TODO
    }
}