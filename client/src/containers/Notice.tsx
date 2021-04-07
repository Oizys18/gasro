import React, { useEffect, useState } from "react";
import { noticeRef } from "database/textdata";
import { filestorage } from "database/filedata";

function Notice() {
  const [data, setData] = useState<Array<object>>([]);
  // console.log(filestorage.ref().child("04a.jpg"));
  useEffect(() => {
    let tempData = [];
    noticeRef.on("value", (snapshot: any) => {
      snapshot.forEach((snap: any) => {
        console.log(snap.val());
      });
    });
  }, []);
  // console.log(data);
  return (
    <>
      <section className="basic-container notice-container" id="notice">
        <div className="support-title">공지사항</div>
        <div className="support-content">
          <div className="support-table">
            {data.map((post: any) => (
              <dl key={post}>
                <dt>{post ? post.title : <></>}</dt>
                <dd>
                  <ol>
                    <li>{post ? post.text : <></>}</li>
                    <li>{post ? post.date : <></>}</li>
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
