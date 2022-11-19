console.log('Working?');

let viz;

//Link to Tableau Public Dashboard
const url = "https://public.tableau.com/views/j_16680307027710/Dashboard12?:language=en-US&:display_count=n&:origin=viz_share_link";

const vizContainer = document.getElementById('vizContainer');
const options = {
    hideTabs: true,
    height: 1250,
    width: 1250,
    margin: 200,
    onFirstInteraction: function() {
        workbook = viz.getWorkbook();
        activeSheet = workbook.getActiveSheet();
        console.log("My dashboard is interactive");
    }
};

//Function to generate the viz element
function initViz() {
    console.log('Executing the initViz function!');
    viz = new tableau.Viz(vizContainer, url, options);
}

// Run initViz function
document.addEventListener("DOMContentLoaded", initViz);

const exportPDF = document.getElementById('exportPDF');
const exportImage = document.getElementById('exportImage');


//click on the pdf button to generate pdf of dashboard
function generatePDF() {
    viz.showExportPDFDialog()
}

exportPDF.addEventListener("click", function () {
    generatePDF();
  });

//click on image button to generate image of dashboard
function generateImage() {
    viz.showExportImageDialog()
}

exportImage.addEventListener("click", function () {
    generateImage();
  });