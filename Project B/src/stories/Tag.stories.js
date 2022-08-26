import Tag from "../components/Tags/Tag";

export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    label: { control: { type: "text" } },
    active: { control: "boolean" },
    size: { control: { type: "radio" }, options: ["small", "medium", "large"] },
  },
};
export const Tag1 = (props) => {
  return <Tag {...props}></Tag>;
};
