import React, { useContext, useRef, useState } from "react";

import PostPreviewItem from "../PostPreviewItem";
import { ModalWrapper, Overlay } from "@/components";
import { PostContext } from "@/context/post/context";
import { Button } from "@/components";
import { BsCloudUploadFill, HiOutlineLightBulb } from "@/components/icons";

const PreviewPostModal = ({ setShowup }) => {
  const { csvPostsArray, setCsvPostsHandler, setCsvPostsArray, onCreateMany } =
    useContext(PostContext);

  const [uploadedFile, setUploadedFile] = useState(null);

  const fileRef = useRef();

  const onClearHandler = () => {
    setCsvPostsArray([]);
    setUploadedFile(null);
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setUploadedFile(e.target.files[0]);
      setCsvPostsHandler(fileRef.current.files[0]);
    }
  };

  const onCloseHandler = () => {
    setCsvPostsArray([]);
    setUploadedFile(null);
    setShowup(false);
  };

  const onSubmitHandler = () => {
    onCreateMany({ questionsArray: csvPostsArray });
    setCsvPostsArray([]);
    setUploadedFile(null);
    setShowup(false);
  };

  return (
    <>
      <Overlay setShowUp={() => {}} />
      <ModalWrapper>
        <div className="flex flex-col w-[75vw] max-h-[80vh] bg-white shadow-lg p-8">
          <h2 className="text-xl font-medium text-center mb-6">
            Upload Data with CSV
          </h2>

          {/* Remind box */}
          <div className="flex flex-col gap-2 px-4 py-4 bg-orange-100 rounded-lg mb-5">
            <div className="flex gap-2 items-center ">
              <span className="flex items-center justify-center text-white h-6 w-6 rounded-full bg-indigo-400">
                <HiOutlineLightBulb className="text-xl" />
              </span>
              <h4 className="font-semibold">Reminder:</h4>
            </div>
            <p className="mb-4 px-2">
              In case you encounter any issues when uploading data, please make
              sure you are uploading CSV file, or you may download the csv
              template and try again here.
            </p>
            <a
              className="self-end py-1 px-5 rounded-lg bg-emerald-300 hover:bg-emerald-500"
              href="/template.csv"
            >
              Download template
            </a>
          </div>

          {/* Upload form */}
          <form className="flex mb-5 items-center justify-between p-3 border-1 border-gray-700 bg-slate-100 rounded-lg">
            <div className="flex gap-5 items-center ">
              <label
                className="flex flex-row gap-2 justify-center items-center bg-indigo-400 hover:bg-indigo-600 transition-all duration-75 py-2 px-5 rounded-lg text-white shadow-lg cursor-pointer "
                for="csv-upload"
              >
                <BsCloudUploadFill />
                Select file
              </label>
              <input
                onChange={handleFileChange}
                className="hidden"
                id="csv-upload"
                ref={fileRef}
                type="file"
                accept=".csv"
              />

              <span>{uploadedFile?.name}</span>
              <span>( {csvPostsArray?.length} Items )</span>
            </div>
            <Button type="button" onClick={onClearHandler}>
              Clear
            </Button>
          </form>

          {/* Render Preview List */}
          {uploadedFile && (
            <div className="flex flex-col gap-5 overflow-auto  rounded-lg p-5 innerShadow border-2 mb-5">
              {csvPostsArray.map(({ question, isPublic }) => (
                <PostPreviewItem
                  key={question}
                  question={question}
                  isPublic={isPublic}
                />
              ))}
            </div>
          )}
          <div className="flex w-full gap-4 mt-auto">
            {uploadedFile && (
              <Button styles="w-full" onClick={onSubmitHandler}>
                Submit
              </Button>
            )}
            <Button variant="outlined" styles="w-full" onClick={onCloseHandler}>
              Go back
            </Button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default PreviewPostModal;
