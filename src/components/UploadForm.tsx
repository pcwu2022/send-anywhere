"use client";

import React, {MouseEvent} from 'react';
import { useState } from 'react';

export default function UploadForm(){
    const [file, setFile] = useState<File | null>(null);

    const submitForm = (e: MouseEvent) => {
        if (file === null){
            // no file uploaded
            alert("Please upload a file");
        } else {
            const form = new FormData();
            form.append("uploadFile", file);
            // fetch request
            alert("Sending file...");
            setFile(null);
        }
    }

    return (
        <form>
            <input type="file" id="uploadFile" name="uploadFile" onChange={
                (e) => {
                    setFile((e.target.files === null)?null:e.target.files[0])
                }
            } />
            <br />
            <button id="submitButton" onClick={submitForm}>Submit</button>
        </form>
    );
}