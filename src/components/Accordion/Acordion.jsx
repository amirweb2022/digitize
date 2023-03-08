import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxFilter from "../CheckBoxFilter/CheckboxFilter";
import SliderProton from "../SliderPrice/SliderPrice";
function MaterialAccordion({
  cuisines,
  changeChecked,
  selectedPrice,
  changePrice,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="w-full">
      <Accordion
        style={{ background: "none", boxShadow: "none" }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="dark:text-white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="dark:text-white"
        >
          <p
            style={{ fontWeight: "bold" }}
            className="text-slate-600 dark:text-gray-200"
          >
            برند محصول
          </p>
        </AccordionSummary>
        <AccordionDetails className="dark:text-white -mt-5 -mr-4 text-slate-800">
          <Typography>
            {cuisines.slice(0, 4).map((cuisine) => (
              <CheckBoxFilter
                key={cuisine.id}
                cuisine={cuisine}
                changeChecked={changeChecked}
              />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ background: "none", boxShadow: "none" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="dark:text-white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="dark:text-white"
        >
          <p
            style={{ fontWeight: "bold" }}
            className="text-slate-600 dark:text-gray-200"
          >
            رنگ محصول
          </p>
        </AccordionSummary>
        <AccordionDetails className="dark:text-white -mt-5 -mr-4 text-slate-800">
          <Typography>
            {cuisines.slice(4, 8).map((cuisine) => (
              <CheckBoxFilter
                key={cuisine.id}
                cuisine={cuisine}
                changeChecked={changeChecked}
              />
            ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{ background: "none", boxShadow: "none" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="dark:text-white" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="dark:text-white"
        >
          <p
            style={{ fontWeight: "bold" }}
            className="text-slate-600 dark:text-gray-200"
          >
            محدوده قیمت
          </p>
        </AccordionSummary>
        <AccordionDetails className="dark:text-white -mt-5 -mr-4 text-slate-800">
          <SliderProton value={selectedPrice} changePrice={changePrice} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default MaterialAccordion;