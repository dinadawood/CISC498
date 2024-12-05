/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import {
    Button,
    Collapse,
    FormControl,
    InputGroup,
    Table
} from "react-bootstrap";
// import { files } from "./FileData";
import "../App.css";

interface File {
    name: string;
    content: string;
}

interface ViewFilesProps {
    files: File[];
    onDelete: (fileName: string) => void;
}

export const ViewFiles = ({ files, onDelete }: ViewFilesProps) => {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    // Handling Search Functionality:
    const filterFiles = files.filter((file) =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="view-files-content"
                aria-expanded={open}
                style={{
                    backgroundColor: "#9394da",
                    borderColor: "#4D7298",
                    marginTop: "5px",
                    marginBottom: "5px",
                    marginRight: "5px",
                    marginLeft: "5px",
                    color: "white"
                }}
            >
                View Files
            </Button>
            <Collapse in={open}>
                <div id="view-files-content" style={{ marginTop: "10px" }}>
                    <InputGroup
                        className="mb-3"
                        style={{ maxWidth: "400px", margin: "auto" }}
                    >
                        <FormControl
                            placeholder="Search files..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </InputGroup>
                    <Table
                        striped
                        bordered
                        hover
                        responsive
                        style={{ maxWidth: "100%", margin: "auto" }}
                    >
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th style={{ width: "30%" }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filterFiles.length > 0 ? (
                                filterFiles.map((file, index) => (
                                    <tr key={index}>
                                        <td>{file.name}</td>
                                        <td>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                onClick={() =>
                                                    onDelete(file.name)
                                                }
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={2}
                                        style={{ textAlign: "center" }}
                                    >
                                        No files found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </Collapse>
        </div>
    );
};
