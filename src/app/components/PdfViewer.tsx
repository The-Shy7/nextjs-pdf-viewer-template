export default function PdfViewer({ pdfFilePath }: { pdfFilePath: string }) {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            {/* Display PDF file on the page */}
            <iframe src={pdfFilePath} className="w-full h-full" title="PDF Viewer" />
        </div>
    );
}