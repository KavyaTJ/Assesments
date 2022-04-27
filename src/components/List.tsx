import "./List.css";
import Item from "./Item";
import { StoryType } from "../types";

type ListProps = {
  ListOfItems: Array<StoryType>;
  onClickDelete: (e: number) => void;
};

const List = ({ ListOfItems, onClickDelete }: ListProps) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Author</th>
            <th>Comments</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ListOfItems.map((item) => (
            <Item
              key={item.objectID}
              item={item}
              onClickDelete={onClickDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
