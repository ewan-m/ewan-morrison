import { useEffect } from "react";

const someParentElementHasId = (
	event: MouseEvent,
	id: string,
	maxDepth: number = 99
): boolean => {
	let currentElement = (event as any).srcElement;
	let count = 0;

	while (currentElement !== undefined) {
		count++;
		if (currentElement?.id === id) {
			return true;
		}
		if (count > maxDepth) {
			return false;
		}
		currentElement = currentElement?.parentElement;
	}
	return false;
};

export const useClickOutsideListener = (
	containerIds: string[],
	onClickOutside: () => any
) => {
	useEffect(() => {
		const listener = (event: MouseEvent) => {
			const clickNotInsideContainerElements = !containerIds
				.map((id) => someParentElementHasId(event, id, 5))
				.some((allowed) => allowed);

			if (clickNotInsideContainerElements) {
				onClickOutside();
			}
		};

		document.addEventListener("click", listener);
		return () => document.removeEventListener("click", listener);
	}, []);
};
