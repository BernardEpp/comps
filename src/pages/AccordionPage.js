import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "asdfksadf",
      label: "Can I use react on a project?",
      content: "You can use it on any project!",
    },
    {
      id: "asdfksasdff",
      label: "Can I use CSS on a project?",
      content: "You can use it on any project!",
    },
    {
      id: "asdfasdfaskdf",
      label: "Can I use JS on a project?",
      content: "You can use it on any project!",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
