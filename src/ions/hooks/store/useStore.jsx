import create from "zustand";
import produce from "immer";

const useExerciseMeta = create(set => {
	return {
		meta: {},
		setBookmark(id, checked) {
			set(
				produce(state => {
					if (state.meta[id]) {
						state.meta[id].checked = checked;
					} else {
						state.meta[id] = { checked };
					}
				})
			);
		},
	};
});

export default useExerciseMeta;
