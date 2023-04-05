import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { storage, firestore } from "../firebase";
import { CircularProgress } from "@mui/material";
var files, initialValues;

function CreateMemory() {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(0);
  const [values, setValues] = useState({
    title: "",
    description: "",
    date: "",
    years: "",
  });
  
  const fileSelect = (e) => {
    files = e.target.files[0];
    console.log(files);
  };
  const uploadPic = (e) => {
    if (!files) return;
    const storageRef = ref(storage, `/pics/${files.name}`);
    const uploadTask = uploadBytesResumable(storageRef, files);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setUrl(url);
          console.log(url);
          initialValues = url;
          console.log(initialValues);
          
        });
      }
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    const details = url;
    console.log(details);
    e.preventDefault();
    try {
      await setDoc(doc(firestore, "Memories", `${files.name}`), {details,values});
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <>
      <h1>Capture the amazing memory to its roots..</h1>
      <div
        className="container "
        style={{
          boxShadow: "1px 2px 9px #F4AAB9",
          borderRadius: "1rem",
          width: "40rem",
          marginTop: "3rem",
          padding: "2rem",
        }}
      >
        <div className=" mb-3 ">
          <label htmlFor="formFile" className="form-label d-flex">
            Select a picture
          </label>
          <div className="d-flex mb-3">
            <input
              type="file"
              className="form-control d-flex"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              aria-label="Upload"
              onChange={fileSelect}
              required
            />
            <button
              className="btn btn-outline-secondary d-flex"
              type="button"
              id="inputGroupFileAddon04"
              onClick={uploadPic}
            >
              Upload
            </button>
          </div>

          {progress === 100 ? (
            <div>
              <img
                src={url}
                style={{ width: "15rem", height: "8rem" }}
                alt=" "
              />
            </div>
          ) : (
            <CircularProgress variant="determinate" value={progress} />
            // <div>Uploading {progress}</div>
          )}
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label d-flex"
          >
            Give it a title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
            name="title"
            value={values.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label d-flex"
          >
            Describe the moment
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            value={values.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label d-flex"
          >
            How many years for your marriage?
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
            name="years"
            value={values.years}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label d-flex"
          >
            What's the date??
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="date"
            value={values.date}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateMemory;
