export default function initExperience() {
  if ($(".experience").length == 0) return;
  const acc = new Accordion(".accordion-container", {
    onOpen: function (currentElement) {
      console.log(currentElement);
    },
  });
  acc.open(0);
}
