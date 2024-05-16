import PdfViewer from "./components/PdfViewer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Pass file path of PDF file as a prop to PdfViewer component */}
      <PdfViewer pdfFilePath="/pdf/example-pdf.pdf" />
    </div>
  );
}
