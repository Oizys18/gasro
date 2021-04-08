import React, { useContext, useEffect, useState } from "react";
import noticeContext from "apis/noticeApi";
import { uid } from "react-uid";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const Accordion = withStyles({
  root: {
    borderBottom: "1px solid #f7f7f7",
    borderTop: "1px solid #f7f7f7",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#FFF",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,

    minHeight: 40,
    "&$expanded": {
      minHeight: 40,
    },
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: "#f7f7f7",
  },
}))(MuiAccordionDetails);

export default function Notice() {
  const data = useContext(noticeContext);
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section className="basic-container " id="notice">
      <div className="notice-container">
        <div className="notice-title">공지사항</div>
        {data.map((post: any) => (
          <Accordion
            key={uid(post)}
            square
            expanded={expanded === `${uid(post)}`}
            onChange={handleChange(`${uid(post)}`)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <div>{post?.title}</div>
              <div>{post?.date}</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>{post?.youtube}</div>
              <div>{post?.images}</div>
              <div>{post?.content}</div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
