import React, { useState, useRef, useContext } from "react";
import { Button } from "@/components";
import papa from "papaparse";
import { PostContext } from "@/context/post/context";

import { filterPostArray } from "@/utils/post/filterPostsArray";
import { PostPreviewItem } from "@/components";

const TestPage = () => {
  const fileRef = useRef();
  const [inputCsv, setInputCsv] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(fileRef.current.files[0]);
    const csvFilePath = fileRef.current.files[0];
    papa.parse(csvFilePath, {
      header: true,
      complete: (result) => {
        setInputCsv(result.data);
        const filteredData = filterPostArray(result.data);
        setInputCsv(filteredData);
      },
    });
  };
  return (
    <div>
      <form>
        <input ref={fileRef} type="file" accept=".csv" />
        <div>
          {inputCsv?.map((item) => (
            <PostPreviewItem
              key={item.question}
              question={item.question}
              isPublic={item.isPublic}
            />
          ))}
        </div>
        <Button onClick={submitHandler} type="button">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TestPage;
