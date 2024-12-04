/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { files } from "./FileData";
import "../App.css";

export const ViewFiles = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="view-files-content"
                aria-expanded={open}
                style={{
                    backgroundColor: "#9394da",
                    borderColor: "#4D7298",
                    marginLeft: "5px",
                    marginRight: "5px",
                    marginTop: "5px",
                    marginBottom: "5px",
                    color: "white"
                }}
            >
                View Files
            </Button>
            <Collapse in={open}>
                <div id="view-files-content" style={{ marginTop: "10px" }}>
                    <b>
                        <ol>
                            {files.map((file, index) => (
                                <li key={index}>
                                    <code>{file.name}</code>
                                </li>
                            ))}
                        </ol>
                    </b>
                </div>
            </Collapse>
        </div>
    );
};
