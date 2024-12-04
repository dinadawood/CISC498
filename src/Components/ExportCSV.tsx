/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { files } from "./FileData";
import "../App.css";

interface ExportProps {
    show: boolean;
    showExportfileModal: () => void;
    handleClose: () => void;
}

export const ExportCSV = ({
    show,
    showExportfileModal,
    handleClose
}: ExportProps) => {
    const [selectedFile, setSelectedFile] = useState<string>("");

    const handleExport = () => {
        const file = files.find((file) => file.name === selectedFile);
        if (file) {
            const blob = new Blob([file.content], {
                type: "text/csv;charset=utf-8;"
            });
            const link = document.createElement("a");
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", file.name);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        handleClose();
    };

    return (
        <div>
            <Button
                onClick={showExportfileModal}
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
                Export CSV
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Export File</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Select a file to export:</Form.Label>
                        <Form.Control
                            as="select"
                            value={selectedFile}
                            onChange={(e) => setSelectedFile(e.target.value)}
                        >
                            <option value="">Select a file</option>
                            {files.map((file, index) => (
                                <option key={index} value={file.name}>
                                    {file.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleExport}
                        disabled={!selectedFile}
                    >
                        Export
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
