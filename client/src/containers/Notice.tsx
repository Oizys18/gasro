import React, { useContext, useEffect, useState } from "react";
import noticeContext from "apis/noticeApi";
import { uid } from "react-uid";
import { useParams } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

// 공지사항: Material-UI Accordian 사용
interface Param {
  post_id: string;
}
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
  const param = useParams<Param>();
  let data = useContext(noticeContext);
  const [expanded, setExpanded] = React.useState<string | false>(
    `${param.post_id}`
  );

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <section className="basic-container " id="notice">
      <div className="notice-container">
        <div className="notice-title">공지사항</div>
        {data.length !== 0 ? (
          data.map((post: any) => (
            <Accordion
              key={post.post_id}
              square
              expanded={expanded === `${post.post_id}`}
              onChange={handleChange(`${post.post_id}`)}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <div>{post?.title}</div>
                <div>{post?.date}</div>
              </AccordionSummary>
              <AccordionDetails>
                <div dangerouslySetInnerHTML={{ __html: post?.content }}></div>
              </AccordionDetails>
            </Accordion>
          ))
        ) : (
          <Accordion
            square
            expanded={expanded === `1`}
            onChange={handleChange(`1`)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <div>공지사항이 없습니다.</div>
              <div>{new Date().toISOString().slice(0, 10)}</div>
            </AccordionSummary>
            <AccordionDetails>
              <div>공지사항을 추가해주십시오.</div>
            </AccordionDetails>
          </Accordion>
        )}
      </div>
    </section>
  );
}
