import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type FAQ = {
  question: string;
  answer: string;
};

type Props = {
  items: readonly FAQ[];
};

export function FaqAccordion({ items }: Props) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-2">
      {items.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`item-${index}`}
          className="glass-panel px-6"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between py-5 text-left text-lg font-semibold text-neutral transition-colors hover:text-primary">
              <span>{item.question}</span>
              <ChevronDownIcon className="h-5 w-5 shrink-0 transition-transform duration-300" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="pb-6 text-neutral/70 leading-relaxed">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
