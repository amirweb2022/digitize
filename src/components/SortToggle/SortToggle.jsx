import { ToggleButtonGroup, ToggleButton } from "@mui/material";
const SortToggle = ({ options, value, selectToggle }) => {
  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={selectToggle}
      style={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton
          className={`w-full`}
          style={{
            marginTop: "10px",
            background: "#FF755C",
            border: "none",
            color: "#fff",
            fontWeight: "bold",
            marginRight: "10px",
            borderRadius: "8px",
          }}
          key={id}
          value={value}
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default SortToggle;