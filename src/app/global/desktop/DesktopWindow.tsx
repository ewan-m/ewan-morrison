import * as React from "react";
import { FunctionComponent, useState } from "react";
import { Icon } from "../Icon";

export const DesktopWindow: FunctionComponent<{ onClose: () => void }> = ({
	children,
	onClose,
}) => {
	const [initialPos, setInitialPos] = useState({ left: 200, top: 100 });
	const [position, setPosition] = useState({ ...initialPos });
	const [isDragging, setIsDragging] = useState(false);

	return (
		<div
			className="desktop__window"
			style={{
				width: 350,
				height: 450,
				left: position.left,
				top: position.top,
				...(isDragging ? { userSelect: "none" as "none" } : {}),
			}}
			onMouseUp={() => {
				setIsDragging(false);
			}}
			onMouseMove={(e) => {
				if (isDragging) {
					if (e.pageX === 0) {
						return;
					}
					setPosition({
						left: e.pageX - initialPos.left,
						top: e.pageY - initialPos.top,
					});
				}
			}}
			onMouseLeave={() => {
				setIsDragging(false);
			}}
		>
			<div
				className="desktop__window__controls"
				onMouseDown={(e) => {
					const parent = e.currentTarget.getBoundingClientRect();
					setInitialPos({ left: e.pageX - parent.left, top: e.pageY - parent.top });
					setIsDragging(true);
				}}
			>
				<span className="desktop__window__controls__ctrl">
					<Icon>drag_indicator</Icon>
				</span>
				<button className="desktop__window__controls__ctrl" onClick={onClose}>
					<Icon>close</Icon>&nbsp;Close
				</button>
			</div>
			{children}
		</div>
	);
};
