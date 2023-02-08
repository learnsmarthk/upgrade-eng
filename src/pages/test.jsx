import React, { useState, useRef, useContext } from "react";
import { Button } from "@/components";
import papa from "papaparse";
import { PostContext } from "@/context/post/context";

import { filterPostArray } from "@/utils/post/filterPostsArray";

const TestPage = () => {
  const fileRef = useRef();
  const [inputCsv, setInputCsv] = useState(null);
  const { onCreateMany } = useContext(PostContext);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(fileRef.current.files[0]);
    const csvFilePath = fileRef.current.files[0];
    papa.parse(csvFilePath, {
      header: true,
      complete: (result) => {
        setInputCsv(result.data);
        const filteredData = filterPostArray(result.data);
        console.log(filteredData);
        onCreateMany({ questionsArray: filteredData });
      },
    });
  };
  return (
    <div>
      <form>
        <input ref={fileRef} type="file" accept=".csv" />
        <div>{JSON.stringify(inputCsv)}</div>
        <Button onClick={submitHandler} type="button">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default TestPage;
