export default function initExperience() {
  const acc = new Accordion(".accordion-container", {
    onOpen: function (currentElement) {
      console.log(currentElement);
    },
  });
  acc.open(0);
}
