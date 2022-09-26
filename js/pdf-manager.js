const newWindow = window.open('', '_blank');

const fontColor = "#6b6b6b";

const styles = {
  header: {
    color: fontColor,
    fontSize: 18,
    marginBottom: 5,
    bold: true,
    unbreakable: true
  },
  paragraph: {
    color: fontColor,
    fontSize: 14,
    marginBottom: 20,
    alignment: "justify",
    unbreakable: true
  }
}

function createItemPDF(textContent, styles) {
  return {
    text: textContent,
    style: styles
  }
}

function createStackedColumnPDF(title, textContent) {
  return {
    stack: [
      {
        text: title,
        style: 'header',
      },
      {
        text: textContent,
        style: 'paragraph',
      }
    ],
    width : '50%',
    unbreakable : true,
  };
}

function createPDFContent(titlesAndTexts) {
  let titleA, textA, titleB, textB;
  docDefinition.content = [];
  for (let idx = 0; idx < titlesAndTexts.length - 1; idx += 2) {
    [titleA, textA] = titlesAndTexts[idx];
    if (titlesAndTexts[idx + 1]) {
      [titleB, textB] = titlesAndTexts[idx + 1];
    } else {
      [titleB, textB] = ["", ""];
    }

    docDefinition.content.push({
      columns: [
        createStackedColumnPDF(titleA, textA),
        createStackedColumnPDF(titleB, textB),
      ]
    });
  }
  pdfMake.createPdf(docDefinition).open({}, newWindow);
}


/* function createPDFContent(titlesAndTexts){
  let title, text;
  docDefinition.content = [];
  for (let idx = 0; idx < titlesAndTexts.length; idx++) {
    [title,text] = titlesAndTexts[idx];
    docDefinition.content.push(createItemPDF(title,"header"));
    docDefinition.content.push(createItemPDF(text,"paragraph"));
  }

  pdfMake.createPdf(docDefinition).open({},newWindow);
} */

const docDefinition = {
  content: [],
  styles: styles,
  defaultStyle: {
    columnGap: 30,
  },
}


// pdfMake.createPdf(docDefinition).open({},newWindow);