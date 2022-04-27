import { StoryType } from "../types";

type ItemProps = {
  item: StoryType;
  onClickDelete: (e: number) => void;
};

const Item = ({
  item: { title, url, author, points, objectID },
  onClickDelete,
}: ItemProps) => {
  return (
    <tr>
      <td className="itemTitle">{title}</td>
      <td className="itemUrl">{url}</td>
      <td>{author}</td>
      <td>{points}</td>
      <td onClick={() => onClickDelete(objectID)}>Delete</td>
    </tr>
  );
};

export default Item;
