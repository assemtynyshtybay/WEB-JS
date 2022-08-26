import { useArgs } from "@storybook/client-api";
import AllTags from "../components/Tags/Tags";

export default {
  title: "Tags",
  component: AllTags,
  argTypes: {
    size: {
      defaultValue: "large",
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    mode: {
      defaultValue: "radio",
      control: { type: "radio" },
      options: ["radio", "checkbox"],
    },
  },
};

const tagsData = {
  checked: ["Новые"],
  values: [
    "Все",
    "Новые",
    "В обработке",
    "Готов к выдаче",
    "Доставляется",
    "Выданные",
    "На возврате",
    "Возвращенные",
    "Отменные",
  ],
  mode: "radio",
  onChange: () => {},
};

const TagsTemplate = (args) => {
  const [{}, updateArgs] = useArgs();

  args.onChange = (checked) => {
    updateArgs({ checked });
  };
  return <AllTags {...args} />;
};
export const Tags = TagsTemplate.bind({});
Tags.args = {
  values: tagsData.values,
  checked: tagsData.checked,
  onChange: tagsData.onChange,
  mode: tagsData.mode,
};
