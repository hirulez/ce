const { expect } = require("chai");

describe("Headers", () => {
  it("Column and row headers are th cells", () => {
    let test = jspreadsheet(root, {
      data: [
        ["Mazda", 2001],
        ["Peugeot", 2010],
      ],
      columns: [{ title: "Model" }, {}],
    });

    const columnHeaders = root.querySelectorAll("thead > tr > th");
    expect(columnHeaders.length).to.equal(2);
    expect(columnHeaders[0].getAttribute("scope")).to.equal("col");
    expect(columnHeaders[0].textContent).to.equal("Model");
    expect(columnHeaders[1].textContent).to.equal("B");
    expect(root.querySelector("thead > tr > td.jexcel_selectall")).to.not.equal(null);

    const rowHeaders = root.querySelectorAll("tbody > tr > th.jexcel_row");
    expect(rowHeaders.length).to.equal(2);
    expect(rowHeaders[1].getAttribute("scope")).to.equal("row");
    expect(rowHeaders[1].textContent).to.equal("2");

    test.insertRow();
    test.insertColumn();
    expect(root.querySelectorAll("tbody > tr > th.jexcel_row").length).to.equal(3);
    expect(root.querySelectorAll("thead > tr > th[scope=col]").length).to.equal(3);
    expect(root.querySelectorAll("tbody > tr > td").length).to.equal(9);
  });
});
