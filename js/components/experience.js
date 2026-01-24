export default function initExperience() {
  $("#accordion").accordion({
    icons: { header: "ui-icon-plus", activeHeader: "ui-icon-minus" },
    header: ".acc-header",
  });
}
