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
          <div
            className="text-slate-600 dark:text-gray-200 flex justify-center items-center font-bold"
          >
            <span className="w-5 h-5 bg-gray-300 dark:bg-slate-600 rounded-full inline-block relative ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width={1.5}
                className="w-5 h-5 stroke-slate-800 dark:stroke-gray-300 absolute -left-1 -bottom-1"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955a1.126 1.126 0 0 1 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
            برند محصول
          </div>
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
          <div
            className="text-slate-600 dark:text-gray-200 flex justify-center items-center font-bold"
          >
            <span className="w-5 h-5 bg-gray-300 dark:bg-slate-600 rounded-full inline-block relative ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width={1.5}
                className="w-5 h-5 stroke-slate-800 dark:stroke-gray-300 absolute -left-1 -bottom-1"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88a1.124 1.124 0 0 1 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
                />
              </svg>
            </span>
            رنگ محصول
          </div>
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
          <div
            className="text-slate-600 dark:text-gray-200 flex justify-center items-center font-bold"
          >
            <span className="w-5 h-5 bg-gray-300 dark:bg-slate-600 rounded-full inline-block relative ml-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-width={1.5}
                className="w-5 h-5 stroke-slate-800 dark:stroke-gray-300 absolute -left-1 -bottom-1"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                />
              </svg>
            </span>
            محدوده قیمت
          </div>
        </AccordionSummary>
        <AccordionDetails className="dark:text-white -mt-5 -mr-4 text-slate-800">
          <SliderProton value={selectedPrice} changePrice={changePrice} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
export default MaterialAccordion;