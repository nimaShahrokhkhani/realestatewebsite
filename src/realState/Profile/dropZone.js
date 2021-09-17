import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
    padding: 20
};

const thumb = {
    position: "relative",
    display: "inline-flex",
    borderRadius: 2,
    border: "1px solid #eaeaea",
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: "border-box"
};

const thumbInner = {
    display: "flex",
    minWidth: 0,
    overflow: "hidden"
};

const img = {
    display: "block",
    width: "auto",
    height: "100%"
};

const thumbButton = {
    position: "absolute",
    right: 10,
    bottom: 10,
    background: "#ff1e45",
    color: "#fff",
    border: 0,
    borderRadius: ".325em",
    cursor: "pointer"
};
export let imageList = [];

export default function Doka(props) {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
        onDropRejected: () => {
            props.onDropRejected();
        },
        maxFiles: 1,
        accept: "image/*",
        onDrop: (acceptedFiles) => {
            imageList = acceptedFiles;
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            );
        }
    });

    const thumbs = files.map((file, index) => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img src={file.preview} style={img} alt=""/>
            </div>
        </div>
    ));

    useEffect(
        () => () => {
            // Make sure to revoke the data uris to avoid memory leaks
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    return (
        <section>

            <div className="change-photo-btn">
                <div className="photoUpload" {...getRootProps({className: "dropzone"})}>
                    <span><i className="fa fa-upload"></i> بارگذاری تصویر</span>
                    <input {...getInputProps()}/>
                    <aside style={thumbsContainer}>{thumbs}</aside>
                </div>
            </div>
        </section>
    );
}
