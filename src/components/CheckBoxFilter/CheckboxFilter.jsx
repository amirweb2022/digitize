import Checkbox from "@mui/material/Checkbox/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
const CheckBoxFilter = ({ changeChecked, cuisine }) => {
  const { checked, label, id } = cuisine;
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
            inputProps={{ "aria-label": "checkbox with small size" }}
            style={{ color: "#FF755C" , marginRight:"-18px" }}
          />
        }
        label={label}
      />
    </div>
  );
};

export default CheckBoxFilter;