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
	tasks: [],
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask(state, action: PayloadAction<string>) {
			const maxId = state.tasks.length > 0 ? Math.max(...state.tasks.map((task) => task.id)) : 0;

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
		setTasksForUser(state: TasksState, action: PayloadAction<TaskType[]>) {
			state.tasks = action.payload;
		},
	},
});

export const { addTask, deleteTask, changeTask, changeCompletion, setTasksForUser } = tasksSlice.actions;
export default tasksSlice.reducer;
