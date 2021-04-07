import React, { useContext, useEffect, useState } from "react";
import noticeContext from "apis/noticeApi";

function Notice() {
  const data = useContext(noticeContext);
  return (
    <>
      <section className="basic-container notice-container" id="notice">
        <div className="support-title">공지사항</div>
        <div className="support-content">
          <div className="support-table">
            {data.map((post: any) => (
              <dl key={post.id}>
                <dt>{post ? post.title : <></>}</dt>
                <dd>
                  <ol>
                    <li>{post ? post.content : <></>}</li>
                  </ol>
                </dd>
              </dl>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Notice;
