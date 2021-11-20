class serviceDoc {
  //  GET FILE BACKGROUND COLOR
  getDocBgcolor(type) {
    if (type === "pdf") return "light-pdf-red";
    else if (type === "doc" || type === "docx") return "light-doc-blue";
    else if (type === "xls" || type === "xlsx") return "light-excel-green";
    else if (type === "ppt" || type === "pptx") return "light-ppt-red";
    else if (type === "txt") return "icon-txt light-txt-grey";
    else return "brand-tonic";
  }

  // GET FILE ICON AND COLOR STYLE
  getDocIconStyle(type) {
    if (type === "pdf") return "icon-pdf darkish-pdf-red";
    else if (type === "doc" || type === "docx")
      return "icon-doc darkish-doc-blue";
    else if (type === "xls" || type === "xlsx")
      return "icon-xls darkish-excel-green";
    else if (type === "ppt" || type === "pptx")
      return "icon-ppt darkish-ppt-red";
    else if (type === "txt") return "icon-txt darkish-txt-grey";
    else return "icon-pdf brand-tonic";
  }
}

export const $serviceDoc = new serviceDoc();
