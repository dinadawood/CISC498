import React, { useState } from "react";
import "./App.css";
import { Help } from "./Components/Help";
import { ImportCSV } from "./Components/ImportCSV";
import { ExportCSV } from "./Components/ExportCSV";
import { Row, Col, Container } from "react-bootstrap";
import { ViewFiles } from "./Components/ViewFiles";
import { ContactUs } from "./Components/ContactUs";
import { AboutUs } from "./Components/AboutUs";
import { files as startFiles } from "./Components/FileData";

interface File {
    name: string;
    content: string;
}

function App(): JSX.Element {
    // Handing Import Modal
    const [showImportModal, setShowImportModal] = useState(false);

    const handleShowImportModal = () => setShowImportModal(true);
    const handleCloseImportModal = () => setShowImportModal(false);

    // Handling Export Modal
    const [showExportModal, setShowExportModal] = useState(false);

    const handleShowExportModal = () => setShowExportModal(true);
    const handleCloseExportModal = () => setShowExportModal(false);

    // Handling imported files in View Files tab:
    const [files, setFiles] = useState<File[]>(startFiles);

    const handleImportView = (fileName: string, content: string) => {
        setFiles((prevFiles) => [...prevFiles, { name: fileName, content }]);
    };

    // const importFiles = (data: string) => {
    //     console.log("Imported Files Data:", data);
    // };

    // Handling Delete File functionality:

    const handleDeleteFile = (fileName: string) => {
        setFiles((prevFiles) =>
            prevFiles.filter((file) => file.name !== fileName)
        );
    };

    // Calling all functions in App
    return (
        <div className="App">
            <header className="App-header">
                <Container fluid>
                    <Row
                        className="align-items-center"
                        style={{ position: "relative" }}
                    >
                        {/* Logo */}
                        <Col
                            xs="auto"
                            style={{ position: "absolute", left: 0 }}
                        >
                            <img
                                src={require("./images/CCHLogo.png")}
                                alt="Company Logo"
                                style={{
                                    width: "175px",
                                    height: "70px"
                                }}
                            />
                        </Col>

                        {/* Title */}
                        <Col>
                            <h1
                                style={{
                                    textAlign: "center",
                                    margin: 0
                                }}
                            >
                                &#129514; UD Center for Clean Hydrogen
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </header>

            <hr></hr>
            <Container>
                <Row className="justify-content-center" style={{ gap: "10px" }}>
                    <Col xs="auto">
                        <AboutUs />
                    </Col>
                    <Col xs="auto">
                        <ViewFiles files={files} onDelete={handleDeleteFile} />
                    </Col>
                    <Col xs="auto">
                        <ImportCSV
                            show={showImportModal}
                            showImportfileModal={handleShowImportModal}
                            handleClose={handleCloseImportModal}
                            importFiles={(fileName) =>
                                handleImportView(
                                    fileName,
                                    "Imported File Content"
                                )
                            }
                        />
                    </Col>
                    <Col xs="auto">
                        <ExportCSV
                            files={files}
                            show={showExportModal}
                            showExportfileModal={handleShowExportModal}
                            handleClose={handleCloseExportModal}
                        />
                    </Col>
                    <Col xs="auto">
                        <div className="Help">
                            <Help></Help>
                        </div>
                    </Col>
                    <Col xs="auto">
                        <ContactUs />
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <img
                src={require("./images/mission_etc.png")}
                alt="Company Mission"
                style={{ width: "100%", height: "100%" }}
            ></img>
            <footer
                style={{
                    textAlign: "center",
                    marginTop: "auto"
                }}
            >
                <img
                    src={require("./images/CCHBottomLogo.png")}
                    alt="Company Contact"
                    style={{ width: "100%", height: "100%" }}
                />
            </footer>
        </div>
    );
}

export default App;
