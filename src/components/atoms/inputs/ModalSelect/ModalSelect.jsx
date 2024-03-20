import Select from "react-select";
import classes from "./modal-select.module.scss";

export const ModalSelect = ({
	name = "",
	required = false,
	options = [],
	onChange = null,
	value = {},
	isMulti,
	isDisabled = false
}) => {
	const customStyles = {
		menuList: (base) => ({
			...base,
			"::-webkit-scrollbar": {
				width: "6px",
				height: "0px",
			},
			"::-webkit-scrollbar-track": {
				background: "#fff",
			},
			"::-webkit-scrollbar-thumb": {
				background: "#45b7e2",
				borderRadius: "5px",
			},
			"::-webkit-scrollbar-thumb:hover": {
				background: "#45b7e2",
			},
		}),
		menu: (base) => ({
			...base,
			fontFamily: 'Inter'
		}),
		control: (base) => ({
			...base,
			fontSize: 18,
			fontFamily: 'Inter'
			// height: 12,
		}),
	};
	return (
		<div className={classes.select}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<h4
					style={{
						fontSize: 18,
						fontFamily: 'Inter'
					}}
				>{name}</h4>
				{required &&
					<span
						style={{
							fontSize: 16,
							fontFamily: 'Inter'
						}}
					>(requerido)</span>}
			</div>
			<Select
				options={options}
				value={value}
				styles={customStyles}
				isMulti={isMulti}
				isDisabled={isDisabled}				
				theme={(theme) => ({
					...theme,
					colors: {
						...theme.colors,
						primary25: "#e1e1e1",
						primary50: "#0096bf1f",
						primary: "#45b7e2",
					},
				})}
				onChange={onChange}
			/>
		</div>
	);
};
