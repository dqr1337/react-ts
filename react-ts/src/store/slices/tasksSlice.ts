import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type TaskType = {
	id: number;
	text: string;
	isCompleted: boolean;
};

type TasksState = {
	tasks: TaskType[];
};

const initialState: TasksState = {
	tasks: [
		{ id: 1, text: '1 task', isCompleted: false },
		{ id: 2, text: '2 task', isCompleted: true },
		{ id: 3, text: '3 task', isCompleted: false },
	],
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask(state, action: PayloadAction<string>) {
			const maxId = Math.max(...state.tasks.map((task) => task.id));

			state.tasks.push({ id: maxId + 1, text: action.payload, isCompleted: false });
		},
		deleteTask(state: TasksState, action: PayloadAction<number>) {
			state.tasks = state.tasks
				.filter((task: TaskType) => task.id !== action.payload)
				.map((task) => {
					if (task.id > action.payload) {
						return {
							...task,
							id: task.id - 1,
						};
					}
					return task;
				});
		},
		changeTask(state: TasksState, action: PayloadAction<TaskType>) {
			const taskById = state.tasks.find((task) => task.id === action.payload.id);
			console.log(action.payload.id);

			if (taskById) {
				taskById.text = action.payload.text;
				taskById.isCompleted = false;
			}
		},
		changeCompletion(state: TasksState, action: PayloadAction<number>) {
			const taskById = state.tasks.find((task) => task.id === action.payload);

			if (taskById) {
				taskById.isCompleted = !taskById.isCompleted;
			}
		},
	},
});

export const { addTask, deleteTask, changeTask, changeCompletion } = tasksSlice.actions;
export default tasksSlice.reducer;
