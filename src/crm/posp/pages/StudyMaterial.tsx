import React from 'react'
import smp from "../../../assets/smp.pdf"
const StudyMaterial = () => {

    return (
        <>study

            <iframe
                src={smp}
                width="100%"
                height="600px"
                style={{ border: 'none' }}
                title="PDF Viewer"
            >
                This browser does not support PDFs. Please download the PDF to view it: <a href={smp}>Download PDF</a>.
            </iframe>
        </>
    )
}

export default StudyMaterial